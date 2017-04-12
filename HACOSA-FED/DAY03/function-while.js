'use strict';

/**
 * -----------------------------------------------------
 * function
 * 왜 함수를 쓸까?
 * 함수의 특성
 * ㄴ `함수 단위 스코프`이므로 전역, 지역변수를 구분할 수 있고, `캡슐화(Encapsulation)` 할 수 있다.
 * ㄴ 다른 사람이 재사용 할 수 있게 함수를 만들어야 한다.
 * ㄴ 사용자 관점에서 함수 호출을 보면 `UI(User Interface)` 볼 수 있다,
 * => 웹에서 UI(User Interface)는 유저가 상호작용(행위, 동작)의 접점.
 * -----------------------------------------------------
 */

/**
 * --------------------------------------------------------
 * 반복문 : 반복하기 위한 `문`이다
 * ㄴ while()
 * --------------------------------------------------------
 */

// while()
function sum(arr) {
    var 초기 변수값;
    while( 조건식 => boolean값으로 귀결 ) {
        반복시킬 코드
        증감값;
    }
}

// ex1.무한 반복되는 코드이다.
function sum(arr) {
    while( true ) {
        // 반복시킬 코드
    }
}

// ex2. 배열의 합을 구하라
function sum(arr) {
    var i = 0;
    var result = 0;
    while( i < arr.length ) {
        result += arr[i];
        i += 1;
    }
    return result;
}

sum([1,2,3,4,5]);

// ex3. 짝수의 합계를 함수 만들기
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

// ex4. 남, 여 카운트 함수 만들기
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
