
var evaluate =  function(v, callback){
    console.log("Checkng contibuosly");
    handleResult(3);
};

var handleResult = function(error, results, time){
    if (error){
        console.log("Checking Finally So Many Times Bro : " + error.message);    
    } else{
        console.log("Checking Finally So Many Times Bro : " + time);
    }
    
};

console.log("sssssssssssssssssssss");




evaluate(3, handleResult);