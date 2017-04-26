'use strict';

/**
 * --------------------------------------------------------
 * prototype
 * - window객체는 객체에 걸린 링크가 있는데 객체에 걸린 링크를 프로토타입이라고 한다.
 * - 객체에 걸린 링크
 * - 스코프 체이닝을 통해 값을 찾으러 올라가다가 프로토타입에도 없을 경우에 에러가 난다.
 * - 콘솔에 객체를 찍어보면 `__proto__`라고 링크가 걸려있는 객체가 나오는데 이 안에 링크가 걸려있는 객체 리스트가 나온다.
 * --------------------------------------------------------
*/

function tt() {
    console.log(toString);
}
tt();

/**
 * --------------------------------------------------------
 * new Date();
 * 항상 새로운 값을 리턴해야하므로 new로 처리한다.
 * --------------------------------------------------------
*/
function getWeekDay(){
    return new Date().getDay(); // 각각의 요일은 숫자로 리턴된다.
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
console.log(getWeekDay3('EN')); 
console.log(getWeekDay3('JP')); //지원하지 않는 국가코드입니다.지원하는 국가는KR,EN입니다.
