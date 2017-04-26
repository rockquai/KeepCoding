###### 하코사 Front-End 스터디

# DAY 04
## Front-End
- Array
- Ojbect
- this
- prototype
- new Date()

### Q. 배열의 숫자를 모두 더하는 sum함수를 만드시오.

```js
// 방법1.
function sum(arr) {
    var i = 0;
    var result = 0;
    var length = arr.length;

    while(i < length) {
        result += arr[i];
        i += 1;
    }

    return result;
}

// 방법2.
function sum(arr){
    var result = 0;
    var length = arr.length;

    function plus(){
        i++;
    }

    for(var i = 0; i < length; plus()){ // hoisting에 의해서 다음과 같이 사용해도 문제없이 실행된다.
        result += arr[i];
    }
    return result;
}
```

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `기본형` : 숫자, 문자, 참/거짓
- `참조형` : 배열, 객체(함수도 객체이므로 포함된다고 생각하면 됨)

```js
[] === []  // false. 심지어 배열 안의 값이 달라도 다르다. 배열은 그 자체로 각각의 다른 특성을 가지고 있다고 생각하여 true가 나올 수 없다.

var class01 = ['a', 'b', 'c'];
var class02 = class01;
var class03 = ['a', 'b', 'c'];

class01 === class02 //  true
class01 === class03 //  false
```

---

### [Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `key`와 `value`를 가짐. 함수도 값으로 가질 수 있다.
- 선언 방법 `{key: value}`
- 객체의 접근 방법 `객체명[key]();`
- JavaScript 엔진에서 기본 세팅되어 있는 객체(`built in` 객체라고 부름)가 있음.  
- JavaScript의 기본 객체는 덮어 씌울 수 있다.
    - Object, Boolean, String, Math, Date, ...

```js
// ex1.
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
```

```js
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
```

---

### this
- 함수가 호출되는 방법에 따라 달라진다.

#### [this 호출 방법] strict mode

```js
'use strict';
function abc() {
    function ddd(){
        console.log(this); //  strict mode일 경우 undefined
    }
    ddd();
}
abc();
```

#### [this 호출 방법] method로 호출

```js
var p = {
    run : function(){
        console.log(this);  // 여기서의 this는 p가 가르키는 객체
    }
};
p.run();
```

#### [this 호출 방법] 생성자로 호출. 매번 새로운 this(인스턴스)를 반환한다.

```js
// 1. new로 불러야하는 생성자함수라고 하며 대문자로 표기하는 것이 코드컨벤션이다. (생성자 함수는 JavaScript에는 없는 개념. JAVA개념)
function P(){
    console.log(this);  // 여기서의 this는 new로 생성될 때마다 매 번 다른 객체를 생성한다.
}
new P();

// 2. new를 붙이게 되면 아래의 코드와 같다.
function P(){
    return {...}      
}
P();
```

#### [this 호출 방법] call, apply, bind 호출

```js
var p = {
    run : function(){
        console.log(this);
    }
};

function abc(){
    console.log(this);
}
abc.call(p); // 이때 여기의 this는 위에 있는 p의 this를 가리킨다.
```
---

### prototype
- window객체는 객체에 걸린 링크가 있는데 객체에 걸린 링크를 프로토타입이라고 한다.
- 객체에 걸린 링크
- 스코프 체이닝을 통해 값을 찾으러 올라가다가 프로토타입에도 없을 경우에 에러가 난다.
- 콘솔에 객체를 찍어보면 `__proto__`라고 링크가 걸려있는 객체가 나오는데 이 안에 링크가 걸려있는 객체 리스트가 나온다.

```js
function tt() {
    console.log(toString);
}
tt();
```

---

### new Date()
- 항상 새로운 값을 리턴해야하므로 `new`로 처리한다.

```js
function getWeekDay(){
    return new Date().getDay(); // 각각의 요일은 숫자로 리턴된다.
}
```

#### 오늘의 요일을 숫자가 아닌 요일명으로 나오도록 함수를 만들어라.

```js
function getWeekDay2(){
    var weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    return weekDays[new Date().getDay()];
}

// 언어별 처리
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
```
