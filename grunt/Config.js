/**
 * 模式的切换方式：
 * 1、通过修改static_config的mode参数；
 * 2、访问时添加地址栏参数static_mode=MODE.*。
 *
 * 小文件的位置不在可配置，请将locahost的根目录指向对应项目
 *
 */
var MODE = {
    online:"online",//线上-压缩
    uncompress:"uncompress",//线上-非压缩
    dev:"dev",//开发-小文件
    dev_js:"dev-js",//开发-js小文件
    dev_css:"dev-css"//开发-css小文件
};

var config = {
    static_conf: {
        "js":{
            "run_common.js":[
                "../src/jquery.min.js",
                "../src/index.js",
                "../src/search.js",
                "../src/sliderM.js"
            ]
        },
        "css":{
            "run-common.css":[
                "../skin/reset.css",
                "../skin/base.css",
                "../skin/index.css",
                "../skin/nothing.css",
                "../skin/textStyle.css",
                "../skin/contact.css",
                "../skin/contributors.css",
                "../skin/personStyle.css",
                "../skin/Q&A.css",
                "../skin/tableStyle.css"
            ]

        }
    },
    static_config: {
        name: "static_import",
        version: "enm1.0.0",
        publish: "v20160623",
        mode: MODE.dev,
        // mode: MODE.uncompress,
        // root: "http://static.360buyimg.com/panda_cube/channel/",
        //root: "http://static.360buyimg.com/dist/",
        root: "http://localhost/JD/project/pop-marketing-platform/dev/local/js/",
        //dev_root: "http://10.28.163.72:8000/js/",
        // dev_root: "http://static.360buyimg.com/dist/",

        require: "../js/"
    }
};

var static_config = config.static_config;
var static_conf = config.static_conf;