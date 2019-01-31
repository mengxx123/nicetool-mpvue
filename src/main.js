import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: [
            // '^pages/index/main',
            '^pages/index/main',
            'pages/logs/main',
            'pages/test/main',
            'pages/article/main',
            'pages/articledetail/main',
            // 'pages/chart/main',
            'pages/detail/main'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#2ba246',
            navigationBarTitleText: '好工具',
            navigationBarTextStyle: '#fff'
        },
        // tabBar: {
        //     color: "#9a9a9a",
        //     selectedColor: "#9a9a9a",
        //     backgroundColor: "#ffffff",
        //     borderStyle: "white",
        //     list: [
        //         {
        //             pagePath: "pages/index/main",
        //             text: "首页",
        //         },
        //         {
        //             pagePath: "pages/article/main",
        //             text: "文章",
        //         },
        //         {
        //             pagePath: "pages/test/main",
        //             text: "测试",
        //         }
        //     ]
        // }
    }
}
