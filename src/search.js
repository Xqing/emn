/**
 * search.js
 */
;(function (w, $) {
    function searchForEmn(opts) {
        var defaultOpts = {
            node: null
        };
        /**
         * 参数合并
         */
        this.opts = $.extend(defaultOpts, opts);

        this._init();
    }
    $.extend(searchForEmn.prototype, {
        /**
         * 初始化入口
         * @private
         */
        _init: function () {
            this._bind();
            this._ajaxBind();

        },
        /**
         * 事件绑定
         * @private
         */
        _bind: function () {
            var self = this;
            $(self.opts.node).on('click',function(){
                $(this).find('.i-search').toggleClass('up-show');
                $('.search-area').toggle();
            });
        },
        /**
         * 搜索请求
         * @private
         */
        _ajaxBind: function () {
          $('.j-search-btn').on('click',function(){
              var userJson = {};
              searchVal = $(this).siblings('.search-val').val();

              window.location.href='/index/search?meetname='+searchVal;

          });
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
    if (!w.searchForEmn) {
        w.searchForEmn = function () {
            $('.j-search').each(function () {

                new searchForEmn({
                    node: this
                });

            });
        };
    }

    /**
     * 入口
     */
    $(function () {
        w.searchForEmn();
    });

})(window, jQuery);