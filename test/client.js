describe("client", function(){
  describe("init", function(){
    spyOn(BDW, 'highchartStart');
    BDW.init();
    it("calls highchartStart", function(){
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
  });
});