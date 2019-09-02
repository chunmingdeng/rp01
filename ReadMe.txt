如何手动搭建react项目
步骤一、
    安装相关的依赖npm文件
    npm install -D react react-dom
    安装react的npm基础库
    npm install -D webpack webpack-dev-server
    高版本的webpack包还需要安装相应的webpack-cli
    npm install -D babel babel-preset-modx babel-loader @babel/core @babel/preset-react @babel/preset-env
    这里的babel使用的是v8.* 其余相关的babel使用的是v7.*，注意包的版本，然后按照.babelrc的文件配置相应的babel配置，并且在webpack的配置文件（本例使用的是webpack.config.js）中配置babel-loader来加载.jsx文件

步骤二、
    创建相应的文件
    ├── ReadMe.txt              //帮助文件
    ├── build                   //打包用（output）的folder，也可以使用dist命名
    ├── index-t.html            //html-webpack-plugin使用的模版文件
    ├── node_modules
    ├── package-lock.json
    ├── package.json            //项目的package.json
    ├── public                  //公共的静态文件
    │   └── index.html
    ├── src                     //项目的开发folder
    │   ├── App.jsx
    │   ├── components
    │   └── index.js            //项目的入口（entry）文件
    └── webpack.config.js       //webpack的配置文件

步骤三、
    修改package.json文件
    scripts中添加
        "start":"webpack-dev-serve -d --config webpack.config.js"
        "build":"webpack --config webpack.config.js"

步骤四、
    配置webpack.config.js文件
    entry,output,module,resolve{extensions},plugins[]

至此，项目就可以npm start启动了

此项目使用git存储