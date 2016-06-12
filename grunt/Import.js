(function () {
  	function __ready(onready, config) {
		function DOMContentLoaded() {
			document.attachEvent ? (document.readyState == 'complete' ? doReady() : null) : doReady();
		}
		
        function doReady() {
			onready();
        }
        
		if ( document.readyState === "complete" ) {
            doReady();
        }
        else if ( document.addEventListener ) {
            document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            window.addEventListener( "load", doReady, false );
        } 
		else if ( document.attachEvent ) {
            document.attachEvent("onreadystatechange", DOMContentLoaded);
            window.attachEvent( "onload", doReady );
            var toplevel = false;
            try {
                toplevel = window.frameElement == null;
            } catch(e) {}

            if ( document.documentElement.doScroll && toplevel ) {
                (function () {
	                if (panda.isReady) return;
	                try {
	                    document.documentElement.doScroll("left");
	                } catch (error) {
	                    setTimeout(arguments.callee, 0);
	                    return;
	                }
	                doReady();
	            })();
            }
        }
    }
	
	window.__ready = __ready;
})();

/** 
 * @function asyncImport
 * @param src js的路径
*/

function asyncImportJs(src, charset) {
	charset = charset || "utf-8";
	
	var container = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = src;

    if (charset != undefined) {
        script.charset = charset;
    }

    if (!container) {
        document.body.insertBefore(script, document.body.firstChild);
    } else {
        container.appendChild(script);
    }
}

/** 
 * @function import
 * @param id 静态文件的id名称
 * @param fileType  文件类型  js/css
 * @param mode 运行环境 dev/online dev表示环境加载多个源码文件 online代表线上环境 加载单个合并压缩后的文件
*/
function ued_import(id, fileType, doc) {
	var mode = ued_config.development;
	doc = doc || document;
	
	if(!mode) {
		mode = "online";
	}

	var __id = id +'.' + fileType;

	if (!ued_concat[__id]) {
		return false;
	}

	var jsTemplate = '<script src="${src}" charset="utf-8" type="text/javascript" itemid="${itemid}"><\/script>';
	var cssTemplate = '<link rel="stylesheet" type="text/css" href="${href}">';

	function __import(aFiles, type, id) {
		for(var i=0; i<aFiles.length; i++) {
			if (type == "js") {
				var jsUrl = ued_config.root + aFiles[i];
				document.write(jsTemplate.replace("${src}", jsUrl).replace("${itemid}", id));
			} else if (type == "css") {
				var link = aFiles[i];
				var cssUrl = cssTemplate.replace("${href}", ued_config.root + link).replace("${itemid}", id);
				document.write(cssUrl);
			}
		}
	}

    if (ued_config.development == "online") {
		if ("css" == fileType) {
			__import(['dist/' + ued_config.publish + "/" + __id.replace(".css", "-min.css")], fileType, __id);
		} else {
			__import(['dist/' + ued_config.publish + "/" + __id.replace(".js", "-min.js")], fileType, __id);
		}
    } else if (ued_config.development == "dev") {
		__import(ued_concat[__id], fileType, __id);
    }
} 