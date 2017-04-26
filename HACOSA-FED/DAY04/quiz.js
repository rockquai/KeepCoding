'use strict';

/**
 * --------------------------------------------------------------------
 * Q1. 배열의 숫자를 모두 더하는 sum함수를 만드시오
 * expect( sum( [1,2,3,4,5,6,7,8,9,10]) ).toEqual(55)
 * expect( sum( [10,20,77,3,12,8]) ).toEqual(130)
 * --------------------------------------------------------------------
 */

// 방법1.
function sum(arr) {
    var i = 0;
    var result = 0;
    var length = arr.length;

    while(i < length) {
        result += arr[i];
        i += 1;
    }

    return result;
}

// 방법2.
function sum2(arr) {
    var i = arr.length;
    var result = 0;

    while(i--) {
        result += arr[i];
    }
    return result;
}

// 방법3.
function sumFun(arr){
    var result = 0;
    var length = arr.length;

    function plus(){
        i++;
    }

    for(var i = 0; i < length; plus()){ // hoisting에 의해서 다음과 같이 사용해도 문제없이 실행된다.
        result += arr[i];
    }
    return result;
}

// 방법4.
function sumFor(arr) {
    var result = 0;
    var length = arr.length;

    function plus() {
        i++;
    }
    function aa() {
        return i < length;
    }
    for(var i=0;aa();plus()) {
        result += arr[i];
    }
    return result;
}

/**
* --------------------------------------------------------------------
* Q2. 배열에서 가장 큰 숫자를 찾는 max함수를 만드시오(기존에 만든 max를 개선)
* expect( max([1,2,4,10,3,7]) ).toEqual(10)
* expect( max([2,10,-5,19,-4,20,12]) ).toEqual(20)
* --------------------------------------------------------------------
*/

function max(arr) {
    var maxNumber = arr[0];
    var i = 1;
    var length = arr.length;

    while(i < length){
        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }
        i += 1;
    }
    return maxNumber;
}

/**
* --------------------------------------------------------------------
* Q3. 특정 숫자 이상의 숫자만 합산하는 sumIf 함수를 만드시오
* expect( sumIf([4,5,2,1,5,6,4,7], 6) ).toEqual(13)
* expect( sumIf([3,-4,1,9,10,20], 10) ).toEqual(30)
* --------------------------------------------------------------------
*/

function sumIf(arr, target) {
    var i = arr.length;
    var result = 0;

    while(i--) {
        if(target <= arr[i]){
            result += arr[i];
        }
    }

    return result;
}
