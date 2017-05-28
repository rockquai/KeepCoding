// [미션] 5번 비동기적으로 날짜 출력하기

// ex1. 한번만 사용하는 함수
// module.exports = () => {
//     let count = 1;
//     const max = 5;
//     const intervalID = setInterval(() => {
//         if ( count++ >= max ) {
//             clearInterval(intervalID);
//         }
//         console.log(new Date());
//     }, 1000);
// };

// ex2. 재사용 가능한 비동기 함수 => 생산자 관점
module.exports = (callback, max, term) => {
    let count = 1;
    const intervalID = setInterval(() => {
        if ( count++ >= max ) {
            clearInterval(intervalID);
        }
        callback();
    }, term);
};
