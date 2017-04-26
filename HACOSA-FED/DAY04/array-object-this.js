/**
 * --------------------------------------------------------
 * Array
 * --------------------------------------------------------
 */

[] === []  ->  false 심지어 배열 안의 값이 달라도 다르다. 배열은 그 자체로 각각의 다른 특성을 가지고 있다고 생각하여 true가 나올 수 없다.

var class01 = ['a', 'b', 'c'];
var class02 = class01;
var class03 = ['a', 'b', 'c'];

class01 === class02 //  true
class01 === class03 // false

/**
 * --------------------------------------------------------
 * object
 * --------------------------------------------------------
 */

 var person = {
     name: 'a',
     age: 30,
     phone: '010-0000-0000',
     eat: function(food){ // 함수를 value로 처리한 것.
         console.log(this.name + '가 ' + food + '를 먹습니다.');
     }
 }

 // `.` dot 앞에 있는 것은 객체라고 생각하면 된다. person은 객체이며, 배열도 객체이다.(arr.length)
 person.eat('사과');
 person['eat']('사과');
 person.eat('사과');

 // ex2. 객체를 배열로 선언하기
 var people = [{
     name: 'b',
     age: 29,
     phone: '010-0000-0000'
 }, {
     name: 'c',
     age: 28,
     phone: '010-0000-0000'
 }];


 /**
  * --------------------------------------------------------
  * this
  * --------------------------------------------------------
  */

// window, strict모드의 경우 undefined.
function abc() {
    function ddd(){
        console.log(this);
    }
    ddd();
}
abc();

// ddd객체가 값으로 나온다.
function abc() {
    function ddd(){
        console.log(this);
    }
    var obj = {
        ddd : ddd
    }
    ddd();
    obj.ddd();
}
abc();

function abc() {
    function ddd(){
        console.log(this);
    }
    var obj = {
        ddd: ddd;
    };
    var person = {
        name: 'a',
        age: 30,
        phone: '010-0000-0000'
    }
    new ddd(); // 값이 계속 변한다.
    ddd.call(person);
}
abc();

// 여기서의 this는 제이쿼리가 선언한 값으로 나오지만 실제 자바스킙트에서의 this는 해당 function이 new로 실행이 된건지 call로 실행이 된 것인지 확인해야 한다.
$('.btn').on('click', function(e){
    $(this).addClass('on');
});

//위의 코드는 아래와 같은 함수가 선언되어있기 때문일 것이다.
function $(){
    return{
        on: function(event, callback){
            // click event
        }
    };
}

/**
 * --------------------------------------------------------
 * prototype
 * - window객체는 객체에 걸린 링크가 있는데 객체에 걸린 링크를 프로토타입이라고 한다.
 * - 객체에 걸린 링크
 * - 스코프 체이닝을 통해 값을 찾으러 올라가다가 프로토타입에도 없을 경우에 에러가 난다.
 * - window객체는 객체에 걸린 링크가 있는데 객체에 걸린 링크를 프로토타입이라고 한다.
 * - 콘솔에 객체를 찍어보면 `__proto__`라고 링크가 걸려있는 객체가 나오는데 이 안에 링크가 걸려있는 객체 리스트가 나온다.
 * --------------------------------------------------------
*/

function tt() {
    console.log(toString);  // 함수를 실행하면 toStrong을 찾게 되는데 함수안에 없으므로 밖에서 찾게 되겠지..
}
tt();

/**
 * --------------------------------------------------------
 * new Date();
 * 항상 새로운 값을 리턴해야하므로 new로 처리한다.
 * --------------------------------------------------------
*/
function getWeekDay(){
    return new Date().getDay();     // 각각의 요일은 숫자로 리턴된다.(일요일 === 0)
}

// ex1. 오늘의 요일을 숫자가 아닌 요일명으로 나오도록 함수를 만들어라.
function getWeekDay2(){
    var weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    return weekDays[new Date().getDay()];
}

// ex2. `ex1`을 언어별로 나올 수 있도록 처리해보자.
function getWeekDay3(lang){
    var weekDaysKR = ['일', '월', '화', '수', '목', '금', '토'];
    var weekDaysEN = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    if(lang === 'EN') {
        return weekDaysEN[new Date().getDay()];
    } else if(lang === 'KR'){
        return weekDaysKR[new Date().getDay()];
    }
}

// ex3. '객체'를 활용하면 훨씬 코드가 간결해진다.
function getWeekDay3(lang){
    if(!lang) lang = 'KR';  // 함수 호출 시 값을 입력하지 않을 경우 undefind 키 값을 찾으려 해서 에러가 난다. 따라서 방어코드가 필요하다.
    var weekDays = {
        KR: ['일', '월', '화', '수', '목', '금', '토'],
        EN: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    };

    // 값이 없는 국가 코드를 입력할 경우에는 어떻게 할 것인가. try catch사용
    try {
        var result = weekDays[lang][new Date().getDay()];
    } catch(e){
        console.error('지원하지 않는 국가코드입니다.' + '지원하는 국가는' +  Object.keys(weekDays) + '입니다.' +  '에러는 다음과 같습니다.' + e);
    }
    //return weekDays[lang][new Date().getDay()];
    return result;
}
console.log(getWeekDay3('EN')); //EN을 넣었을 때에는 영어가 나오게 KR을 넣었을 경우에는 한글이 나오게.
console.log(getWeekDay3('JP')); //지원하지 않는 국가코드입니다.지원하는 국가는KR,EN입니다.
