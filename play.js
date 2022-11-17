var Dices = document.querySelectorAll('.conlac');

var timeDown = document.querySelector('.timeDown');

var tai = document.querySelector('.tai');

var xiu = document.querySelector('.xiu');

var wtask = document.querySelector('.wait-task');

var viTri = document.querySelectorAll('.vi-tri-ket-qua');


var datCuoc = () => {
    var result = '';

    var Bets = document.querySelector('.bets');
    var Balance = document.querySelector('.balance');

    if (Number(Bets.value) < 1000 || Number(Bets.value) == '') {
        result = 'Vui lòng cược tối thiểu 1000!';
    } else if (Number(Bets.value) > Number(Balance.value)) {
        result = 'Số dư không khả dụng vui lòng nạp thêm tiền!';
    } else {
        result = 'Đặt cược thành công';
        balanceNow = Number(Balance.value) - Number(Bets.value);
        Balance.value = balanceNow;
    }

    wtask.innerHTML = result;

    setTimeout(function () {
        wtask.innerHTML = '';
    }, 5000);

}

var cuoc = '';

tai.onclick = () => {
    datCuoc();
    cuoc = 'tai';
}

xiu.onclick = () => {
    datCuoc();
    cuoc = 'xiu';
}

var i = 6;
var timeD;
var wait;

ketqua = '';

function v() {

    tai.disabled = 'true';
    xiu.disabled = 'true';

    viTri[0].innerHTML = '<div></div>'
    viTri[1].innerHTML = '<div></div>';
    viTri[2].innerHTML = '<div></div>';

    let cl1 = Math.floor(Math.random() * 6) + 1;
    let cl2 = Math.floor(Math.random() * 6) + 1;
    let cl3 = Math.floor(Math.random() * 6) + 1;

    var getBox = (value) => {
        if (value === 1)
            return Dices[0];
        else if (value === 2)
            return Dices[1]
        else if (value === 3)
            return Dices[2]
        else if (value === 4)
            return Dices[3]
        else if (value === 5)
            return Dices[4]
        else if (value === 6)
            return Dices[5]
    }

    vx1 = getBox(cl1).cloneNode(10);
    vx2 = getBox(cl2).cloneNode(10);
    vx3 = getBox(cl3).cloneNode(10);

    viTri[0].appendChild(vx1);
    viTri[1].appendChild(vx2);
    viTri[2].appendChild(vx3);

    var Bets = document.querySelector('.bets');
    var Balance = document.querySelector('.balance');

    if (Bets.value != '') {
        if (cuoc == ketqua) {
            wtask.innerHTML = '<span class="text-success"> BẠN ĐÃ THẮNG !</span>';
            Balance.value += Number(Bets.value) * 2;
            Bets.value = '';
        } else {
            wtask.innerHTML = '<span class="text-danger"> BẠN ĐÃ THUA !</span>';
            Bets.value = '';
        }
    }

    wait = setInterval(() => {
        wtask.innerHTML = 'CHỜ ' + i + ' GIÂY';
        if (i <= 0) {
            clearInterval(wait);
            wtask.innerHTML = '';
            ketqua = '';
            cuoc = '';
            i = 5;
            a();
        } else {
            i--;
        }
    }, 1000);
}

function a() {

    tai.disabled = '';
    xiu.disabled = '';

    timeD = setInterval(() => {
        timeDown.innerHTML = i;
        if (i <= 0) {
            clearInterval(timeD);
            i = 3;
            v();
        } else {
            i--;
        }
    }, 1000);
}

a();
