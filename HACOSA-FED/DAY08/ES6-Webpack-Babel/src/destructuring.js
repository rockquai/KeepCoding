// [미션] ES5문법을 ES6로 바꾸기

// function dispatch(action){
//   return action + '완료';
// }
// function setStepInitialize(auth){
//   console.log(auth+'를 처리했다 치고');
//   return auth;
// }
//
// /**
//  * Destructuring
//  */
// function initializeConfig() {
//   const serverState = window.fromServerState;
//
//   dispatch(setStepInitialize({
//     token: serverState.config.token,
//     mallKey: serverState.config.mallKey,
//     authKey: serverState.config.authKey,
//     isMember: serverState.config.isMember,
//     isEnable: serverState.config.isEnable
//   }));
// }
//
// var fromServerState = {
//   /**
//    * initializeConfig 함수를 근거로 이 객체의 구조를 만들어라
//     */
// };
//
// console.log(initializeConfig());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6
const dispatch = (action) => action + '완료';
const setStepInitialize = (auth) => {
    console.log( `${auth}를 처리했다 치고`);
    return auth;
}

const initializeConfig = () => {
    const { token, mallKey, authKey, isMember, isEnable } = window.fromServerState.config;

    dispatch(setStepInitialize({
        token,
        mallKey,
        authKey,
        isMember,
        isEnable
    }));
};

const fromServerState = {
    config : {
        token : 'abc',
        mallKey : 'abc',
        authKey : 123,
        isMember : false,
        isEnable : true
    }
};

const window = {
    fromServerState
}

console.log(initializeConfig());
