/**
 * Created by cdtangchao on 2014/12/30
 */
function static_import() {
	static_import.prototype._jsTemplate = '<script src="${src}" charset="utf-8" type="text/javascript" itemid="${itemid}"><\/script>';
	static_import.prototype._cssTemplate = '<link rel="stylesheet" type="text/css" href="${href}">';
	static_import.prototype._getQueryString = function(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null){
			return decodeURI(r[2]);
		}
		else{
			return null;
		}
	};

	static_import.prototype._import = function(files, type, id, isdev){
		var _this=this;

		if (!files) {
			return;
		}

		var link;
		var tempText;
		for (var i = 0; i < files.length; i++) {
			link = files[i];
			if ("js" == type) {
				tempText = _this._jsTemplate.replace("${src}", (isdev ? static_config.dev_root : static_config.root) + link).replace("${itemid}", id);
			}
			else if ("css" == type) {
				tempText = _this._cssTemplate.replace("${href}", (isdev ? static_config.dev_root : static_config.root) + link).replace("${itemid}", id);
			}

			document.write(tempText);
		}
	};

	static_import.prototype._single_import = function(name){
		var _this=this;

		var fileType = (/\.[^\.]+$/.exec(name))[0].replace(".", "");
		if (!static_concat[fileType][name]) {
			return false;
		}

		var mode;

		//地址栏配置优先原则
		!function getMode(){
			mode = static_config.mode;

			//取得地址栏的配置
			var para = _this._getQueryString("static_mode");
			if(para&&/^online$|^uncompress$|^dev$|^dev-js$|^dev-css$/.test(para)){
				mode = para;
			}

			if(!mode) {
				mode = "online";
			}
		}();

		switch (mode){
			case MODE.online:
				_this._import(
					['dist/' + static_config.publish + "/" + name.replace("."+fileType, "-min." + fileType)] ,
					fileType ,
					name,
					false
				);
				break;
			case MODE.uncompress:
				_this._import(
					['dist/' + static_config.publish + "/" + name] ,
					fileType ,
					name,
					false
				);
				break;
			case MODE.dev:
				_this._import(static_concat[fileType][name], fileType , name ,true);
				break;
			case MODE.dev_js:
				if(fileType=="js"){
					_this._import(static_concat[fileType][name], fileType , name,true);
				}
				else{
					_this._import(
						['dist/' + static_config.publish + "/" + name.replace("."+fileType, "-min." + fileType)] ,
						fileType ,
						name,
						false
					);
				}
				break;
			case MODE.dev_css:
				if(fileType=="css"){
					_this._import(static_concat[fileType][name], fileType , name , true);
				}
				else{
					_this._import(
						['dist/' + static_config.publish + "/" + name.replace("."+fileType, "-min." + fileType)] ,
						fileType ,
						name,
						false
					);
				}
				break;
		}
	};

	if(arguments.length==0){
		return;
	}
	else{
		for(var i=0;i<arguments.length;i++){
			if(arguments[i]!=""){
				static_import.prototype._single_import(arguments[i]);
			}
		}
	}
};