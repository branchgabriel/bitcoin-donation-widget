//var Firebase = require(['firebase']);

var BDW = {
  highChartOptions : {
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
  },

  // privates

  __isNotUndefined: function(variableToCheck){
     return typeof variableToCheck !== "undefined";
  },

  __applyConfig: function(config){
    if(BDW.__isNotUndefined(config)){
      if(BDW.__isNotUndefined(config.coinbase_api_key)) {
        BDW.coinbase_api_key = config.coinbase_api_key;
      }
      if(BDW.__isNotUndefined(config.coinbase_uri)){
        BDW.coinbase_uri = config.coinbase_uri;
      }
      if(BDW.__isNotUndefined(config.bitcoin_address)){
        BDW.bitcoin_address = config.bitcoin_address;
      }
    }
  },

  // events

  event_init: function (config) {
    // BDW defaults
    BDW.coinbase_api_key = "";
    BDW.coinbase_uri = 'https://coinbase.com/api/v1';
    BDW.bitcoin_address = "";

    BDW.__applyConfig(config);

    BDW.event_viewBinds();
    BDW.api_getCoinbaseBalance();
    BDW.event_highchartStart();
  },

  event_viewBinds: function () {
    // binds for elements
    $('#donateButton').off().on("click", BDW.showDonateForm);

  },

  event_highchartStart: function () {
    if (!BDW.__isNotUndefined(highCharts)) {

    }
  },

  // api calls

  api_getCoinbaseBalance: function () {
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

  api_getAllAddressData: function(){
     // call firebase api and get address's

  },

  api_sendMoney: function (to, amount, callback, options) {
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

  // view

  view_showDonateForm: function () {
    // add elements for adding bitcoin
    // or load iframe
    // or something else I haven't discovered yet
  }
}


