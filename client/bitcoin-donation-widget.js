var BDW = {
    init: function(){
        BDW.highchartStart();
        BDW.api_key = "add yours here"; //maybe we can go with an options object later on
        BDW.base_uri = 'https://coinbase.com/api/v1';
        BDW.getBalance();
    },
    events: function(){
        // binds for elements
        $('#donateButton').off().on("click", BDW.showDonateForm);

    },

    highchartStart: function () {
        // still need to clean up this to handle payment history data
        $('#chartcontainer').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    },
    sendMoney: function(to, amount, callback, options){
            options = options || {};
            options.transaction = options.transaction || {};
            options.transaction.to = options.transaction.to = to;
            options.transaction.amount_string = amount;
            options.transaction.amount_currency_iso = options.transaction.amount_currency_iso || 'BTC';
            options.transaction.notes = options.notes;
        $.ajax({
            url: BDW.base_uri + '/transactions/send_money',
            type:"POST",
            data: {"api_key":BDW.api_key, "options": options },
            dataType: "json",
            success:function (result) {
                if(typeof result !== "undefined"){
                    callback();
                }
            }
        });
    },
    getBalance: function(){
       var url = BDW.base_uri + '/account/balance'
        $.ajax({
            url:url,
            type:"GET",
            data: {"api_key":BDW.api_key},
            dataType: "json",
            success:function (result) {
                if(typeof result !== "undefined"){
                   // update current total element
                }
            }
        });
    },
    showDonateForm: function(){
       // add elements for adding bitcoin
       // or load iframe
       // or something else I haven't discovered yet
    }
}



//
//var client = new Coinbase.Client({
//    api_key: process.env.COINBASE_API_KEY
//});
//
//function callback(err, resp, body){
//    console.log(body);
//}
//
//client.send_money('1G2UULb1M3hbB2b4Kt5v3E1R6Pc2XNW756','0.01', callack);
$(function(){
    BDW.init();
});

