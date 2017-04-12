'use strict';

// 내장함수를 사용하지 않는다.

/**
 * -----------------------------------------------------
 * 1. 숫자를 넣으면 그 숫자의 제곱을 반환하는 함수를 만들어라.
 * 예: 5를 넣으면 25가 나온다. 100을 넣으면 10000이 나온다.
 * -----------------------------------------------------
 */

function squareFn(num) {
	return num * num;
}

/**
 * -----------------------------------------------------
 * 2. 2개의 숫자를 입력 받아 더 큰 숫자를 반환하는 max함수를 만드시오.
 * max(1, 5) === 5
 * max(100, 20) === 100
 * max(30, 30) === 30
 * -----------------------------------------------------
 */

 function max(num1, num2) {
 	return num1 > num2 ? num1 : num2;
 }

 /**
  * -----------------------------------------------------
  * 3. 4개의 숫자를 입력 받아 가장 작은 숫자를 반환하는 min함수를 만드시오.
  * min(1, 5, 12, 10) === 1
  * min(100, 20, 15, 40) === 15
  * min(30, 25, 25, 50) === 25
  * -----------------------------------------------------
  */
// [내가 짠 코드]
function minNumCompare(num1, num2) {
	return num1 < num2 ? num1 : num2;
}

function min(num1, num2, num3, num4) {
	var numResult1 = minNumCompare(num1, num2);
	var numResult2 = minNumCompare(num3, num4);
	return minNumCompare(numResult1, numResult2);
}

 // [피드백] min을 위해 두 수를 비교하는 함수로 따로 빼셨는데, 두 값을 비교하여 하나의 결과로 리턴하는 함수는 삼항연산자를 이용한 식과 정확히 매칭됩니다. 그러므로 굳이 함수로 뺄 필요는 없습니다. 그러나 문제는 min함수의 로직 그 자체인데요.. 만약 인자가 5개 6개... 100개가 된다고 가정했을 때는 그만큼 min 함수를 계속 바꿔줘야 합니다. 사실상 min 도 함수로 만든 이유가 없게 되는 셈이죠.

 // [다른 사람 짠 코드] - bad
 function min(a,b,c,d) {
	 var m1 = a > b ? a : b;
	 var m2 = c > d ? c : d;
	 return m1 > m2 ? m1 : m2;
 }
 // [풀이]
 // - [내코드의 문제점] 매개변수 늘어날 경우 확장이 할 수가 없다.
 // - minNum에 작은 숫자를 활당하는 방식.
 function min(a, b, c, d) {
	 // minNum에 작은 숫자를 활당하는 방식.
	 var minNum = a;

	 if ( minNum > b ) {
		 minNum = b;
	 }

	 if ( minNum > c ) {
		 minNum = c;
	 }

	 if ( minNum > d ) {
		 minNum = d;
	 }
	 return minNum;
 }

/**
 * --------------------------------------------------------
 * 4. 2개의 문자를 입력 받아 동일한지 확인하는 exact 함수를 만드시오.
 * exact('안녕', '안녕') === true
 * exact('안녕', '메롱') === false
 * --------------------------------------------------------
 */

function exact(str1, str2) {
	return str1 === str2;
}

/**
 * ------------------------------------------------------------
 * 5. 숫자를 하나 입력 받아 그 숫자의 절댓값을 반환하는 abs 함수를 만드시오.
 * abs(-400) === 400
 * abs(200) === 200
 * ------------------------------------------------------------
 */


// function abs(num) {
// 	return Math.abs(num);
// }

function abs(num) {
	return num > 0 ? num : (num * -1);
}


/**
 * -----------------------------------------------------
 * 6. makeURL함수를 만드시오
 * makeURL('naver.com') === 'http://www.naver.com'
 * -----------------------------------------------------
 */

function makeURL(url) {
	return 'http://www.'+url;
}

/**
 * -----------------------------------------------------
 * 7. 반지름을 입력받아 원의 넓이를 반환하는 circle 함수를 만드시오.
 * circle(5) === 78.5
 * circle(70) === 15386
 * 원의 넓이 : 반지름 × 반지름 × 3.14
 * -----------------------------------------------------
 */

function circle(radius) {
	return radius * radius * 3.14;
}

/**
 * -----------------------------------------------------
 * 8. 2개의 숫자중에 더 큰 숫자를 반지름으로 하여 원의 넓이를 구하시오
 * circle( ? ) === ?
 * -----------------------------------------------------
 */

// [내가 짠 코드]
function circleFn(radius1, radius2) {
	var maxNum = max(radius1, radius2);
	return circle(maxNum);
}

// [풀이]
circle(max(23,4));

/**
 * ---------------------------------------------------------------------------------
 * 9. html 엘리먼트 이름과 텍스트를 문자열로 입력받아, 이를 조합하여 반환하는 createElement함수를 만드시오
 * createElement('div', '안녕하세요') === '<div>안녕하세요</div>'
 * createElement('p', '반갑습니다') === '<p>반갑습니다</p>'
 * createElement('h1') === '<h1></h1>'
 * ---------------------------------------------------------------------------------
 */

// [내가 짠 코드]
function createElement(element, text) {
	return text === undefined ?
		   '<'+ element +'>' + '</'+ element +'>' :
		   '<'+ element +'>' + text + '</'+ element +'>';
}

// [풀이]
function createElement(element, text) {
	if (text === undefined) {
		text = '';
	}
	return '<'+ element +'>' + text + '</'+ element +'>';
}

// [풀이] 삼항식
function createElement(element, text) {
	return '<'+ element +'>' + (text === undefined ? '' : text) + '</'+ element +'>';
}

// [풀이] if문
function createElement(element, text) {
	if (text === undefined) {
		text = '';
	} else {
		text = text;
	}
	return '<'+ element +'>' + text + '</'+ element +'>';
}

// [풀이] 논리연산자
function createElement(element, child) {
	return '<'+ element +'>' +  ( child || '' ) + '</'+ element +'>';
}

/**
 * ----------------------------------------------------
 * 10. createElement함수를 응용하여 다음의 조건을 만족하시오
 * createElement( ? ) === '<div><p>반갑습니다</p></div>'
 * ----------------------------------------------------
 */
 
// [내가 짠 코드]
function createElements(element1, element2, text) {
	return '<'+ element1 +'>' + '<'+ element2 +'>' + text + '</'+ element2 +'>' + '</'+ element1 +'>';
}

// [풀이]
createElement('div', createElement('p', '하이'));
