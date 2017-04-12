describe('덧셈을 테스트한다', function() {
    it('sum 함수는 총합을 반환한다', function functionName() {
        var result = sum(1,2,3,4);
        expect(result).toEqual(10);
        expect(sum(-1, 34, 11, '1')).toEqual(45);
    });
});

// describe : 실행하고자하는 파일 단위.
// expect에는 함수 호출, toEqual: 반환값.
// sum()함수를 테스트.
