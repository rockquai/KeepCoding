###### Keep Coding - 라떼스크립트

## DAY 04

##### [출처-http://workshop.benzen.io/](https://www.youtube.com/watch?v=lrWytzsH8hw&t=2309s)

## [객체지향 프로그래밍(Object-oriented programming)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- 추상화(Abstraction) : 복잡한 상속, 메서드, 객체의 속성의 결합은 반드시 현실 세계를 시뮬레이션할 수 있어야 한다.
- 캡슐화(Encapsulation) : 클래스는 해당 객체의 특성들만을 정의할 수 있고, 메서드는 그 메서드가 어떻게 실행되는지만 정의할 수 있다. (외부 접근 불가)
- 상속성(Inheritance) : 클래스는 다른 클래스로부터 특성들을 상속받을 수 있다.
- 다형성(Polymorphism) : 다른 클래스들이 같은 메서드나 속성으로 정의될 수 있다.

### OOP의 꽃은
- 사람이 코드를 이해하기 쉽도록 읽고, 쓰고, 확장하는데 human readable.
- 핵심은 현실의 사물, 개념을 모델링할 수 있는 장점.
- 추상적인 개념을 모델링을 할 방법이 필요함 <br>
=> 예. 강아지, 고양이, 호랑이... => 동물! => 생명체. <br>

### [미션] 가계부
- 함수단위 프로그래밍
- 객체지향 프로그래밍

#### 함수단위 프로그래밍

```js
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
```

#### 객체지향 프로그래밍
1. `constructor(){}`  생성
2. `constructor(){}` 안에서 `this.함수`를 선언하면 인스턴스 생성될 때마다 생성이 된다 <br>
ㄴ> 만약 인스턴스가 100라면 함수가 100개 된다. `메모리 낭비`. ==> 공통적인 메소드 생성해야 한다.<br>
3. 인스턴스가 없는 `클래스속성` 혹은 `스태틱속성`이라고 부른다. 스태틱 키워드를 작성하여 스태틱 메소드를 작성할 수 있다.

```js
AccoutBook.instances = [];
AccoutBook.printAll = function() { ... };
```

```js
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

// 인스턴스가 없이 클래슬 바로 호출할 수 있는 것을 클래식속성(=스태틱속성)
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
```

#### 상속성(Inheritance) & 다형성(Polymorphism)
```js
class Life {}
class Animal extends Life {}
class Dog extends Animal {}
```

- `Dog - Animal - Life` 설계도의 속성들이 상속, 덮어쓰기됨!
- `var dog1 = new Dog();` dog1은 Dog, Animal, Life의 instance methods, property를 모두 상속을 받음.
- 메소드를 작성하여 인스턴스끼리 공유

```js
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		console.log(`I am an animal, ${this.name}`);
	}
	smile() {
		console.log(`haha`);
	}
}

class Dog extends Animal {
	constructor(name, age, race) {
		// this.name = name;
		// this.age = age;

		// Dog가 상속받고 있는 `Animal클래스`에 생성자를 이용하고 싶을 때는 예약어 `super()` 사용.  
		super(name, age);
		this.race = race;
	}

	// `speak()` 자체를 덮여쓸 수 있다.(상속받는 속성, 메소드를 덮여쓸 수 있다.) => `메소드 오버라이딩,(method overriding)`이라고 부른다
	speak() {
		super.speak();  // 부모 클래스의 메소드를 호출 할 수도 있다.
		console.log(`Bark! bark!, ${this.name}`);
	}
}

class Cat extends Animal {
	// constructor 생략하면 조상 클래스인 constructor가 적용이 된다
	speak() {
		super.speak();
		console.log(`meow! meow!, ${this.name}`);
	}
}

var animals = [
	new Dog('멍멍이', 11, '포메라니안'),
	new Cat('야옹이', 10)
];

for ( var i = 0; i<animals.length; i++ ) {
	var animal = animals[i];
	// animal의 공통 메소드는 speak(), smile()
	animal.speak();
	animal.smile();
}
```
