describe("client", function(){
  it("works with BDW", function(){
    expect(BDW).not.toBeUndefined();
  });
  it("works with jquery", function(){
    expect($).not.toBeUndefined();
  });

  describe("init", function(){
    describe("isNotUndefined", function(){
       it("correctly validates defined state of variable", function(){
          var undefinedFoo = undefined;
          expect(BDW.isNotUndefined(undefinedFoo)).toBeFalsy();
          expect(BDW.isNotUndefined(BDW)).toBeTruthy();
       });
    });
    beforeEach(function(){
       spyOn(BDW, 'events');
       spyOn(BDW, 'applyConfig').andCallThrough();
       spyOn(BDW, 'getCoinbaseBalance');
       spyOn(BDW, 'highchartStart');
    });
    it("sets the api key to empty string when no config object available", function(){
       BDW.init();
       expect(BDW.coinbase_api_key).toBe("");
    });
    it("sets the base uril", function(){
       BDW.init();
       expect(BDW.coinbase_uri).toBe('https://coinbase.com/api/v1');
    });
    it("calls events", function(){
       BDW.init();
       expect(BDW.events).toHaveBeenCalled();
    });
    it("calls getCoinbaseBalance", function(){
       BDW.init();
       expect(BDW.getCoinbaseBalance).toHaveBeenCalled();
    });
    it("calls highchartStart", function(){
       BDW.init();
       expect(BDW.highchartStart).toHaveBeenCalled();
    });
    describe("applyConfig", function(){
      it(" will apply config options to namespaced vars", function(){
        var config = { coinbase_api_key: "foo",
          coinbase_uri: "http://foo.com"};
        BDW.init(config);
        expect(BDW.coinbase_api_key).toBe(config.coinbase_api_key);
        expect(BDW.coinbase_uri).toBe(config.coinbase_uri);
      });
    });
  });
});
