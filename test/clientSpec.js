describe("client", function(){
  it("works with BDW", function(){
    expect(BDW).not.toBeUndefined();
  });
  it("works with jquery", function(){
    expect($).not.toBeUndefined();
  });

  describe("init", function(){
    describe("__isNotUndefined", function(){
       it("correctly validates defined state of variable", function(){
          var undefinedFoo = undefined;
          expect(BDW.__isNotUndefined(undefinedFoo)).toBeFalsy();
          expect(BDW.__isNotUndefined(BDW)).toBeTruthy();
       });
    });
    beforeEach(function(){
       spyOn(BDW, 'event_viewBinds');
       spyOn(BDW, '__applyConfig').andCallThrough();
       spyOn(BDW, 'api_getCoinbaseBalance');
       spyOn(BDW, 'event_highchartStart');
    });
    it("sets the api key to empty string when no config object available", function(){
       BDW.event_init();
       expect(BDW.coinbase_api_key).toBe("");
    });
    it("sets the base uri", function(){
       BDW.event_init();
       expect(BDW.coinbase_uri).toBe('https://coinbase.com/api/v1');
    });
    it("calls events", function(){
       BDW.event_init();
       expect(BDW.event_viewBinds).toHaveBeenCalled();
    });
    it("calls getCoinbaseBalance", function(){
       BDW.event_init();
       expect(BDW.api_getCoinbaseBalance).toHaveBeenCalled();
    });
    it("calls highchartStart", function(){
       BDW.event_init();
       expect(BDW.event_highchartStart).toHaveBeenCalled();
    });
    describe("__applyConfig", function(){
      it(" will apply config options to namespaced vars", function(){
        var config = { coinbase_api_key: "foo",
          coinbase_uri: "http://foo.com",
          bitcoin_address: "bar"};
        BDW.event_init(config);
        expect(BDW.coinbase_api_key).toBe(config.coinbase_api_key);
        expect(BDW.coinbase_uri).toBe(config.coinbase_uri);
        expect(BDW.bitcoin_address).toBe("bar");
      });
    });
  });
  describe("highChartStart", function(){
    beforeEach(function(){

    });
  });
});
