var os  =  require("os");


console.log("Checking System Name Bro : " +  os.hostname());

console.log("CHecking : " + os.loadavg()[2]);

var to_mb = function(f){
    return (Math.round((f/1024/1024)*100)/100);
};

console.log(to_mb(os.freemem()));
console.log(to_mb(os.totalmem()));

