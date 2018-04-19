var maxTime= 1000;


var everdouble = function(v, callback){
    var waittme = Math.floor(Math.random()*(maxTime+1));

    if(v%2){
        setTimeout(function() {
            callback(new Error("Odd Output"));
        }, waittme);
    }else{
        setTimeout(function() {
        callback(null,v*2, waittme);
}, waittme);
    }
};

module.exports.everdouble =  everdouble;

module.exports.foo = "bar";

