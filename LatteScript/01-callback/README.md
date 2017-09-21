###### Keep Coding - 라떼스크립트

## DAY 01
- 콜백함수
- Ajax

### 콜백함수이란?
: 나중에 실행 되는 함수를 콜백함수라고 부른다. (= 함수의 인자로 받는 함수) <br>
  - 예) setTimeout(), addEventListener(), forEach(), fillter() <br>

### Ajax가 라이브러리인가?
- `XMLHttpRequest()` 객체를 이용해서 사용한다.
- Asynchronous JavaScript And XML. 약자이며 `XML`는 지금 잘 사용하지 않는다. <br>
- 기술을 설명하는 거다. 라이브러리는 아니다. 개념만 있다. <br>
- 원래 웹은 새로고침이 되어 서버에 응답값을 받아서 화면이 다시 그려진다. <br>
  이걸 보완하기 위해 화면을 그대로 두고 (새로고침 하지 않고, URL이 안 바뀐다.) 데이터를 가져오게 하자! 보완된 것이 `XMLHttpRequest` 객체를 만들었다
- 필요한 데이터만 요청해야 한다. 
- 데이터 약속(= 데이터 포맷) : 예전에는 `XML` 사용했지만 지금은 `JSON` 사용<br>
	- xml는 용량이 크고 돔 찾기 어렵다 <br>
	- json는 용량이 작고 찾기가 용이하고 직관적이다. <br>
- `json` object형태로 만든 데이터. (object와 다르다)

