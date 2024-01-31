const gulp = require('gulp');

// function funcaoPadrao(callback){
//     console.log("Executando via Gulp");
//     callback();
// }

function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executando via Gulp");
        callback();
    }, 2000);
}

// function dizOi(callback){
//     console.log("Olá Gulp");
//     dizTchau();
//     callback();
// }

function dizOi(callback){
    setTimeout(function(){
        console.log("Olá Gulp");
        dizTchau();
        callback();
    }, 7000);
}

function dizTchau(){
    console.log("Tchau Gulp")
}

// exports.default = gulp.series(funcaoPadrao, dizOi);
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;