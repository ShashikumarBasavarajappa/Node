var mathfun =  require('./mathfun');
// Lgic Behand the Node is already some modules exisit for those things we need to run the (utilize).

// Please Make sure about the code mathfun

var processResults =  function(err, results, time){
    if(err){
        console.log("Error  1234 : " + err.message);
    }else{
        console.log("===sss======== " + time);
    }
};

for(var i=0;i<10;i++){
    console.log("=====================");
    mathfun.everdouble(i, processResults);
}

console.log("***********************************************");

console.log(mathfun.foo);

console.log("****************###################*******************************");

console.log(mathfun.maxTime);


// OutPut will Display Randomly be cause code is Asychronous Way they Designed.

// Only one Thead wll handle All these things because it;s single Thread Application.

// If you declare Export we can able to Acces in the Outside another JS files.

// here we see maxTime, it's not exported so it's not accessiable here.

// foo is declared as the export so we can able to export it easiu.


// Go to NPM and Install which are the things need to  modules required.

