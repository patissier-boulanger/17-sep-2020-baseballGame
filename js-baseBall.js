var userNumberArr;
var genNumberArr;
var tryCnt = 0;
var genCnt = 0;
var eBord = document.querySelector("#eBord");


var userInputNumber = function() {
    userNumberArr = document.querySelector("input").value.split("");
    if(genCnt < 1){
        randomNumberGen();
        genCnt ++;
    }
    var ballCnt = 0;
    var strikeCnt = 0;
    for(i = 0; i < userNumberArr.length; i++){
        for(j = 0; j < userNumberArr.length; j++){
            if(i == j && userNumberArr[i] === genNumberArr[j]){
                strikeCnt ++;
            }
            else if(userNumberArr[i] === genNumberArr[j]){
                ballCnt++;
            }
        }
    }
    if(JSON.stringify(userNumberArr) === JSON.stringify(genNumberArr)) {
        reBtn();
        return false;
    }
    var createLi = document.createElement("li");
    var node = document.createTextNode("스트라이크 갯수는" + strikeCnt + "  볼 갯수는" + ballCnt);
    createLi.appendChild(node);
    eBord.appendChild(createLi);

    tryCnt ++;

    if(tryCnt > 4) {
        reBtn();
        tryCnt = 0;
    }
}

var clearEbord = function() {
    while (eBord.hasChildNodes()) {
        eBord.removeChild(eBord.firstChild);
    }
}

var reBtn = function() {
    if(tryCnt > 4){
        var node = document.createTextNode("you lose!   ")
    }
    if(JSON.stringify(userNumberArr) === JSON.stringify(genNumberArr)){
        var node = document.createTextNode("you win!    ")
    }
    var createLi = document.createElement("li");
    createLi.appendChild(node);
    eBord.appendChild(createLi);
    var reBtn = document.createElement("button");
    var reBtnText = document.createTextNode("restart");
    reBtn.appendChild(reBtnText);
    createLi.appendChild(reBtn);
    reBtn.onclick = clearEbord;
}

/* var randomNumberGen = function() {
    var randomArr = [];
    var i = 0;
    while(i < 3) {
        var n = Math.floor(Math.random()*10);
        if(!sameNum(n)) {
            randomArr.push(n);
            i++;
        }
        function sameNum (n) {
            for(i = 0; i < randomArr.length; i++) {
                if(n === randomArr[i]) {
                    return true;
                }
            }
            return false;
        }
    var ranArr = randomArr.join("");
    console.log(ranArr);
    genNumberArr = ranArr.split("");
    }
} */


var randomNumberGen = function() {
    var randomArr = [];
    var i = 0;
    var SetToArray = [];
    for(i = 0; SetToArray.length < 3; i++) {
        var n = Math.floor(Math.random()*10);
        randomArr.push(n);
        var uniqueSet = new Set(randomArr);
        SetToArray = [...uniqueSet];
        console.log(SetToArray);
        console.log(SetToArray.length);
        i++;
        }
    var ranArr = SetToArray.join("");
    console.log(ranArr);
    genNumberArr = ranArr.split("");
}

// 이짓하지 말고 https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c가 더 편한 것 같기도..

var maxNumberInput = function(_this) {
    var inputNumberCheck = _this.value.split("");
    for (i = 0; i < inputNumberCheck.length; i++) {
        for(j = 0; j < inputNumberCheck.length; j++) {
            if(i !== j && inputNumberCheck[i] === inputNumberCheck[j]){
                alert("중복된 숫자는 허용되지 않습니다")
                _this.value = _this.value.slice(0, 0);
                return false;
            }
        }
    }
    if(_this.value.length > 3){
        alert("3자리 이하로 써주세요");
        _this.value = _this.value.slice(0, 3);
    }

}


function init() {

}


init();


/* this가 매개변수가 될 함수는 매개변수를 _this로 설정한다
함수가 선언될때 있는 매개변수가 parameter, 함수를 호출할때 넣는 변수가 argument. 제로쵸 블로그 참조 
함수에 값을 전달해주는게 argument, 함수 내부로 값을 넣는게 parameter

https://www.zerocho.com/category/JavaScript/post/572dcbbd2115c895b0f248fd 

문자열을 배열로 만들 수 있음 split으로 
https://riptutorial.com/ko/javascript/example/9032/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EB%B0%B0%EC%97%B4%EB%A1%9C-%EB%B3%80%ED%99%98
전역객체를 잘 사용해야함




제어문 && 
*/



