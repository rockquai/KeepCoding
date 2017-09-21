'use strict';

/**
 * --------------------------------
 * [미션] 가계부
 * ㄴ 1. 함수단위 프로그래밍
 * ㄴ 2. 객체지향 프로그래밍
 * --------------------------------
 */

/**
 * --------------------------------
 * 2. 객체지향 프로그래밍
 * --------------------------------
 */


// function AccoutBook(name) {
// 	this.name = name;
// 	this.list = [];
// 	this.total = 0;
// 	this.deposit = function(comment, amount) {
// 		this.list.push({
// 			comment : comment,
// 			amount : amount
// 		});
// 	}
// }

// var ac1 = new AccoutBook('장부1');
// var ac2 = new AccoutBook('장부2');
// console.log(ac1);
// console.log(ac2);


/**
 * --------------------------------
 * ex.1
 * 문제점
 * - ac1, ac2의 속성(name, list, totoal)의 내용은 다른 것이 맞는데, deposit, print 함수는 다를 필요가 없다.
 * ==> 메모리상에 ac1, ac2에 deposit, print 함수가 각각 존재한다. 메모리 낭비. deposit, print 함수는 재사용이 필요.
 * ==> deposit, print 함수를 `constructor`처럼 만들어야 한다.
 * --------------------------------
 */

// class AccoutBook {
// 	//내역들, 이름, 입금/출금하기, 출력하기
// 	constructor(name) {
// 		this.name = name;
// 		this.list = [];
// 		this.total = 0;
// 		// this.deposit() : 인스턴스가 생성 될때마다 익명함수가 생성되어 deposit에 붙는다.
// 		// 만약 인스턴스가 100라면 `deposit` 함수가 100개 된다.
// 		// 공통으로 사용하는 메소드는 아래 코드(ex2.)로 바꿔야한다.
// 		this.deposit = function(comment, amount) {
// 			if ( this.total + amount  < 0 ) {
// 				throw new Error('Not enough balance');
// 			}
// 			this.total += amount;
// 			this.list.push({
// 				comment: comment,
// 				amount: amount
// 			});
// 		};
// 		this.print = function() {
// 			var result = `===${this.name}===\n`;
// 			for ( var i = 0; i<this.list.length; i++) {
// 				var item = this.list[i];
// 				result += `${item.amount > 0 ? '출금' : '입금'}\t${item.comment}\t${item.amount}원\n`;
// 			}
// 			result += `===${this.total}===\n`;
// 			console.log(result);
// 		};
// 	}
// }

// var ac1 = new AccoutBook('장부1');
// ac1.deposit('월급', 300);
// ac1.deposit('월급', -150);
// ac1.print();

// var ac2 = new AccoutBook('장부2');
// ac2.print();


/**
 * ----------------------------------------------------------------------------------------------
 * ex2. 리팩토링
 * 메소드화 시켜야 한다. (모든 인스턴스가 deposit, print함수를 공유한다 = 인스턴스간에 공유되는 메소드로 만들어야한다)
 * 메모리상에 deposit, print함수가 한개만 존재하게 된다.(ac1, ac2가 같이 사용하고 있다.)
 * ==============================================================================================
 * 미션2. 생성된 ac1, ac2,... 객체가 생성될 때마다 자동으로 출력하는 함수. (=생성된 모든 장부를 기억하고 출력한다.)
 * 1. 모든 장부를 생성 할 때마다 기억하고 === 어떤 메모리상에 공간에 담아둔다.  === 배열에 담아둔다
	ㄴ> [해석하면] 생성자 안에서 장부 인스턴스를 배열에 담아둔다.
 * 2. 어떤 함수를 호출했을때 기억한 장부들을 프린트 한다
 * ==============================================================================================
 * 문제점
 ㄴ 1. var instances = []; 전역에 생성
 ㄴ 2. 만약에 ac1, ac2같은 객채가 생성이 되지 않았을 때. 자동 출력되는 printAll() 함수가 호출을 할 수 가 없다.
       printAll()함수는 인스턴스에 메달려 있는 속성이다. (= 인스턴스(ac1, ac2)가 없을 때 printAll() 함수가 호출 할 수 없다.)
       AccountBook.printAll(); ==> 접근이 할 수 없다.
 * -----------------------------------------------------------------------------------------------
 */

// var instances = [];

