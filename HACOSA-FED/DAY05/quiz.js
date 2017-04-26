'use strict';

/**
 * --------------------------------------------------------------------------
 * Q. "숫자를 찾는 up & down 랜덤게임을 만들어라
 * 조건 1. 랜덤 숫자의 범위는 1~100 이다 Math.floor(Math.random() * 100)  + 1
 * 조건 2. 6번 이상 틀리면 게임이 종료된다. => 6이내에 맞추는 것이 목표. 남은 횟수 기준으로
 * 조건 3. 게임이 종료되면 say를 외쳐도 게임이 종료되었다는 메시지만 나온다."
 * randomGame.start();  // 게임을 시작합니다.
 * randomGame.say(40);  //업!
 * randomGame.say(80); //다운!
 * randomGame.say(47); //정답!
 * --------------------------------------------------------------------------
 */

/**
 * --------------------------------------------------------
 * ex1. Bad
 * - 객체 밖 전역변수로 선언으로 해서 의미가 없다. 전역이 오염.
 * - 라이브러리는 전역변수를 하나만 사용한다. 오염을 방지
 * --------------------------------------------------------
 */

// var randomNumber = Math.floor(Math.random() * 100)  + 1;
// var count = 0;
// var randomGame = function() {
//     start: function() {
//     },
//     say: function() {
//     }
// }

/**
 * -----------------------------------------------------------------
 * ex1. Good
 * - `display()`를 생성해서 뷰를 표출. 환경에 맞게 플래폼에 맞게 수정하면 된다.
 * - 대문자로 표기하는 의미 : 상수 표기. 값을 재활당하지 않는다. 수정을 직접한다.
 * - 6번째 종료.
 * -----------------------------------------------------------------
 */

var randomGame = {
    MESSAGE: {
        START: '게임을 시작합니다.',
        UP: '업!',
        DOWN: '다운!!',
        END: '게임 종료',
        CORRECT: '정답!!!'
    },
    randomNumber : null,
    limit : 0,
    start: function() {
        this.limit = 6;
        this.randomNumber =  Math.floor(Math.random() * 100)  + 1;
        this.display(this.MESSAGE.START);
    },
    say: function(number) {
        // 1. 게임이 끝났으면 혹은 시작되지 않았으면 종료 처리.
        if ( !this.limit ) return this.end(); // 방어코드

        // 2. 숫자를 비교하고 정답이면 종료
        if ( number === this.randomNumber ) {
            this.display(this.MESSAGE.CORRECT);
            this.end();
            return;
        }
        this.limit--;

        // 방법1.위의 코드인 해당되지 않았을때 실행 되는 코드
        // if ( number > this.randomNumber  ) {
        //     this.display(this.MESSAGE.DOWN);
        // }  else {
        //     this.display(this.MESSAGE.UP);
        // }

        // 방법2. 위의 코드 중복 제거
        // this.display(this.MESSAGE. => 중복
        // this.display(1+1) // 값을 넣어야 한다. 식을 넣을 수 있다
        // this.display(
        //     number > this.randomNumber ?
        //     this.MESSAGE.DOWN :
        //     this.MESSAGE.UP
        // );

        // 방법3.
        // this.display(this.MESSAGE['UP']); 표현이 가능
        // DOWN, UP 분기 처리.
        this.display(
            this.MESSAGE[
                number > this.randomNumber ?
                'DOWN' :
                'UP'
            ]
        );

        //  6번째까지 확인하과 소진하면 종료시켜야 한다.
        if( !this.limit ) this.end();
    },
    display: function(message) {
        console.log(message);
    },
    end: function() {
        this.display(this.MESSAGE.END);
        this.limit = 0;
    }
};

randomGame.start();  // 게임을 시작합니다.
randomGame.say(40);
randomGame.say(80);
randomGame.say(80);
randomGame.say(80);
randomGame.say(80);
randomGame.say(80);


/**
 * --------------------------------------------------------
 * ex2. refactoring
 * start(), say(): 공개 , display(), end():  비공개
 * --------------------------------------------------------
 */

 // var randomGame = (function randomGame(){
 //     var MESSAGE = {
 //         START: '게임을 시작합니다.',
 //         UP: '업!',
 //         DOWN: '다운!!',
 //         END: '게임 종료',
 //         CORRECT: '정답!!!'
 //     };
 //     var randomNumber = null;
 //     var limit = 0;
 //
 //     function display(msg) {
 //         console.log(msg);
 //     }
 //     function end() {
 //         display(MESSAGE.END);
 //         limit = 0;
 //     }
 //
 //     return {
 //         start: function() {
 //             limit = 6;
 //             randomNumber = Math.floor(Math.random() * 100) + 1;
 //             display(MESSAGE.START);
 //         },
 //         say: function(number) {
 //             //게임이 끝났으면(시작되지 않았으면) 종료
 //             if(!limit) return end();
 //
 //             //숫자를 비교하고 //정답이면 정답! 종료!
 //             if(number === randomNumber) {
 //                 display(MESSAGE.CORRECT);
 //                 end();
 //                 return;
 //             }
 //
 //             limit--;
 //
 //             if(number > randomNumber) {
 //                 display(MESSAGE.DOWN);
 //             } else {
 //                 display(MESSAGE.UP);
 //             }
 //
 //             //this.display(number > this.randomNumber ? this.MESSAGE.DOWN : this.MESSAGE.UP);
 //             //this.display(this.MESSAGE[number > this.randomNumber ? 'DOWN' : 'UP'])
 //             //this[1 > 2 ? 'addClass' : 'removeClass']();
 //
 //             if(!limit) end();
 //         }
 //     }
 // }());

 /**
  * --------------------------------------------------------
  * ex3. refactoring
  * start(), say(): 공개 , display(), end():  비공개
  * randomNumber = Math.floor(Math.random() * (max || 1)) + (min || 1);
  * --------------------------------------------------------
  */

var randomGame = (function(){
     var MESSAGE = {
         START: '게임을 시작합니다.',
         UP: '업!',
         DOWN: '다운!!',
         END: '게임 종료',
         CORRECT: '정답!!!'
     };
     var randomNumber = null;
     var limit = 0;

     function display(msg) {
         console.log(msg);
     }
     function end() {
         display(MESSAGE.END);
         limit = 0;
     }

     return {
         start: function() {
             limit = 6;
             randomNumber = Math.floor(Math.random() * (max || 1)) + (min || 1);
             display(MESSAGE.START);
         },
         say: function(number) {
             // 게임이 끝났으면(시작되지 않았으면) 종료
             if(!limit) return end();

             // 숫자를 비교하고, 정답이면 정답! 종료!
             if(number === randomNumber) {
                 display(MESSAGE.CORRECT);
                 end();
                 return;
             }

             limit--;

             if(number > randomNumber) {
                 display(MESSAGE.DOWN);
             } else {
                 display(MESSAGE.UP);
             }

             if(!limit) end();
         }
     }
}());
