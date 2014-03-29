var options = {
  chart: {
    width: 300,
    height: 300,
    defaultSeriesType: 'bar'
  },
  legend: {
    enabled: false
  },
  title: {
    text: 'Highcharts rendered by Node!'
  },
  series: [
    {
      data: [ 1, 2, 3, 4, 5, 6 ]
    }
  ]
};
var BDW = {
  init: function (config) {
    BDW.coinbase_api_key = "";
    BDW.coinbase_uri = 'https://coinbase.com/api/v1'; // default
    BDW.applyConfig(config);
    BDW.events();
    BDW.getCoinbaseBalance();
    BDW.highchartStart();
  },

  isNotUndefined: function(variableToCheck){
     return typeof variableToCheck !== "undefined";
  },

  applyConfig: function(config){
    if(BDW.isNotUndefined(config)){
      if(BDW.isNotUndefined(config.coinbase_api_key)) {
        BDW.coinbase_api_key = config.coinbase_api_key;
      }
      if(BDW.isNotUndefined(config.coinbase_uri)){
        BDW.coinbase_uri = config.coinbase_uri;
      }
    }
  },

  events: function () {
    // binds for elements
    $('#donateButton').off().on("click", BDW.showDonateForm);

  },

  getCoinbaseBalance: function () {
    var url = BDW.coinbase_uri + '/account/balance'
    $.ajax({
      url: url,
      type: "GET",
      data: {"api_key": BDW.api_key},
      dataType: "json",
      success: function (result) {
        if (typeof result !== "undefined") {
          // update current total element
        }
      }
    });
  },

  highchartStart: function () {
    if (typeof highCharts !== "undefined") {
       console.log("OK")
    }
  },

  sendMoney: function (to, amount, callback, options) {
    options = options || {};
    options.transaction = options.transaction || {};
    options.transaction.to = options.transaction.to = to;
    options.transaction.amount_string = amount;
    options.transaction.amount_currency_iso = options.transaction.amount_currency_iso || 'BTC';
    options.transaction.notes = options.notes;
    $.ajax({
      url: BDW.base_uri + '/transactions/send_money',
      type: "POST",
      data: {"api_key": BDW.api_key, "options": options },
      dataType: "json",
      success: function (result) {
        if (typeof result !== "undefined") {
          callback();
        }
      }
    });
  },

  showDonateForm: function () {
    // add elements for adding bitcoin
    // or load iframe
    // or something else I haven't discovered yet
  }
}