// class AccoutBook {
// 	// 내역들, 이름, 입금/출금하기, 출력하기
// 	constructor(name) {
// 		this.name = name;
// 		this.list = [];
// 		this.total = 0;
// 		// constructor 인에 있는 this는 생성하는 인스턴스.
// 		instances.push(this); // 생성되는 인스턴스를 배열로 담아둔다.
// 	}
// 	deposit(comment, amount) {
// 		if ( this.total + amount  < 0 ) {
// 			throw new Error('Not enough balance');
// 		}
// 		this.total += amount;
// 		this.list.push({
// 			comment: comment,
// 			amount: amount
// 		});
// 	};
// 	print() {
// 		var result = `===${this.name}===\n`;
// 		for ( var i = 0; i<this.list.length; i++) {
// 			var item = this.list[i];
// 			result += `${item.amount > 0 ? '출금' : '입금'}\t${item.comment}\t${item.amount}원\n`;
// 		}
// 		result += `===${this.total}===\n`;
// 		console.log(result);
// 	};
// 	printAll() {
// 		for( var i=0; i < instances.length; i++ ) {
// 			var accountBook = instances[i];
// 			accountBook.print();
// 		}
//  	}
// }

// var ac1 = new AccoutBook('장부1');
// ac1.deposit('월급', 300);
// ac1.deposit('월급', -150);
// var ac2 = new AccoutBook('장부2');

// ac1.printAll();
// AccountBook.printAll(); // 접근이 할 수 없다.

/**
 * --------------------------------
 * ex3. 리팩토링
 * --------------------------------
 */

// class AccoutBook {
// 	// 내역들, 이름, 입금/출금하기, 출력하기
// 	constructor(name) {
// 		this.name = name;
// 		this.list = [];
// 		this.total = 0;
// 		// constructor 인에 있는 this는 생성하는 인스턴스.
// 		AccoutBook.instances.push(this); // 생성되는 인스턴스를 배열로 담아둔다.
// 	}

// 	deposit(comment, amount) {
// 		if ( this.total + amount  < 0 ) {
// 			throw new Error('Not enough balance');
// 		}
// 		this.total += amount;
// 		this.list.push({
// 			comment: comment,
// 			amount: amount
// 		});
// 	}

// 	print() {
// 		var result = `===${this.name}===\n`;
// 		for ( var i = 0; i<this.list.length; i++) {
// 			var item = this.list[i];
// 			result += `${item.amount > 0 ? '출금' : '입금'}\t${item.comment}\t${item.amount}원\n`;
// 		}
// 		result += `===${this.total}===\n`;
// 		console.log(result);
// 	}

// 	// 인스턴스가 없는 class 바로 호출할 수 있는 속성을 `클래스 속성(스태틱 속성)`이라고 부른다.
// //
// 	static printAll() {
// 		for( var i=0; i < AccoutBook.instances.length; i++ ) {
// 			var accountBook = AccoutBook.instances[i];
// 			accountBook.print();
// 		}
//  	}
// }

// AccoutBook.instances = [];

// var ac1 = new AccoutBook('장부1');
// ac1.deposit('월급', 300);
// ac1.deposit('월급', -150);
// var ac2 = new AccoutBook('장부2');

// AccoutBook.printAll();


/**
 * --------------------------------
 * ex4. 리펙토링
 * --------------------------------
 */

class AccoutBook {
	// 내역들, 이름, 입금/출금하기, 출력하기
	constructor(name, author) {
		this.name = name;
		this.author = author;
		this.list = [];
		this.total = 0;
		// constructor 인에 있는 this는 생성하는 인스턴스.
		AccoutBook.instances.push(this); // 생성되는 인스턴스를 배열로 담아둔다.
	}

	deposit(comment, amount) {
		if ( this.total + amount  < 0 ) {
			throw new Error('Not enough balance');
		}
		this.total += amount;
		this.list.push({
			comment: comment,
			amount: amount
		});
	}

	print() {
		var result = `=== ${this.name} by ${this.author} ===\n`;
		for ( var i = 0; i<this.list.length; i++) {
			var item = this.list[i];
			result += `${item.amount > 0 ? '출금' : '입금'}\t${item.comment}\t${item.amount}원\n`;
		}
		result += `=== ${this.total} ===\n`;
		console.log(result);
	}
}

// 인스턴스가 없이 클래스를 바로 호출할 수 있는 것을 클래식속성(=스태틱속성)
AccoutBook.instances = [];
AccoutBook.printAll = function() {
	for( var i=0; i < AccoutBook.instances.length; i++ ) {
		var accountBook = AccoutBook.instances[i];
		accountBook.print();
	}
};

var ac1 = new AccoutBook('장부1', 'A군');
ac1.deposit('월급', 300);
ac1.deposit('월급', -150);
var ac2 = new AccoutBook('장부2', 'B군');

AccoutBook.printAll();
