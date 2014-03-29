describe("client", function(){
  it("works with BDW", function(){
    expect(BDW).not.toBeUndefined();
  });
  it("works with jquery", function(){
    expect($).not.toBeUndefined();
  });
  describe("init", function(){
    beforeEach(function(){
       spyOn(BDW, 'events');
       spyOn(BDW, 'getBalance');
       spyOn(BDW, 'highchartStart');
    });
    it("sets the api key", function(){
       BDW.init();
       expect(BDW.api_key).toBe("add yours here");
    });
    it("sets the base uril", function(){
       BDW.init();
       expect(BDW.coinbase_uri).toBe('https://coinbase.com/api/v1');
    });
    it("calls events", function(){
       BDW.init();
       expect(BDW.events).toHaveBeenCalled();
    });
    it("calls geBalance", function(){
       BDW.init();
       expect(BDW.getBalance).toHaveBeenCalled();
    });
    it("calls highchartStart", function(){
       BDW.init();
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
  });
});
