<template>
    <div class="container">
        <button @click="test">测试356678</button>
        <button @click="loadMore">加载更多</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
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
                this.loadData()
            },
            loadData() {
            },
            toggleTypeSelector() {
                this.typeVisible = !this.typeVisible
            },
            selectType(type) {
                this.curType = type
                this.typeVisible = false
                this.curPage = 1
                this.loadData()
            },
            bindViewTap() {
                const url = "../logs/main";
                wx.navigateTo({
                    url
                });
            },
            clickHandle(msg, ev) {
                console.log("clickHandle:", msg, ev);
            }
        },

        
    };
</script>

<style lang="scss" scoped>
    .type-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 24px;
        z-index: 100;
        background-color: #f9f9f9;
        .close {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 32px;
            height: 32px;
            background-color: #fff;
        }
    }
    .type-list {
        display: flex;
        flex-wrap: wrap;
        // width: 33.33%;
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 33.33%;
        }
        .img {
            width: 60px;
            height: 60px;
        }
    }
    .product-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        // background-color: #f00;
        .item {
            display: flex;
            flex-direction: column;
            align-items:center;
            // justify-content: center;
            width: 50%;
        }
        .img {
            max-width: 100px;
        }
    }
    .userinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #f00;
    }

    .userinfo-avatar {
        width: 128rpx;
        height: 128rpx;
        margin: 20rpx;
        border-radius: 50%;
    }

    .userinfo-nickname {
        color: #aaa;
    }

    .usermotto {
        margin-top: 150px;
    }

    .form-control {
        display: block;
        padding: 0 12px;
        margin-bottom: 5px;
        border: 1px solid #ccc;
    }

    .counter {
        display: inline-block;
        margin: 10px auto;
        padding: 5px 10px;
        color: blue;
        border: 1px solid blue;
    }
</style>