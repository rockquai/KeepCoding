###### 하코사 Front-End 스터디

# DAY 10
## react

---

### react

#### 1. 설치

```CLI
$ npm i --save react react-dom
$ npm i --save-dev style
$ npm i --save-dev babel-preset-react
```

```js
import React from 'react';

console.log(React);
```

#### 2. `webpack.config.js` 추가

```js
entry: path.resolve('src/index.jsx'),
//...
resolve: {
    extensions: ['.js', '.jsx']
  },
```

#### 3. `.babelrc` 파일 추가

```js
{
  "presets": ["env", "react"]
}
```

---

### [semantic-ui-react](https://react.semantic-ui.com/usage)

#### 1. 설치

```CLI
$ npm install semantic-ui-react --save
$ npm install semantic-ui-css --save
$ npm i -D url-loader
```

#### `webpack.config.js` 추가

```js
{
    test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/,
    loader: 'url-loader'
}
```
