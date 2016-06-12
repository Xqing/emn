var config = {
    ued_conf: {
        'ued.import.js': [
            "Concat.js",
            "Config.js",
            "Import.js",
            "../js/util/panda.js"
        ],
        /**
         * 编辑器页面的JS
         */
        "cube_editor.js": [
            "../js/util/jquery.js",
            "../js/util/jquery.tmpl.js",
            "../js/widget/spectrum.js",
            "../js/editor/util/html2canvas.js",
            "../js/editor/util/feather.js",
            "../js/editor/util/feathercontrols_desktop_zh_hans.js",
            "../js/editor/util/featherpaint.js",
            "../js/editor/util/jquery.nouislider.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/editor/propertyeditor/couponEditor.js",
            "../js/editor/propertyeditor/promotion.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/util/jquery-placeholder.js",
            "../js/widget/Guid.js",
            "../js/widget/price.js",
            "../js/util/qrcode.js",
            "../js/widget/imgLazyLoad.js",
            "../js/widget/imgLoadCheck.js",
            "../js/shop/shopBack/appActivityPOP.js",
            "../js/editor/propertyeditor/props/slideEditor.js",
            "../js/editor/propertyeditor/props/menu.js",
            "../js/editor/propertyeditor/props/weiExclusiveActivity.js",
            "../js/editor/propertyeditor/weiActivitySelector.js",
            "../js/editor/editor.js"
        ],
        /**
         * 编辑器页面的CSS
         */
        "panda_cube.css": [
            "../skin/v1.0.0/panda_cube.css",
            "../skin/v1.0.0/cube_img_dialog.css",
            "../skin/v1.0.0/cube_viewpage.css",
            "../skin/v1.0.0/editorpage.css",
            "../skin/v1.0.0/editorpage-property.css",
            "../skin/v1.0.0/cube_zy.css",
            "../skin/v1.0.0/spectrum.css",
            "../skin/v1.0.0/jquery.nouislider.css",
            "../skin/v1.0.0/jquery.datepicker.css",
            "../skin/widget/button/cube/button.css",
            "../skin/widget/popbase/cube/popbase.css",
            "../skin/widget/tree/cube/tree.css",
            "../skin/widget/tip/default/tip.css",
            "../skin/widget/table/default/table.css",
            "../skin/widget/pagination/default/pagination.css",
            "../skin/widget/select/default/select.css",
            "../skin/widget/calendar/default/calendar.css",
            "../skin/image_editor/feather_core_minimum.css",
            "../skin/v1.0.0/introjs.css"
        ],
        /**
         * 模板页面的CSS
         */
        "edit_content.css": [
            "../skin/v1.0.0/cube_viewpage.css",
            "../skin/v1.0.0/cube_editpage.css",
            "../skin/v1.0.0/spectrum.css"
        ],
        /**
         * 模板的页面的JS
         */
        "edit_content.js": [
            "../js/util/jquery.js",
            "../js/editor/util/html2canvas.js",
            "../js/widget/price.js",
            "../js/widget/imgLazyLoad.js",
            "../js/widget/imgLoadCheck.js",
            "../js/editor/frame/frame.js"
        ],
        /**
         * 预览页面的JS
         */
        "cube_preview.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/util/qrcode.js",
            "../js/util/jquery-placeholder.js",
            "../js/preview/entrance.js"
        ],
        /**
         * 商家页面css
         */
        "shop_main.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/shop-main.css",
            "../skin/v1.0.0/cube_img_dialog.css",
            "../skin/widget/button/cube/button.css",
            "../skin/widget/popbase/cube/popbase.css",
            "../skin/v1.0.0/jquery.datepicker.css",
            "../skin/v1.0.0/introjs.css",
            "../skin/v1.0.0/shop-main-survey.css",  //加入之后帮助table样式为新版
            "../skin/image_editor/feather_core_minimum.css",
            "../skin/v1.0.0/marketing-tools.css"    //礼品管理
        ],
        "cubebase.css": [
            "../skin/v1.0.0/cubebase.css"
        ],
        /**
         * 我的app页面js
         */
        "shop_myapp.js": [
            "../js/util/share.js",
            "../js/util/qrcode.js",
            "../js/shop/shopBack/myApp.js",
            "../js/widget/Guid.js"
            //"../js/shop/shopBack/appActivityPOP.js"
        ],
        /**
         * 基础信息设置页面js
         */
        "shop_set.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/editor/util/feather.js",
            "../js/editor/util/feathercontrols_desktop_zh_hans.js",
            "../js/editor/util/featherpaint.js",
            "../js/shop/shopBack/appSet.js"
        ],
        /**
         * 模版选择页面js
         */
        "shop_choice.js": [
            "../js/shop/shopBack/appChoice.js",
            "../js/widget/Guid.js"
            //"../js/shop/shopBack/appActivityPOP.js"
        ],
        /**
         * iPad新流程选择模版页面js
         * 暂时屏蔽 TODO
         */
        "new_shop_choice.js": [
            "../js/shop/shopBack/new_choice.js"
            //"../js/shop/shopBack/appActivityPOP.js"
        ],
        /**
         * 启动动画页面js
         */
        "shop_start.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/editor/util/feather.js",
            "../js/editor/util/feathercontrols_desktop_zh_hans.js",
            "../js/editor/util/featherpaint.js",
            "../js/shop/shopBack/appStart_new.js"
        ],

        /**
         * 店铺列表页面js
         */
        "store_list.js": [
            "../js/util/qrcode.js",
            "../js/shop/shopBack/maStore.js",
            "../js/widget/Guid.js"
            //"../js/shop/shopBack/appActivityPOP.js"
        ],

        /**
         * 组件上传页面js
         */
        "widget_up.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/widget/ScrollBar.js",
            "../js/shop/shopBack/widgetUp.js"
        ],
        /**
         * 打包预览页面
         */
        "shop_pack.js": [
            "../js/util/jquery.js",
            "../js/shop/shopBack/appPreview.js"
        ],
        /**
         * App版本管理
         */
        "appVersionMgr.js": [
            "../js/util/jquery.js",
            "../js/appVersionMgr.js"
        ],
        /**
         * 消息推送
         */
        "app-message.js": [
            "../js/util/jquery.js",
            "../js/shop/shopBack/app-message.js"
        ],
        /**
         * 组件库列表
         */
        "widget_ku.js": [
            "../js/shop/shopBack/widgetKu.js"
        ],
        /**
         * 组件库列表
         */
        "widget_item.js": [
            "../js/shop/shopBack/widgetItem.js"
        ],
        /**
         * 首页
         */
        "shop_guide.js": [
            "../js/shop/shopBack/guide.js"
        ],
        /**
         * 排行榜首页
         */
        "homepage.js": [
            "../js/shop/shopBack/homepage.js"
        ],
        /**
         * 排行榜首页
         */
        "homepage.css": [
            "../skin/v1.0.0/homepage.css"
        ],
        /**
         * 商家展示
         */
        "shop_recommend.js": [
            "../js/util/qrcode.js",
            "../js/shop/shopBack/recommend.js"
        ],
        /**
         * 默认开店工具
         * 暂时屏蔽  TODO
         */
        "default_shop.js": [
            "../js/shop/shopBack/defShop.js"
        ],
        /**
         * 默认打包工具
         */
        "default_package.js": [
            "../js/shop/shopBack/defPackage.js"
        ],
        /**
         *  帮助
         */
        "help.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/editor/util/feather.js",
            "../js/editor/util/feathercontrols_desktop_zh_hans.js",
            "../js/editor/util/featherpaint.js",
            "../js/shop/shopBack/help.js",
            "../js/shop/shopBack/feedBack.js"
        ],
        /**
         * 商家问卷调查
         */
        "survey_shop.js": [
            "../js/shop/shopBack/survey.js"
        ],
        /**
         * pop问卷调查
         */
        "survey_admin.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/shop/shopBack/adminSurvey.js"
        ],
        /**
         * 运行界面公共JS
         */
        "run_common.js": [
            "../js/util/panda.js",
            "../js/util/jquery.js",
            "../js/util/qrcode.js",
            "../js/util/share.js",
            "../js/template/follow.js",
            "../js/template/coupon.js",
            "../js/util/run_common.js",
            "../js/widget/price.js",
            "../js/template/im_shop.js",
            "../js/widget/imgLazyLoad.js",
            "../js/widget/imgLoadCheck.js",
            "../js/template/mping_event.js"
        ],
        "run_common.css": [
            "../skin/v1.0.0/foundation.css"
        ],
        "template.js": [
            "../js/template/template.js"
        ],
        "browserCheck.js": [
            "../js/util/browserCheck.js"
        ],
        "modernizr.js": [
            "../js/util/modernizr.js"
        ],
        "browser.css": [
            "../skin/v1.0.0/browser.css"
        ],
        "m-panda.js": [
            "../js/util/m-panda.js"
        ],
        "imgLazyLoad.js": [
            "../js/widget/imgLazyLoad.js"
        ],
        /**
         * 数据统计模块
         */
        "data_chart.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/widget/highcharts.js",
            "../js/shop/shopBack/dataCharts.js"
        ],
        "data_table.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/shop/shopBack/dataTable.js"
        ],
        /**
         * 微店数据统计
         */
        "data_admin_wd.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/widget/highcharts.js",
            "../js/shop/shopBack/weiDianData.js"
        ],

        /**
         * 管理员店铺数据
         */
        "data_admin_shop.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/widget/highcharts.js",
            "../js/shop/shopBack/shopAdminData.js"
        ],
        /**
         * 管理员app数据
         */
        "data_admin_app.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/widget/highcharts.js",
            "../js/shop/shopBack/appAdminData.js"
        ],
        /**
         * 独立数据报表
         */
        "new_app_data.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/widget/highcharts.js",
            "../js/shop/shopBack/indieAppData.js"
        ],
        /**
         * 模板css、js 文件
         */
        "cubebase.css": [
            "../skin/v1.0.0/cubebase.css"
        ],
        "template2.css": [
            "../skin/v1.0.0/template2.css"
        ],
        "template3.css": [
            "../skin/v1.0.0/template3.css"
        ],
        /**
         * 该js文件是周生生的模板，基于jquery编写
         */
        "template0409.css": [
            "../skin/v1.0.0/template0409.css"
        ],
        "template0409.js": [
            "../js/template/template0409.js"
        ],
        "app-download.css": [
            "../skin/v1.0.0/app-download.css"
        ],
        /**
         * 二维码文件
         */
        "qrcode.js": [
            "../js/util/qrcode.js"
        ],
        /**
         * 二维码生成工具
         */
        "qrcodeTool.js": [
            "../js/util/panda.js",
            "../js/util/qrcode.js",
            "../js/shop/shopBack/qrcodeTool.js"
        ],
        "temporary.css": [
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/shop-main.css",
            "../skin/v1.0.0/temporary.css",
            "../skin/v1.0.0/marketing-tools.css"
        ],
        /**
         * 营销工具礼品管理
         */
        "tool_gift.js": [
            "../js/util/jquery.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/shop/tool/gift.js"
        ],
        /**
         * 订单查询
         */
        "tool_book.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/shop/tool/bookSearch.js"
        ],
        /**
         * 订单查询
         * 为了写一个订单查询还需要引用这个多东西，感觉有点不合适
         * 后面优化js的问题
         */
        "bookSearch.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/util/panda.js",
            "../js/shop/shopBack/book.js"
        ],
        "apppeLinkPage.js": [
            "../js/util/jquery.js",
            "../js/util/qrcode.js",
            "../js/shop/shopBack/apppeLinkPage.js"
        ],
        /**
         * 微店专用
         */
        "w_common.js": [
            "../js/widget/priceZepto.js",
            "../js/widget/imgLazyLoadZepto.js",
            "../js/widget/slideZepto.js"
        ],
        /**
         * 双11活动页面
         */
        "activity.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/activity.css"
        ],
        /**
         * 独立APP
         */
        "app_home.js": [
            "../js/template/app_home.js"
        ],
        "app_home.css": [
            "../skin/v1.0.0/app_home.css"
        ],
        /**
         * 独立APP
         */
        "app_upgrade.css": [
            "../skin/v1.0.0/app_upgrade.css"
        ],
        /**
         * jshop手机活动管理
         */
        "jshop_MActivity.js": [
            "../js/util/jquery.js",
            "../js/util/jquery.tmpl.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/shop/shopBack/jshopMActivity.js"
        ],
        /**
         * jshop手机活动管理
         */
        "jshop_MActivity.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/shop-main.css",
            "../skin/widget/popbase/cube/popbase.css",
            "../skin/v1.0.0/jshop-active.css",
            "../skin/widget/button/cube/button.css",
            "../skin/v1.0.0/jquery.datepicker.css",
            "../skin/v1.0.0/cube_img_dialog.css"
        ],
        /**
         * 第三方平台
         */
        "third_platform.js": [
            "../js/util/jquery.js",
            "../js/widget/jquery-ui-datepicker-slider.js",
            "../js/widget/jquery-ui-timepicker.js",
            "../js/editor/util/jquery.nicescroll.js",
            "../js/shop/shopBack/thirdPlatform.js"
        ],
        /**
         * 第三方平台
         */
        "third_platform.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/jquery.datepicker.css",
            "../skin/v1.0.0/third-platform.css"
        ],
        /**
         * 营销组件列表页(编辑)
         */
        "templateList.js": [
            "../js/util/jquery.js",
            "../js/activetemplate/templateList/kkpager.js",
            "../js/activetemplate/templateList/templateList.js"
        ],
        "templateList.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/shop-main.css",
            "../js/activetemplate/activetempalte.css",
            "../js/activetemplate/templateList/kkpager_orange.css",
            "../js/activetemplate/templateList/templateList.css"
        ],
        /**
         * 营销组件列表页(查看)
         */
        "templateViewList.js": [
            "../js/util/jquery.js",
            "../js/activetemplate/templateList/kkpager.js",
            "../js/activetemplate/templateViewList/templateViewList.js"
        ],
        "templateViewList.css": [
            "../skin/v1.0.0/base.css",
            "../skin/v1.0.0/main.css",
            "../skin/v1.0.0/shop-main.css",
            "../js/activetemplate/activetempalte.css",
            "../js/activetemplate/templateList/kkpager_orange.css",
            "../js/activetemplate/templateViewList/templateViewList.css"
        ],
        "jquery.js":[
            "../js/util/jquery.js"
        ]
    },
    ued_config: {
       name: "panda_demo",
       version: "v1.0.0",
       publish: "v20160524",
       development: "online",
       root: "//static.360buyimg.com/panda_cube/",
       require: "../js/"
    }
    //ued_config:{
    //     name:"panda_demo",
    //     version:"v1.0.0",
    //     publish:"v20160516v3",
    //     development:"dev",
    //     root:"http://localhost/dist/",
    //     require:"../js/"
    //}
};
var ued_config = config.ued_config;
var ued_conf = config.ued_conf;
