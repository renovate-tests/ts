// test/appSpec.js
define(['power-assert', 'app'], function(assert, app){

  describe('appモジュールのテスト', function(){
    it('maxメソッドのテスト', function(){
      // expect(app.max(1,2,3)).to.be(3);
      assert(app.max(1,2,3) === 3);
    });
  });

});
