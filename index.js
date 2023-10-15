//1
let tap = document.querySelector('.button1');

tap.onclick = () => {
    let major = 100, minor = 0, ans = ''; 
    do {
        ans = prompt('Ваше число ' + Math.ceil((major-(major-minor)/2)) + '?\nВведите: \n> - если загаданное число больше\n< - если загаданное число меньше\n= - если загаданное число равно');
        if (ans === '>') {
            minor = Math.floor(major-(major-minor)/2);
        }
        if (ans === '<') {
            major = Math.ceil(major-(major-minor)/2);
        }
        if (ans === '<' && major == 1) {
            major = 0;
        }
    } while (ans !== '=' && ans !== null);
    if (ans) {
        alert('Было загадано число ' + Math.ceil(major-(major-minor)/2));
    }
}

//2
let b2 = document.querySelector('.b2');
let i2 = document.querySelector('#i2');
let ans2 = document.querySelector('.ans2');

b2.onclick = () => {
    let num = 0;
    let text = '';
    while (num < i2.value) {
        text += '#' + ' ';
        num++;
    }
    ans2.innerHTML = text;
}

//3
let b3 = document.querySelector('.b3');
let i3 = document.querySelector('#i3');
let ans3 = document.querySelector('.ans3');

b3.onclick = () => {
    let num = i3.value;
    let text = '';
    while (num >= 0) {
        text += num + ' ';
        num--;
    }
    ans3.innerHTML = text;
}

//4
let tap4 = document.querySelector('.b4');

tap4.onclick = () => {
    let ans = 0;
    do {
        ans = prompt('2 + 2 * 2 = ?');
    } while (ans !== String(6) && ans !== null);

    if (ans == '6') {
        alert('Решено');
    }
}

//5
let minor2 = document.querySelector('#i5_1');
let major2 = document.querySelector('#i5_2');
let b5 = document.querySelector('.b5');
let ans5 = document.querySelector('.ans5');

b5.onclick = () => {
    let count = 0;
    let text = '';
    if (+major2.value !== null && +minor2.value !== null && +major2.value > +minor2.value) {
        for (let i = +minor2.value; i <= +major2.value; i++) {
            count++;
            if (count % 4 == 0) {
                text += i + ' ';
            }
        }
    }
    ans5.innerHTML = text;
}