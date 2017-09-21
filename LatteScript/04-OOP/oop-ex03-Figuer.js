'use strict';

/**
 * --------------------------------------------------------------------
 * [미션] 도형 Figure
 * - 타원 Oval, 원 Circle, 직사각형 Rectangle, 사다리꼴 Rect, 정사각형 Square, 
 * => 클래스를 설계하시오!
 * --------------------------------------------------------------------
 */

class Figuer {
	getSize() {
		return 0;
	}
}

class Oval extends Figuer{
	constructor(radius1, radius2) {
		// 타원의 넓이: 긴반지름이 a이고 짧은반지름이 b인 타원의 넓이는 abπ이다.
		this.radius1 = radius1;
		this.radius2 = radius2;
	}

	getSize() {
		return this.radius1 * this.radius2 * Math.PI;
	}
}

// Circle는 Oval와 공통점이 많다.
// Oval의 getSize()를 사용.
class Circle extends Oval {
	// 원의 넓이 : 반지름 * 반지름 * π
	constructor(radius) {
		super(radius, radius);
	}
}

//////////////////////////////////////////////////

// 사다리꼴 - 직사각형 - 정사각형 
class Rect extends Figuer {
	// 사다리꼴 넓이 : ((윗변 + 아랫변)/2) * 높이
	constructor(width1, width2, height){
		this.width1 = width1;
		this.width2 = width2;
		this.height = height;
	}

	getSize() {
		// (this.width1 + this.width2) / 2 ) => 가로
		return ( (this.width1 + this.width2) / 2 ) * this.height;
	}
}

class Rectangle extends Rect {
	// 직사각형 넓이 : 가로 * 세로
	constructor(width, height) {
		super(width, width, height);
	}
}

class Rectangle extends Rectangle {
	// 정사각형 넓이 : 가로 * 세로
	constructor(width) {
		super(width, width);
	}
}