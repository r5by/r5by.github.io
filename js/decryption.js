// const state = {
//   stopped: false,
//   typing: false
// }

// wait(1200)
//   .then(()=> decryptText(glitch_this, 'my old friend'))
//   .then(()=> wait(1000))
//   .then(()=> decryptText(glitch_this, 'it\'s only the beginning'))
//   .then(()=> wait(1100))
//   .then(()=> decryptText(glitch_this, 'please say something...'));
  // .then(()=> input.removeAttribute('disabled'));


// input.addEventListener('input', _.debounce(()=> {
//   if (stateObj.typing) {
//     stateObj.stopped = true;
//     return
//   };
//   typeInput();
// }, 500, {maxWait: 1000}));
  
// function typeInput(){
//   decryptText(glitch_this, input.value, state)
//     .then(r => {
//     // console.log('returned:', r);
//     r ? state.typing = false : typeInput();
//   });
// }

/* Required random() function */
function random(a, b) {
          return Math.floor(Math.random()*(b-a+1)+a);
}
// async function decryptText (el, text, stateObj, glitches,
// settings = {
async function decryptText (el, text, glitches,
          settings = {
                    stepsMin: 0,
                    stepsMax: 3,
                    delayMin: 140,
                    delayMax: 400,
                    ghostLettersProbability: .15,
                    maxGhostLetters: 8
          }) {
                    // stateObj.typing = true;
                    // stateObj.stopped = false;
                    
                    glitches = glitches || 'ABCDĐEFGHIJKLMNOPQRSTUVWXYZabcdđefghijklmnopqrstuvwxyzĄąĆćŻżŹźŃńÓóŁł一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何ĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>$€£¥¢:;,.* •°·…±†‡æ«»¦¯—–~˜¨_øÞ¿▬▭▮▯♥♪♫┐└╛╟╚╔╘╒╓┘┌░▒▓○‼';
                    const {stepsMin, stepsMax, delayMin, delayMax, ghostLettersProbability: ghostProb} = settings;
                    let {maxGhostLetters: maxGhosts} = settings;
                    
                    const after = [...text],
                    randomSteps = () => random(stepsMin, stepsMax),
                    textTable = [...el.textContent]
                                        .filter(l => l !== '\n')
                                        .map(l => ({
                                        l,
                                        steps: randomSteps(),
                                        ghosts: ''
                                        })),
                    getText = () => textTable.reduce((text, char) => text+= char.l + char.ghosts, ''),
                    getClitchChar = () => glitches[random(0, glitches.length)];
                    
                    const lastMatching = after.reduce((last, l, i) => {
                    if (i >= textTable.length) return last
                    return last == i-1 && l == textTable[i].l ? i : last
                    }, -1);
                    
                    while (textTable.length < after.length) textTable.splice(random(lastMatching+1, textTable.length), 0, {
                    l: '',
                    steps: randomSteps(),
                    ghosts: ''
                    });
                    while (textTable.length > after.length) after.splice(random(lastMatching+1, after.length), 0, '');
                    
                    let promiseList = after.map((l, i) => handleLetter(i, l));
                    let results = await Promise.all(promiseList);
                    // console.log('stopped:', stateObj.stopped, 'typing:', state.typing);
                    // console.table(results);
                    // stateObj.typing = false;
                    return results.every(r => r)
                    
                    function handleLetter (i, l) {return new Promise(resolve => {
                    const letter = textTable[i];
                    loop();
                    
                    function loop () {
                    // if (stateObj.stopped) {
                    //   resolve(false);
                    //   return
                    // }
                    setTimeout(() => {
                    letter.steps--;
          
                    letter.l = letter.steps <= 0 || letter.l == l ? l : getClitchChar();
          
                    if (letter.l == l && letter.ghosts != '') letter.ghosts = letter.ghosts.slice(0,-1);
                    else if (maxGhosts > 0 && Math.random() < ghostProb) {
                    letter.ghosts += getClitchChar();
                    maxGhosts--;
                    }
                    
                    el.textContent = getText();
                    if (letter.l == l && letter.ghosts == '') {
                    letter.steps = 0;
                    resolve(true);
                    return
                    }
                    loop();
                    }, random(delayMin, delayMax));
                    }
                    })}
}

/* Mouse enter&leave effect */
let glitch_it = document.getElementById("glitch_this");
glitch_it.addEventListener("mouseenter", function( event ) {   
  switch(random(0, 3)) {
            case 0:
              decryptText(glitch_this, '在地球尋求邂逅是否搞錯了什麼');
            break;
            case 1:
              decryptText(glitch_this, 'Re：从零开始的程序猿生活');
            break;
            case 2:
              decryptText(glitch_this, '為美好的世界獻上bug！');
            break;
            default:
              decryptText(glitch_this, '這個攻城獅明明超強卻過分慎重');
  }
}, false);

glitch_it.addEventListener("mouseleave", function( event ) {   
  switch(random(0, 2)) {
    case 0:
    decryptText(glitch_this, '(๑•́ ₃ •̀๑)');
    break;
    case 1:
    decryptText(glitch_this, '✿◡‿◡');
    break;
    default:
      decryptText(glitch_this, '(ง •̀_•́)ง');
  }
}, false);

/* Mouse hover effect */
// glitch_it.addEventListener("mouseover", function( event ) {
//   switch(random(0, 2)) {
//             case 0:
//               decryptText(glitch_this, '在地球尋求邂逅是否搞錯了什麼？！');
//             break;
//             case 1:
//               decryptText(glitch_this, 'Re：从零开始的碼農生活。');
//             break;
//             case 2:
//               decryptText(glitch_this, '為美好的世界獻上bug！');
//             break;
//             case 3:
//             decryptText(glitch_this, '(๑•́ ₃ •̀๑)');
//             break;
//             case 4:
//             decryptText(glitch_this, '✿◡‿◡');
//             break;
//             case 5:
//             decryptText(glitch_this, '(ง •̀_•́)ง');
//             break;
//             default:
//               decryptText(glitch_this, '這個gopher明明超強卻過分慎重！');
//   }
// }, false);
          
