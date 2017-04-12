###### 하코사 Front-End 스터디

# DAY 03
## Front-End
- ==, ===, !=, !==의 차이를 이해한다.
- 논리연산자 &&, || 를 이해한다.
- 재사용 가능한 함수를 선언 할 수 있다.
- while
- jasmine

### `===`, `!==`, `!=`, `!==`

```js
false == 0
false === 0
undefined == null
undefined === null

1 != '1' // false
1 !== '1' //true
```

ex. ajax 통신할 때 성공시 200

```js
result  = '200';
if ( parseInt(result) === 200){....}
```

### 논리연산자 `&&`, `||`
- a && b : a가 참이면 b
- a || b : a가 참이면 a 아니면 b
- !a : a의 반대

```js
5 && 2 // 2
4 || 1 // 4
!55 // 55는 true이므로 결과는 fasle
!undefined // true
!!undefined // fasle
!null // trun
!!null // fasle
```

---

### function
- 왜 함수를 쓸까? 함수의 특성 이해하고 사용해야 함.
- `함수 단위 스코프`이므로 전역, 지역변수를 구분할 수 있고 `캡슐화(Encapsulation)` 할 수 있다. <br>
- 재사용 가능한 함수를 선언 할 수 있다. <br>
- `재사용이란?` 내가 만들어서 내가 재사용하는 것이 아니라 내가 만들어서 다른 사람이 재사용 할 수 있는 것이다. <br>

---

### UI(User Interface)
- 유저가 상호작용(행위, 동작)의 접점.(유저가 접근하는 인터페이스)
- 사용자 관점에서 함수 호출을 보면 `UI(User Interface)` 볼 수 있다.
- 선언하는 개발자관점과 사용하는 사용자 관점
- 프론트엔드 개발자는 인터페이스를 설계하는 사람.

### API (Application Programming Interface, 응용프로그램 프로그래밍 인터페이스)
- 컴퓨터가 코드로 접근하는 인터페이스

```js
function circle() {
    ...
}

circle();  // API
```

---

### while
- 반복문 : 반복하기 위한 `문`이다

```js
function sum(arr) {
    var 초기 변수값;
    while( 조건식 => `boolean값`으로 귀결 ) {
        반복시킬 코드
        증감값;
    }
}
```

#### Q1. 짝수의 합계를 함수 만들기

```js
function evenSum(arr) {
    var i = 0;
    var result = 0;
    while ( i < arr.length) {
        if( arr[i] % 2 === 0 ){
            result += arr[i];
            console.log('짝수', arr[i]);
        }
        i +=1;
    }
}

evenSum([1,4,5,324,123,5,77,4,5,1,2,96]);
```

#### Q2. 남, 여 카운트 함수 만들기

```js
function countIf(arr, target) {
    var i = 0;
    var count = 0;
    while ( i < arr.length ) {
        if ( arr[i] === target  ) {
            count += 1;
        }
        i +=1;
    }
    return count;
}

var arr = ['남', '여', '여', '남', '남', '남', '여'];
countIf(arr, '남'); // === 4
countIf(arr, '여'); // === 3
```

---

### TDD(Test-driven development 테스트 주도 개발방법론)
#### jasmine(https://jasmine.github.io)
: Behavior-Driven Javascript

#### How to use
1. [jasmine github 소스 다운로드](https://github.com/jasmine/jasmine/releases)
2. SpecRunner.html 아래 소스 삭제
```
<script src="src/Player.js"></script>
<script src="src/Song.js"></script>
```
3. spec / 테스트 스팩 코드 저장
4. src / 소스 코드 저장

##### SpecRunner.html
```html
<!-- 소스코드  -->
<script src="src/sum.js"></script>
<script src="src/countIf.js"></script>
<!-- 테스트 스팩 -->
<script src="spec/sumSpec.js"></script>
<script src="spec/countIfSpec.js"></script>
```

##### spec / sumSpec.js
```js
describe('덧셈을 테스트한다', function() {
    it('sum 함수는 총합을 반환한다', function functionName() {
        var result = sum(1,2,3,4);
        expect(result).toEqual(10);
        expect(sum(-1, 34, 11, '1')).toEqual(45);
    });
});
```

##### src / sum.js
```js
function sum(a, b, c, d) {
    return parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10) + parseInt(d, 10);
}
```

##### 결과
1 spec, 0 failures
덧셈을 테스트한다
sum 함수는 총합을 반환한다
