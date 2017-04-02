'use strict';

/**
 * --------------------------------
 * 함수 동작
 * - 1. `f함수`가 실행이 되면 
 * - 2. 자유변수 셋팅
 * - 3. 지역변수 셋팅 (파라미터인 a,b 함수안에 있는 변수 num 준비  => 지역변수 : a,b,num)
 * ㄴ> 변수명만 세팅하고 변수의 값은 나중에 활당된다.
 * - 4. `this`, 
 * - 5. `argument` 준비 
 * --------------------------------
 */

function f(a, b) {
	var num = 10;
	return num * (a + b);
}
f(1,2);

function f(a, b) {
	var num = 10;
	if ( a>b ) {
		var bbb = 234; // bbb 접근 가능, bbb의 값은 ';'(세미콜론)을 지나간 다음에 `234`값이 활당된다
	}
	// bbb 접근 가능. 
	return num * (a + b);
}

f(1,2);

/**
 * --------------------------------
 * Hoist - ex1.
 * : 모든 변수(var)는 해당 영역(Scope)의 맨 윗부분으로 끌어올려(Hoist)진다. 
 * --------------------------------
 */

//실제 동작 코드.
function f(a, b) {
	var num, bbb; // undefined
	num = 10;
	if ( a>b ) {
		bbb = 234; 
	}
	return num * a + b + bbb; // bbb => undefined
}

console.log(f(1,2)); // NaN


/**
 * --------------------------------
 * Hoist - ex2.
 * --------------------------------
 */

function hoistTestFn() {
	var a = 1; 
	console.log(b); // undefined

	if(false) {
		var b = 2; //조건식이 false이면 절대 실행안됨.
	}
	var c = 3;
	return c;
}

hoistTestFn();


/**
 * --------------------------------
 * falsy VS truthy
 * falsy : 값이 false가 아닌데도 false처럼 인식
	1. false
	2. 0 (숫자)
	3. ''(빈문자열)
	4. undefined
	5. null
	6. NaN(Not a Number) 
 * truthy
 * --------------------------------
 */

if ( '문자열' ) {
	console.log('ok');
} else {
	console.log('no');
}


if ( '' ) {
	console.log('ok');
} else {
	console.log('no');
}


/**
 * ------------------------------------------------
 * Q. typeof 연산자를 사용하여 타입을 알려주는 함수를 만들어라. 
 * ex. f(5) === '입력한 값은 number 입니다.'
 * ------------------------------------------------
 */

function typeFn(arg) {
	return '입력한 값은 ' + typeof arg + '입니다';
}

/**
 * ------------------------------------------------------------------------
 * Closure
 * 함수내에서 외부 변수를 접근하는 것을 closure
 * 스코프 체이닝을 통해서 변수를 찾기 때문에 성능이슈 발생. 지역변수화 하면 된다. 
 * ------------------------------------------------------------------------
 */

function global() {
	var outer = 'outer!!!!';
	function hoistTestFn() {
		var a = 1; 
		console.log('b는' b); // undefined
		console.log('outer는' outer); // `hoistTestFn()` 실행했을 때 함수안에 없는 밖에 변수 `outer를 자유변수`(=클로져)

		if(false) {
			var b = 2; 
		}
		var c = 3;
		return c;
	}
}

hoistTestFn(); 

/**
 * --------------------------------
 * Array : 값들의 집합
 * arr[index] : 값을 접근
 * arr['식'이 들어갈 수 있다]
 * --------------------------------
 */

var arr = [true, 1234, 'abc', null, undefined, NaN];
arr.length;
arr[5-2];
arr[a > b ? 'a' : 'b'];

/**
 * --------------------------------
 * arguments
 * --------------------------------
 */

function f() {
	console.log(arguments);
}


function f() {
	return arguments[5];
}
f(1,2,3,4,5,6,7); //6