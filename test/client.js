describe("client", function(){
  describe("init", function(){
    spyOn(BDW, 'highchartStart');
    it("calls highchartStart", function(){
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
  });
});