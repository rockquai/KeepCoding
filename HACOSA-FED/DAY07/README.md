###### 하코사 Front-End 스터디

# DAY 07
## Front-End
- Node.js
- npm
- Express

---

### [Node.js](https://nodejs.org/ko/)
- Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
- Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적
- Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리

#### [Chrome V8 JavaScript 엔진](https://goo.gl/VnYMJ3)
- 구글에서 개발된 오픈 소스 JIT 가상 머신형식의 자바스크립트 엔진이며 구글 크롬 브라우저와 안드로이드 브라우저에 탑재
- ECMAScript(ECMA - 262) 3rd Edition 규격의 C++로 작성되었으며, 독립적으로 실행이 가능하다. 또한 C++로 작성된 응용 프로그램의 일부로 작동
- 자바스크립트를 바이트코드(bytecode)로 컴파일하거나 인터프리트(interpret)하는 대신 실행하기 전 직접적인 기계어(x86, ARM, 또는 MIPS)로 컴파일(compile)하여 성능을 향상시켰다. 추가적인 속도향상을 위해 인라인 캐싱(inline caching)과 같은 최적화 기법을 적용

#### [Node.js의 특징](https://velopert.com/133)
- `비동기 I/O 처리 / 이벤트 위주` : Node.js 라이브러리의 모든 API는 비동기식입니다, 멈추지 않는다는거죠 (Non-blocking). Node.js 기반 서버는 API가 실행되었을때, 데이터를 반환할때까지 기다리지 않고 다음 API 를 실행합니다. 그리고 이전에 실행했던 API가 결과값을 반환할 시, NodeJS의 이벤트 알림 메커니즘을 통해 결과값을 받아옵니다.
- `빠른 속도`: 구글 크롬의 V8 자바스크립트 엔진을 사용하여 빠른 코드 실행을 제공합니다.
- `단일 쓰레드 / 뛰어난 확장성`: Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용합니다. 이벤트 메커니즘은 서버가 멈추지않고 반응하도록 해주어 서버의 확장성을 키워줍니다.  반면,  일반적인 웹서버는 (Apache) 요청을 처리하기 위하여 제한된 쓰레드를 생성합니다. Node.js 는 쓰레드를 한개만 사용하고  Apache 같은 웹서버보다 훨씬 많은 요청을 처리할 수 있습니다.
- `노 버퍼링`: Node.js 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력합니다.
- `라이센스`: Node.js 는 MIT License가 적용되어있습니다.
- Node.js의 특징 글 출처: https://velopert.com/133

---

#### [Node.js Documentation](https://nodejs.org/api/)
##### [os.cpus()](https://nodejs.org/api/os.html#os_os_cpus)
: CPU의 정보를 담은 객체를 리턴

```js
// 모듈 추출
const os = require('os');

// 모듈
console.log(os.cpus());
```

##### [File System](https://nodejs.org/api/fs.html)
- [fs.writeFile(file, data[, options], callback))](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
- [fs.readFile(file[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback)

```js
const fs = require('fs');

// 파일 쓰기
fs.writeFile('text.txt', 'body', {}, function(error, data){
    console.log(error);
    console.log(data);
});

// 파일 읽기
fs.readFile('text.txt', 'utf-8', function(error, data){
    console.log(data);
});
```

##### require.get

```js
request.get('http://www.naver.com', function(error, response, body){
    console.log(body);
});
```

##### [미션] `require모듈`을 이용해서 naver.com 가져와서 naver.html 파일 만들기

```js
request.get('http://www.naver.com', function(error, response, body){
    fs.writeFile('naver.html', body, function(error, data){
        console.log(error);
    });
});
```

##### [http.createServer([requestListener])](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
- 서버를 생성 및 실행

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer( (request, response) => {
        response.end('<h1>' + request.url + '</h1>');
});

server.listen('8080', () => {
    console.log('server on!');
});
```

---

### [npm](https://www.npmjs.com/)
- Node.js는 npm(Node Package Manager)을 기반으로 모듈을 공유
- `package.json` : Node.js 프로젝트의 환경 설정 정보를 담은 파일

```CLI
$ npm --version  // npm 버전
$ npm install 모듈이름 // 외부 모듈을 설치할 때 사용
$ npm init  // Node.js 프로젝트를 생성. package.json파일 생성.
```

---

### Express
- Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크
- 프로젝트에 대한 설정을 package.json 안에 의존하고 있는 외부 라이브러리 정보를 담고 있는 문서. (JSON형식)
- `node_modules` 폴더가 설치

#### Express 설치

```CLI
$ npm install express
```

#### 자동으로 파일 감지 `nodemon`

```CLI
$ npm install nodemon  // 설치
$ nodemon 파일이름 // 실행
```

#### todo 페이지 생성

```js
// routes > todo.js
var express = require('express');
var router = express.Router();

const todos = [{
    title: 'list1'
}, {
    title: 'list2'
}, {
    title: 'list3'
},  {
    title: 'list4'
}];

router.get('/', function(req, res, next) {
    res.render('todos', { todos: todos });
});

module.exports = router;
```

```html
<ul>
    {{#each todos}}
    <li>{{title}}</li>
    {{/each}}
</ul>
```
