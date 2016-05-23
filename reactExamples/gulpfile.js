 var gulp=require("gulp"),
    gulpUtil=require("gulp-util"),
    browserify=require("browserify"),
    reactify=require("reactify"),
    watchify=require("watchify"),
    source=require("vinyl-source-stream");

    //creating bundler object responsible for running browserify on my base code
    gulp.task("default",function(){

      var bundler=watchify(browserify({
             entries:["./src/script.jsx"],
             transform:[reactify],
             extensions:[".jsx"],
             debug:"true",
             cache:{},
             packageCache:{},
             fullPaths:true
      }));

//build file which executes my build file
      function build(file){
         if(file)gulpUtil.log("recompiling"+file);
          return bundler
                  .bundle()
                  .on("error",gulpUtil.log.bind(gulpUtil,"browserify error"))
                  .pipe(source("main.js"))
                  .pipe(gulp.dest("./"));
      }

      build();
      bundler.on("update", build);
    });
