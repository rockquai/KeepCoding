'use strict';

/**
 * --------------------------------
 * 상속(extendsion)
 * class Life {}
 * class Animal extends Life {}
 * class Dog extends Animal {}
 * --------------------------------
 */

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

// var dog1 = new Dog('멍멍이', 11, 'dogs');
// dog1.speak();

class Cat extends Animal {
	// constructor 생략하면 조상 클래스인 constructor가 적용이 된다
	speak() {
		super.speak();
		console.log(`meow! meow!, ${this.name}`);
	}
}

// var cat1 = new Cat('야옹이', 10);
// cat1.speak();

/**
 * --------------------------------------------------------------
 * 다형성(Polymorphism) 
 * - 부모 클래스에서 물려받은 메소드를 자식 클래스 내에서 오버라이딩 되어 사용되는 것
 * - 공통적인 형질을 가지고 있는 다른게 행동하는 것을 `다형성`
 * --------------------------------------------------------------
 */
 
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