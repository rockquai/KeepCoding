###### 하코사 Front-End 스터디

# DAY 08
## Front-End
- HTML 바로보기
- ECMAScript 6(ES6, ECMAScript 2015)
- Babel
- Webpack

---

### [HTML 바로보기](https://goo.gl/BQ54gG)
- 웹은 무엇인가? 웹 = 문서
- 생산자, 소비자 분리 <br>
    - 생산/소비 : 워드프로세서<br>
    - 생산 : 에디터 툴<br>
    - 소비 : 브라우저<br>
- Form의 유효성 검사<br>
    - 예) 캘린더 기능 : 브라우저에 제공하는 컴포넌트 => React로 컴포넌트를 만들 수 있다<br>

---

### JavaScript 배경
- 자바스크립트의 창조자: Brendan Eich
- Mocha -> LiveScript -> JavaScript (당시 JAVA 인기에 편승하기 하기 위해서 이름 헷갈리게 작명)
- 정식 명칭 : ECMAScript<br>
    - ES3(1999.12) : IE7까지 구현<br>
    - ES4 : 객체지향, 플래시... 어려워서 사라짐<br>
    - ES5(2009.12), ES5.1(2011.06)<br>
        - IE7 구현이 안되고 `polyfill` 사용해야 한다  <br>      
    - ES6(2015.06) : ES6, ES2015, Harmony, ECMA6 등 다양한 이름으로 불림<br>
- ES7(2017) 주기적으로 버전업 예정<br>
- 현재 현업에서는 IE8까지 맞추는 상황<br>
    - [브라우저 호환 현황](https://kangax.github.io/compat-table/es6/)<br>
    => IE11는 11%... 사용법은 Babel을 통해서 컴파일해서 사용<br>

---

### ECMAScript 6(ES6, ECMAScript 2015)
#### 변수 선언
- `const` : 재활당 불가능, 상수.
- `let` : 재활당 가능

```js
// ES5
var abc = 111;

// ES6
const aaa = 222;
let bbb = 333;

// block scope
function func(arr) {
    var i, obj;
    for (i = 0; i < abc.length; i++) {
        obj = abc[i];
    }
}

function func(arr) {
    for (let i = 0; i < abc.length; i++) {
        const obj = abc[i];
    }
}
```

#### Arrow Function
- 순수 함수로서의 기능만을 담당하기 위해 경량화된 함수

```js
// ES5
const funcES6 = function(a, b, c) {
    return a + b + c;
}

const funcES61 = (a, b, c) => {
    return a + b + c;
}

const funcES62 = a => {
    return a;
};

const funcES63 = (a, b) => a + b;
```

#### [Destructuring Assignment(해체 할당, 비구조화 할당)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- 배열 또는 객체에서 데이터를 별개(distinct) 변수로 추출할 수 있게 하는 JavaScript 식(expression)

```js
const person = {
    age: 30,
    name: 'name',
    money: 10000
};

const f4 = ({age, name, money}) => {
    return {
        age, name, money
    }
};

f4(person);

// ...arguments
const f5 = (...args) => {
    console.log(args);
}

f5(1,2,3,4,5); // 배열 출력
```

##### [미션] 5번 비동기적으로 날짜 출력하기
- 재사용 가능한 비동기 함수
- `main.js` : 소비자 관점
- `asynoLooper.js` : 생산자 관점

```js
// main.js
const asynoLooper = require('./asynoLooper');

asynoLooper( () => {
    console.log(new Date());
}, 5, 1000);

asynoLooper( () => {
    console.log('5번 출력');
}, 5, 800);
```

```js
// asynoLooper.js
module.exports = (callback, max, term) => {
    let count = 1;
    const intervalID = setInterval(() => {
        if ( count++ >= max ) {
            clearInterval(intervalID);
        }
        callback();
    }, term);
};
```

---

### [Babel](https://babeljs.io/)
- Babel is a JavaScript compiler
- ES6 코드를 ES5 코드로 바꿔주는 도구

#### Babel 설치

```CLI
$ npm i --save-dev babel-cli
```

#### babel-preset-env
: abel의 옵션을 인식하기 위해 설치

```CLI
$ npm i -save-dev babel-preset-env
```

#### `.babelrc` 설정

```json
{
    "presets" :  ["env"]
}
```

#### package.json의 `build` 추가
- `--watch` 지속적인 감시

```json

"scripts": {
  "build": "babel src -d dist --watch"
},
```

#### 실행
$ npm run build

---

### [Webpack](https://webpack.github.io/)
- JavaScript Bundler
- 여러개의 script 파일을 하나로 묶어준다

#### Webpack 설치

```CLI
$  npm i --save-dev webpack
```

#### babel-loader

```CLI
$ npm i --save-dev babel-loader
```

#### [번들링] `dist/main.js`코드를 `bundle/main.bundle.js`로 변환

```CLI
$ webpack dist/main.js bundle/main.bundle.js
```

#### package.json 추가

```json
"scripts": {
  "start": "webpack dist/main.js bundle/main.bundle.js --watch"
},
```

#### 실행
$ npm start

---

### webpack + babal
#### webpack 옵션

```js
// webpack.config.js
// 필수는 entry, output
module.exports = {
    entry: '',
    output: {
    }
};
```

#### Bebel 실행 후 bundle 작업

```js
// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('src/main.js'),
    output: {
        path: path.resolve('bundle'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
```
