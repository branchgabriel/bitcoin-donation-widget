describe("client", function(){
  it("works for jquery", function(){
    expect($).not.toBeUndefined();
  });
  it("works for highcharts", function(){
   // expect(highCharts).not.toBeUndefined();
  });
  describe("init", function(){
    BDW.init();
    it("calls highchartStart", function(){
       spyOn(BDW, 'highchartStart');
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
  });
});