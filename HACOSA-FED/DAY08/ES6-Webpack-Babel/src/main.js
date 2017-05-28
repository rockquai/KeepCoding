// ex1. 재사용 가능한 비동기 함수 => 소비자 관점
const asynoLooper = require('./asynoLooper');

asynoLooper( () => {
    console.log(new Date());
}, 5, 1000);

asynoLooper( () => {
    console.log('5번 출력');
}, 5, 800);

////////////////////////////////////////////
// ex2. [ES6] arrow function
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

/////////////////////////////////////////////////////
// ex3. Destructuring Assignment(해체 할당, 비구조화 할당)
const user1 = {
    age: 33,
    name: 'name',
    money: 10000
};

console.log(user.age);
console.log(user.name);
console.log(user.money);

// key만 있으면 value이 동일
const {
    age,
    name,
    money
} = user2;

console.log(age);
console.log(name);
console.log(money);

const f1 = (user) => {
    const age = 55;
    const innerUser = {
        age, // age는 상위에 있는 age값 `55`가 된다.
        name: user.name,
        money: user.money
    };
}

// user.age는 newAge 변수에 활당 (newAge = user.age;와 같다)
const f2 = (user) => {
    const {
        age: newAge,
        name: newName,
        money: newMoney
    } = user;

    const innerUser = {
        age,
        name,
        money
    };
}

const f3 = (user) => {
    const {
        age: newAge,
        name: newName,
        money: newMoney
    } = user;

    const innerUser = {
        age: newAge,
        name: newName,
        money: newMoney
    };
}

// 파라미터 안에 객체
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
