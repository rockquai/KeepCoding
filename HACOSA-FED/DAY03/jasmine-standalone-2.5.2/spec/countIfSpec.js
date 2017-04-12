describe('countIf를 테스트한다', function() {
    it('배열에서 두번째 인자에 개수 총합을 반환한다', function functionName() {
        expect(countIf(['남', '여', '남'], '남')).toEqual(2);
        expect(countIf(['남', '여', '남'], '여')).toEqual(1);
    });
});
