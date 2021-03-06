/**
 * index.js - banner js
 */
;(function (w, $) {
    function emnBanner(opts) {
        var defaultOpts = {
            node: null
        };
        /**
         * 参数合并
         */
        this.opts = $.extend(defaultOpts, opts);

        this._init();
    }
    $.extend(emnBanner.prototype, {
        /**
         * 初始化入口
         * @private
         */
        _init: function () {
        	var sliderWrap = $(this.opts.node);
            this.sliderWrapUl = $(this.opts.node).find('.j_banner_ul');
            this._layoutInit();
            this._setIndex();
        },
        /**
         * bannetr布局初始化
         * @private
         */
        _layoutInit: function () {
			var self = this;
			var wrapWidth = parseInt($(this.opts.node).css('width'));
			var wrapHeight = wrapWidth / 2.25 + 35;
			$(self.opts.node).css('height', wrapHeight);
			self.sliderWrapUl.css('width', self.sliderWrapUl.find('li').length * wrapWidth);
			self.sliderWrapUl.find('li').css('width', wrapWidth);

        },
        /**
         * 轮播图初始化
         * @private
         */
        _setIndex: function () {
            var self = this;
            

        },

        
        /**
         * 刷新页码
         * @private
         */
        _updataPageNum: function (index) {
        },
        /**
         * 重新加载
         */
        reload: function () {
            this._init();
        }
    });

    /**
     * 暴露全局变量
     */
    if (!w.emnBanner) {
        w.emnBanner = function () {
            $('.j_banner').each(function () {

                new emnBanner({
                    node: this
                });

            });
        };
    }

    /**
     * banner入口
     */
    $(function () {
        w.emnBanner();
    });

})(window, jQuery);