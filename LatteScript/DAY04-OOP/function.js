'use strict';

/**
 * --------------------------------
 * 1. 함수 단위 프로그래밍
 * Error: Not enough balance for 보험료...
 * 입금 월급: 100
 * 입금 용돈: 200
 * 출금 월세: -150
 * 잔액: 150
 * --------------------------------
 */

/**
 * --------------------------------
 * ex1.
 * 문제점 
 * ㄴ 1. console.log => var result = '';
 * ㄴ 2. 한번만 사용하는 변수 제거
 * --------------------------------
 */

// var amounts = [];
// var names = [];
// var total = 0;

// function deposit(amount, name) {
// 	if ( amount + total < 0 ) {
// 		throw new Error('Not enough balance');
// 	}

// 	amounts.push(amount);
// 	names.push(name);
// 	total += amount;
// }

// function print() {
// 	for ( var i =0; i < amounts.length; i++) {
// 		var amount = amounts[i];
// 		var name = names[i];
// 		var isDeposit = amount > 0;
// 		console.log(`${isDeposit ? '입금' : '출금' }\t${name}\t${amount}`);
// 	}
// 	console.log(`잔액: \t${total}`);
// }

// try {
// 	deposit(100, '월급');
// 	deposit(200, '용돈');
// 	deposit(-150, '보혐료');
// 	deposit(-300, '보혐료');
// } catch(e) {
// 	console.log(e);
// }

// print();


/**
 * --------------------------------
 * ex2. 리팩토링
 * 문제점 
 * ㄴ 추상화가 되어 있지 않고 전역스코프에 5개 노출. 
 * ㄴ 재사용성이 어렵다 ==> OOP로 리펙토링 필요
 * --------------------------------
 */

var amounts = [];
var names = [];
var total = 0;

function deposit(amount, name) {
	if ( amount + total < 0 ) {
		throw new Error('Not enough balance');
	}

	amounts.push(amount);
	names.push(name);
	total += amount;
}

function print() {
	var result = '';
	for ( var i =0; i < amounts.length; i++) {
		result += `${amounts[i] > 0 ? '입금' : '출금'}\t${names[i]}\t${amounts[i]}\n`;
	}
	result += `잔액:\t${total}`;
	return result;
}

try {
	deposit(100, '월급');
	deposit(200, '용돈');
	deposit(-150, '보혐료');
	deposit(-300, '보혐료');
} catch(e) {
	console.log(e);
}

console.log(print());
