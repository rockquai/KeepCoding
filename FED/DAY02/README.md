###### 하코사 Front-End 스터디

# DAY 02
## Front-End
- Platform
- JavaScript
	- 조건에 따른 분기 처리를 할 수 있다
	- 함수가 실행 되었을 때 일어나는 일을 대략적으로 이해한다
	- 스코프를 이해한다
	- 호이스팅을 이해한다

### Platform (Plat+Form)
- 하드웨어 
- OS(운영체제)
	- 윈도우 : 프로그램을 만드는 사람 입장에서 보면 `윈도우`가 플랫폼
	- 맥 : 앱을 만드는 사람 입장에서 보면 `맥`이 플랫폼
	- 리눅스

> API(Application Programming Interface, 응용 프로그램 프로그래밍 인터페이스) 
: 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. 주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공

- 하드웨어 <-> 윈도우 <-> 브라우저... => 각각 `API`를 제공하고 그것을 부르는 말이 레이어.
- 브라우저에서 제공하는 API : 캔버를 이용하여 3D. 브라우저의 GPU를 바로 사용하기 때문에 CSS3가 빠르다. 

---

### JavaScript

#### Q. 2개의 숫자를 인자로 받아 더 큰 숫자를 반환하는 함수를 만들어라.

```js
function compareNum(num1, num2) {
		return (num1 > num2) ? num1 : num2;
}
```

#### Q. 숫자를 하나 받아 음수일 경우 false를, 양수일 경우 true를 반환하는 함수를 만들어라(0은 false 반환) <br>
: 비교연산자 자체가 불린값으로 반환, 삼항연산자 조건식이 필요없다. <br>

```js
function isNum(n) {
		return num > 0;
}
```

---

### if문 
- `if라는 예약어`를 이용해서 `문`을 만드는 것
- `조건식` true, false로 판별
- `문`는 `식`들의 조합이다
- `if문`의 `~문`는 값이 활당되지 않는다 (변수로 활당하지 못함)
-  삼항연산자로 대체 가능

``` js
if ( 조건식 ) {
	조건에 맞으면 `식` 실행
} else if {
	조건식...
}
```

#### Q. 500원 이상이면 `콜라`, 500원 미만이면 `사이다`를 반환하는 자판기 함수를 만들어라.

```js
// bad : [문제점] 기준점이 500으로 고정이 되어 있다. 외부에서 기준점을 받으면 된다
function f() {
	var money = 500;
	return (money >= 500) ? '콜라' : '사이다';
}


// good
function f(money) {
	return (money >= 500) ? '콜라' : '사이다';
}
```

```js
// A.
function f(money) {
	if (money > 500) { // 기준점이 500으로 고정. 
		return '콜라';
	} else {
		return '사이다';
	}
}

// B.
function f(money1, money2) {
	if (money > abc) {
		return '콜라';
	} else {
		return '사이다';
	}
}

//C. 
function f(money1, money2) {
	return money > abc ? beverage1(money) : beverage2();
}
```

---

### [Hoisting] (https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
- 모든 변수(var)는 해당 영역(Scope)의 맨 윗부분으로 끌어올려(Hoist)진다. 

```js
function f(a, b) {
	var num, bbb; // undefined
	num = 10;
	if ( a > b ) {
		bbb = 234; 
	}
	return num * a + b + bbb; // bbb => undefined
}

console.log(f(1,2)); // NaN
```

```js
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
```

---

### falsy VS truthy
#### falsy : 값이 false가 아닌데도 false처럼 인식
- 1. false
- 2. 0 (숫자)
- 3. ''(빈문자열)
- 4. undefined
- 5. null
- 6. NaN(Not a Number) 

```js
// 
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
```

---

### [Closures] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
- 함수내에서 외부 변수를 접근하는 것을 `Closure`
- 스코프 체이닝을 통해서 변수를 찾기 때문에 성능이슈 발생. 지역변수화 하면 된다. 


```js
function global() {
	var outer = 'outer!!!!';
	function hoistTestFn() {
		var a = 1; 
		console.log('b는' b); // undefined
		console.log('outer는' outer); // `hoistTestFn()` 실행했을 때 함수안에 없는 밖에 변수 `outer를 자유변수`(Closure)

		if(false) {
			var b = 2; 
		}
		var c = 3;
		return c;
	}
}

hoistTestFn(); 
```

---

### Array
- 값들의 집합
- `arr[index]` 값을 접근
- `arr[5-2]` `식`이 들어갈 수 있다

```js
var arr = [true, 1234, 'abc', null, undefined, NaN];
arr.length;
arr[5-2];
arr[a > b ? 'a' : 'b'];
```

---


##### Q. typeof 연산자를 사욜하여 타입을 알려주는 함수를 만들어라. 예) f(5) === '입력한 값은 number 입니다.'

```js
function typeFn(arg) {
	return '입력한 값은 ' + typeof arg + '입니다';
}
```
