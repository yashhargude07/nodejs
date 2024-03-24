const emitter = require('events').EventEmitter;

function LoopProcessor(num){
    var e= new emitter();
    setTimeout(function () {
        for (var i=1;i<=num;i++){
            e.emit('BeforeProcess',1);
console.log('Processing number:'+1);
        }
    
    }
    ,2000)
    return e;

}
var lp =LoopProcessor(3);

lp.on('BeforeProcess',function (data){
    console.log('About to start the process for'+data);
});

lp.on('AfterProcess',function (data){
    console.log('Completed processing'+data);
});