// 모듈 추출
const os = require('os');
const fs = require('fs');
const request = require('request');
const math = require('./math');

// ex0. os.cpus() : CPU의 정보를 담은 객체를 리턴
console.log(os.cpus());
console.log(fs);

// ex1. 파일 쓰기
fs.writeFile('text.txt', 'body', {}, function(error, data){
    console.log(error);
    console.log(data);
});

// ex2. 파일 읽기
fs.readFile('text.txt', 'utf-8', function(error, data){
    console.log(data);
});

// ex3. require :  URL 기반해서 모듈을 가져오는 기능
// get() : 데이터를 가져온다
request.get('http://www.naver.com', function(error, response, body){
    console.log(body);
});

// [미션] require모듈을 이용해서 naver.com 가져와서 naver.html 파일을 만들기
request.get('http://www.naver.com', function(error, response, body){
    fs.writeFile('naver.html', body, function(error, data){
        console.log(error);
    });
});

// ex4.
math.sum();
math.add();
