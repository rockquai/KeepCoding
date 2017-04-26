'use strict';

/**
 * --------------------------------------------------------
 * 즉시실행함수(IIFE)
 * 캡슐화가 가능하여 전역변수와 충돌을 피할 수 있다
 * --------------------------------------------------------
 */

// ex1.
var abc = (function abc() {
    return 'abc';
}());
console.log(abc);
// 위와 코드와 아래 코드는 동일하다
// 함수는 지역, 파라미터, 아큐먼트 셋팅을 한다.
var abc = 'abc';

//ex2.
var abc = (function abc() {
    var aaa = 111;
    var result = aaa + 123;
    return result;
}());
console.log(abc);

// ex3.
var person = (function abc() {
    return {
        name: '이름',
        stomach: [],
        eat: function(food) {
            console.log(food + '를 먹는다');
            this.stomach.push(food)
        }
    };
}());

// ex4. stomach[]; 비공개, 은닉화
// 스코프를 통해서 'var stomach = [];' 찾는다.
var person = (function abc() {
    var stomach = [];
    return {
        name: '이름',
        eat: function(food) {
            console.log(food + '를 먹는다');
            stomach.push(food);
        }
    };
}());

/**
 * --------------------------------------------------------------------------
 * Closure
 * 독립적인 (자유)변수 (지역적으로 사용되지만, 둘러싼 범위 안에서 정의된 변수)를 참조하는 함수.
 * 다른 말로 하면, 이 함수들은 그들이 생성된 환경을 '기억'한다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
 * --------------------------------------------------------------------------
 */

// 함수가 실행이 되면 지역변수인 `var stomach= [];` 는 사라져야 하는데. 사라지지 않는다.
// `stomach.push(food);` => 이것 때문에 `var stomach = [];` 사라지지 않는다.
var person = (function abc() {
    var stomach = []; // 자유변수라고 부른다
    return {
        name: '이름',
        eat: function(food) {
            console.log(food + '를 먹는다');
            stomach.push(food);
        }
    };
}());

/**
 * --------------------------------------------------------
 * JavaScript 함수는 일급 객체
 * - 변수, 데이터 구조 안에 담을 수 있다.
 * - 인자(Parameter, Argument)로 전달할 수 있다.
 * - 반환 값(Return Value)으로 사용할 수 있다.
 * - 런타임(실행) 중에 생성할 수 있다.
 * --------------------------------------------------------
 */

// 매개변수
function aa(func) {
    func('이벤트');
}

// 인자
aa(function(e){
    console.log('콜백함수');
    console.log(e);
});

// 반환
function cc() {
    return function() {
        console.log('반환되는 함수가 실행되었다');
        return function(){
            console.log('반환 반환');
        };
    };
}
cc()()();

//ex. sort()정렬
var arr = [11, 3, 21, 4, 8, 6];
arr.sort(); // [11, 21, 3, 4, 6, 8] ==> 문자로 인식을 해서 이런 결과가 나옴.

arr.sort(function(a, b){
    return a - b; // [3, 4, 6, 8, 11, 21]
});

//ex. 더하는 것과 곱하는 건만 빼면 sum, multiple
function sum(arr) {
    var result = 0;
    for ( var i = 0; i<arr.length; i++ ) {
        result += arr[i];
    }
    return result;
}

function sumPlus20(arr) {
    var result = 0;
    for ( var i = 0; i<arr.length; i++ ) {
        result += arr[i] + 20;
    }
    return result;
}

function multiple(arr) {
    var result = 0;
    for ( var i = 0; i<arr.length; i++ ) {
        result *= arr[i];
    }
    return result;
}


sum([1,2,3,4,5,6,7,8,9]);
multiple([1,2,3,4,5,6,7,8,9]);

/**
 * --------------------------------------------------------------------------
 * 고차함수(Higher Order Function), 콜백함수(Callback)
 * - 함수의 인자로 함수를 받거나 함수를 리턴
 * --------------------------------------------------------------------------
 */

// ex1.
var arr = [1,2,3,4,5,6];
arr.map(function(v) {
    return v + 20;
});

// ex2. 'ex1.'의 map() 내부는 아래와 같다
var arr = [1,2,3,4,5,6];
function map(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

map(arr, function(v) {
    return v + 20; // [21, 22, 23, 24, 25, 26]
});

// ex3.
var arr = [1,2,3,4,5,6];
arr.filter(function(v) {
    return v % 2 === 0; // [2, 4, 6]
});

// ex4.
$().animate({
    x : '100px',
    y : '200px',
    duration: 3000
}, function() {
    console.log('완료');
});

$().on('click', function(e) {
    console.log(e.name);
});

// 위의 코드인 jQuery의 $() 내부
function $() {
    return {
        animate: function(option func) {
            //option에 따라 실행
            func();
        },
        on : function(eventName, handler) {
            // event가 일어나면
            setTimeout(function() {
                handler({
                    name: 'event'
                });
            }, 2000);
        }
    }
}
