var Mocha = require('mocha'),
    fs = require('fs'),
    _ = require('underscore');

var mocha = new Mocha({reporter: 'spec', ui: 'bdd'});
 
mocha.addPath = function(dir){
    
    fs.readdirSync(dir).filter(function(file){
        var fileArray = file.split('.');
        
        if(fileArray.length == 1){
            mocha.addPath(dir + "/" + fileArray[0]);
        }
        else if(fileArray.length > 1 && _.last(fileArray) == "js"){
            var filePath = dir + "/" + file;
            mocha.addFile(filePath);
        }
        else{
            console.log("Warning: " + file + " is not a .js file in test path");
        }
    });


}

function run_tests(cb) {
    mocha.addPath("./test");
    mocha.run(function(failures) {
        cb(failures);
    });
}
 
//----------------------------------------------------------------------------------------------------





desc('mocha unit test-run example');
task('test-run', {async: true}, function(args) {
    run_tests(function(err) {
        if (err) {
            fail(err);
        } else {
            complete();
        }
    });
});