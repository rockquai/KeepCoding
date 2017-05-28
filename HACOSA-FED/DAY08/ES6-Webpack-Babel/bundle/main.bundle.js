/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// [미션] 5번 비동기적으로 날짜 출력하기

// ex1. 한번만 사용하는 함수
// module.exports = () => {
//     let count = 1;
//     const max = 5;
//     const intervalID = setInterval(() => {
//         if ( count++ >= max ) {
//             clearInterval(intervalID);
//         }
//         console.log(new Date());
//     }, 1000);
// };

// ex2. 재사용 가능한 비동기 함수 => 생산자 관점
module.exports = function (callback, max, term) {
    var count = 1;
    var intervalID = setInterval(function () {
        if (count++ >= max) {
            clearInterval(intervalID);
        }
        callback();
    }, term);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ex1. 재사용 가능한 비동기 함수 => 소비자 관점
var asynoLooper = __webpack_require__(0);

asynoLooper(function () {
    console.log(new Date());
}, 5, 1000);

asynoLooper(function () {
    console.log('5번 출력');
}, 5, 800);

////////////////////////////////////////////
// ex2. [ES6] arrow function
// ES5
var funcES6 = function funcES6(a, b, c) {
    return a + b + c;
};

var funcES61 = function funcES61(a, b, c) {
    return a + b + c;
};

var funcES62 = function funcES62(a) {
    return a;
};

var funcES63 = function funcES63(a, b) {
    return a + b;
};

/////////////////////////////////////////////////////
// ex3. Destructuring Assignment(해체 할당, 비구조화 할당)
var user1 = {
    age: 33,
    name: 'name',
    money: 10000
};

console.log(user.age);
console.log(user.name);
console.log(user.money);

// key만 있으면 value이 동일
var _user = user2,
    age = _user.age,
    name = _user.name,
    money = _user.money;


console.log(age);
console.log(name);
console.log(money);

var f1 = function f1(user) {
    var age = 55;
    var innerUser = {
        age: age, // age는 상위에 있는 age값 `55`가 된다.
        name: user.name,
        money: user.money
    };
};

// user.age는 newAge 변수에 활당 => newAge = user.age;
var f2 = function f2(user) {
    var newAge = user.age,
        newName = user.name,
        newMoney = user.money;


    var innerUser = {
        age: age,
        name: name,
        money: money
    };
};

var f3 = function f3(user) {
    var newAge = user.age,
        newName = user.name,
        newMoney = user.money;


    var innerUser = {
        age: newAge,
        name: newName,
        money: newMoney
    };
};

// 파라미터 안에 객체
var person = {
    age: 30,
    name: 'name',
    money: 10000
};

var f4 = function f4(_ref) {
    var age = _ref.age,
        name = _ref.name,
        money = _ref.money;

    return {
        age: age, name: name, money: money
    };
};

f4(person);

// ...arguments
var f5 = function f5() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log(args);
};

f5(1, 2, 3, 4, 5); // 배열 출력

/***/ })
/******/ ]);