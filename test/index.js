var key = require('../src/SafeKeyboard.es6');
key = key();

// key.addEventListener('ck', function (event) {
//     console.log(event.message);
//     document.getElementById('inputa').innerHTML = event.message;

// });


// document.addEventListener('build', function (event) {
//     // document.getElementById('inputa').innerHTML = event.inputer;
// }, false);

key.rebind();
var fn = function (event) {
    // self.checkInputValue(event.inputer);
    document.getElementById('inputb').innerHTML = event.inputer;
}
document.addEventListener('build', fn, false);

// document.getElementById('callv').addEventListener('click', function () {
//     key.rebind();

//     document.removeEventListener('build', fn, false);
//     var fn = function (event) {
//         // self.checkInputValue(event.inputer);
//         document.getElementById('inputb').innerHTML = event.inputer;
//     }
//     document.addEventListener('build', fn, false);

// })

document.getElementById('createv').addEventListener('click', function () {
    document.removeEventListener('build', fn, false);
    document.getElementById('inputa').innerHTML = '<div class="safekeyboardinputer myinputer" type="identity" id="skeyinputer" placeholder="请您输入完整的手机号" max-length="20" autofocus="true" value="11" autosubmit="true" pattern=""></div>'
    key.rebind();
})


document.getElementById('hidev').addEventListener('click', function () {
    key.hide();

    // document.getElementById('skeyinputer').parentNode.removeChild(document.getElementById('skeyinputer'))
    // key.rebind(document.querySelector('.aaa'));
})


document.getElementById('destroyv').addEventListener('click', function () {
    key.hide();
    document.getElementById('skeyinputer').parentNode.removeChild(document.getElementById('skeyinputer'))
    key.rebind();
    document.addEventListener('build', fn, false);
})






// document.getElementById('bbb').addEventListener('DOMAttrModified', function () {
//     console.log('aaaa')
// })


// Object.defineProperty(document.querySelectorAll('.aaa')[0], 'value', {
//     enumerable: true, // 可枚举
//     configurable: true, // 不能再define
//     get: e => {
//         // console.log('...........' + value)
//         return value;
//     },
//     set: newVal => {
//         value = newVal;
//         console.log('...........' + value);
//         if (document.querySelectorAll('.aaa')[0].value.length >= 6) {
//             key.clearValue();
//         }
//     }
// });
