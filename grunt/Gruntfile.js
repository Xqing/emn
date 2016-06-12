/*global module:false*/
module.exports = function (grunt) {
    /**
     * 配置文件
     */

    var config = grunt.file.read("./Config.js");
    eval(config);

    /**
     * 通过自定义插件生成文档的JSON格式
     * plugin : ./node_modules/jsondoc.js
     */
    // var doc = config.doc;
    // var jsondoc = require("jsondoc.js");
    // jsondoc(grunt, doc);
    /**
     *  自动查找文件依赖
     */
    // require 关键字的正则检测
    var REQUIRE_RE = /[^.]require\((\'|\")(.*)(\'|\")\)/g;
    var SLASH_RE = /\\\\/g;

    // 合并数组
    function combine(source, target) {
        var result = [];
        for (var i = target.length - 1; i >= 0; i--) {
            var item = target[i];
            var flag = true;
            for (var j = 0; j < source.length; j++) {
                if (source[j] == item) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                result.push(item);
            }
        }

        return result;
    }

    // 递归查找依赖
    var Searcher = function () {
    };
    Searcher.prototype = {
        temp: [],
        result: null,
        key: "",
        fix: function (path) {
            var reg = new RegExp("^" + ued_config.require);
            if (reg.test(path)) {
                return path;
            } else {
                return ued_config.require + path;
            }
        },
        start: function (key, path) {
            this.result = [],
                path = this.fix(path);
            this.key = key;
            var first = this.require_array(path);
            for (var i = 0; i < first.length; i++) {
                if (this.check_unique(first[i])) {
                    this.result.push(first[i]);
                    this.single_js_file(first[i]);
                }
            }
        },
        require_array: function (path) {
            path = this.fix(path);
            this.temp = [];
            try {
                if (grunt.file.exists(path)) {
                    var content = grunt.file.read(path);
                    var matches = content.replace(SLASH_RE, '').match(REQUIRE_RE);
                    if (matches) {
                        for (var m = 0; m < matches.length; m++) {
                            if (this.key != "panda.js" && matches[m].indexOf("base.") >= 0) {
                                matches.splice(m, 1);
                                m--;
                            } else
                                matches[m] = this.require_to_path(matches[m].substring(1));
                        }
                        return matches;
                    }
                }
            }
            catch (err) {
            }

            return [];
        },
        single_js_file: function (path) {
            path = this.fix(path);
            var matches = this.require_array(path);
            for (var i = 0; i < matches.length; i++) {
                if (this.check_unique(matches[i])) {
                    this.result.push(matches[i]);
                    this.single_js_file(matches[i]);
                }
            }
        },
        check_unique: function (target) {
            var flag = true;
            for (var i = 0; i < this.result.length; i++) {
                if (this.result[i] == target) {
                    flag = false;
                    break;
                }
            }

            return flag;
        },
        require_to_path: function (path) {
            path = this.fix(path);
            path = path.replace(/require\(/g, '');
            path = path.replace(/\'|\"/g, '');
            path = path.replace(/\)/g, '');

            return this.to_path(path);
        },
        to_path: function (path) {
            path = this.fix(path);

            var index = -1;
            for (var i = 0; i < path.length; i++) {
                if (path.charAt(i) != '.') {
                    index = i;
                    break;
                }
            }
            var prefix = path.substring(0, index);
            var content = path.substring(index);

            path = prefix + content.replace(/\./g, '/');
            return path + ".js";
        }
    };

    /**
     * 初始化自动查找
     */
    if (ued_conf && ued_config.development == 'online') {
        for (var key in ued_conf) {
            var conf = ued_conf[key];

            if (key.match(/\.css$/)) {
                continue;
            }

            var temp = [];
            for (var c = 0; c < conf.length; c++) {
                var searcher = new Searcher();
                searcher.start(key, conf[c]);

                temp = temp.concat(combine(temp, searcher.result));
                temp.push(conf[c]);
            }
            ued_conf[key] = temp;
        }
    }

    /**
     * 将依赖文件列表写入文件
     */
    var ued_concat = {};

    var ASource = [];

    for (var j in ued_conf) {
        ASource = ued_conf[j];

        if (j.indexOf(".js") > -1) {
            for (var n = 0; n < ASource.length; n++) {
                ASource[n] = ASource[n];
            }
        }

        ued_conf[j] = ASource;
        ued_concat["../dist/" + ued_config.publish + "/" + j] = ['<banner:meta.banner>', ued_conf[j]];
    }

    grunt.file.write("Concat.js", "var ued_concat = " + JSON.stringify(ued_conf) + "; /*try{panda.use(\"base.global\");}catch(e){}*/");

    /**
     *  压缩文件的映射关系
     */
    var ued_min = {};
    var ued_mincss = {};

    for (var i in ued_concat) {
        if (i.indexOf(".js") > -1) {
            ued_min[i.replace(".js", "-min.js")] = [i];
        } else if (i.indexOf(".css") > -1) {
            ued_mincss[i.replace(".css", "-min.css")] = [i];
        }
    }
    // Project configuration.
    grunt.initConfig({
        pkg: '<json:dapeigou.jquery.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        concat: ued_concat,
        min: ued_min,
        qunit: {
            files: ['test/**/*.html']
        },
        lint: {
            files: ['grunt.js', 'src/**/*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint qunit'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: ued_min
            }
        },
        cssmin: {
            compress: {
                files: ued_mincss
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: ['amd/', 'base/'],
                    outdir: 'docs/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-cmd-transport');

    grunt.registerTask('cssimg', 'add a version number to css-img-url', function (arg1, arg2) {
        var icons = grunt.file.expand("../dist/" + ued_config.publish + "/*.css");

        for (var i = 0; i < icons.length; i++) {
            var fileContent = grunt.file.read(icons[i]);
            fileContent = fileContent.replace(/(url\(("|'){0,1})(.*?)(("|'){0,1}\))/ig, function (match, f1, index, srcStr) {
                var target = srcStr;
                if (target.indexOf('data:image') < 0) {
                    // 对问号的判断
                    if (target.indexOf('?') > -1) {
                        target = target.substring(0, target.indexOf('?'));
                    }
                    return 'url(' + target + '?' + ued_config.publish + ')';
                } else {
                    return 'url(' + target + ')';
                }
            });
            grunt.file.write(icons[i], fileContent);
        }
        ;
        console.log('add version by ' + ued_config.version);
    });

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'cssimg']);

    grunt.file.delete("../dist/" + ued_config.publish + "/i");
    var icons = grunt.file.expand("../skin/" + ued_config.version + "/i/*");
    for (var i = 0; i < icons.length; i++) {
        var names = icons[i].split('/');
        if (names[names.length - 1].indexOf(".psd") > -1) {
        } else {
            grunt.file.copy(icons[i], "../dist/" + ued_config.publish + "/i/" + names[names.length - 1]);
        }
    }
};
