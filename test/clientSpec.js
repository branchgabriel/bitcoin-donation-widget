describe("client", function(){
  it("works with BDW", function(){
   expect(BDW).not.toBeUndefined();
  });
  it("works with jquery", function(){
    expect($).not.toBeUndefined();
  });
  describe("init", function(){
    BDW.init();
    it("sets the api key", function(){
       expect(BDW.api_key).toBe("add yours here");
    });
    it("sets the base uril", function(){
       expect(BDW.coinbase_uri).toBe('https://coinbase.com/api/v1');
    });
    it("calls events", function(){
       spyOn(BDW, 'events');
       expect(BDW.events).toHaveBeenCalled();
    });
    it("calls geBalance", function(){
       spyOn(BDW, 'getBalance');
       expect(BDW.getBalance).toHaveBeenCalled();
    });
    it("calls highchartStart", function(){
       spyOn(BDW, 'highchartStart');
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
  });
});