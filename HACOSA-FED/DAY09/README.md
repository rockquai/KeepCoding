###### 하코사 Front-End 스터디

# DAY 09
## Front-End
- Babel
- Webpack

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
