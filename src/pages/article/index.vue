<template>
    <div class="container">
        <!-- <button @click="test">测试356678</button> -->
        <ul class="article-list">
            <li class="item" v-for="article in articles" :key="article.onlyUrl" @click="viewArticle(article)">
                <img class="img" :src="article.picUrl">
                <div class="info">
                    <div class="name">{{ article.title }}</div>
                </div>
            </li>
        </ul>
        <button @click="loadMore">加载更多</button>
    </div>
</template>

<script>
    /* eslint-disable */
    import card from "@/components/card";
    // import {get} from '../../utils/utils'

    export default {
        data() {
            return {
                curPage: 1,
                articles: [],
                motto: "Hello World",
                userInfo: {}
            };
        },
        components: {
            card
        },
        created() {
            this.loadData()
            // share
            wx.showShareMenu({
                withShareTicket: true
            })
        },
        methods: {
            test() {
                wx.showToast({
                    title: '请求数据失败',
                    icon: 'none',
                    duration: 2000
                })
                console.log('测试')
            },
            loadMore() {
                this.curPage++
                this.loadData()
            },
            loadData() {
                console.log('网络请求')
                wx.request({
                    url: 'http://www.leikeji.com/columns/getArticleList',
                    data: {
                        ifHome: 1,
                        status: 1,
                        channels: 1,
                        pageIndex: 2,
                        pageSize: 10,
                        orderBy: 'postDate',
                        orderType: 'desc',
                        colName: '新鲜事'
                    },
                    success: res => {
                        let data = res.data
                        console.log(data)
                        if (data.code === '200') {
                            if (this.curPage === 1) {
                                this.articles = data.data
                            } else {
                                this.articles = this.articles.concat(data.data)   
                            }
                        } else {
                            wx.showToast({
                                title: '请求数据失败',
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    }
                })
            },
            viewArticle(article) {
                wx.navigateTo({
                    url: '/pages/articledetail/main?id=' + article.onlyUrl
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .article-list {
        .item {
            display: flex;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-bottom: 16px;
        }
        .img {
            width: 200px;
            height: 100px;
        }
    }
</style>
