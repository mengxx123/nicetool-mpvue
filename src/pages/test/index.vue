<template>
    <div class="container">
        <h2>图表测试页面</h2>
        <div class="box"></div>
        <canvas class="canvas" canvas-id="shareCanvas" style="width:600px;height:500px"></canvas>

    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        data() {
            return {
            }
        },
        components: {
        },
        async created() {
            console.log('1')
            await this.getUserInfo()
            await this.downloadFile()
            console.log('2')
            
            this.drawImage()
            this.canvasToImage()
        },
        onShareAppMessage: function (res) {
            if (res.from === 'button') {
                // 来自页面内转发按钮
                console.log(res.target)
            }
            return {
                title: '自定义转发标题',
                path: '/pages/test?asd=123'
            }
        },
        methods: {
            test() {
                console.log('test')
            },
            canvasToImage() {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: 375,
                    height: 500,
                    destWidth: 375,
                    destHeight: 500,
                    canvasId: 'myCanvas',
                    success: function (res) {
                        console.log('朋友圈分享图生成成功:' + res.tempFilePath)
                        wx.previewImage({
                            current: res.tempFilePath, // 当前显示图片的http链接
                            urls: [res.tempFilePath] // 需要预览的图片http链接列表
                        })
                    },
                    fail: function (err) {
                        console.log('失败')
                        console.log(err)
                    }
                })
            },
            drawImage() {
                console.log('draw Image')
                console.log(this.userInfo)

                let canvasWidth = 375
                let canvasHeight = 375

                const ctx = wx.createCanvasContext('shareCanvas')
                ctx.setFillStyle('#f9f9f9')
                ctx.fillRect(0, 0, canvasWidth, canvasHeight)
                // ctx.draw()

                ctx.setFillStyle('#000')
                ctx.setFontSize(20)
                ctx.fillText(this.userInfo.nickName, 20, 20)
                ctx.fillText('MINA', 16, 60)

                ctx.beginPath()
                ctx.arc(375 / 2, 0.32 * 375, 0.15 * 375, 0, 2 * Math.PI)
                ctx.clip()
                ctx.drawImage(this.avatarTemp, 0, 100, 200, 200)
                ctx.restore()

                ctx.draw()
                
                // console.log('画头像', this.avatarTemp)
                // ctx.draw()
            },
            getUserInfo() {
                return new Promise((solve, reject) => {
                    // 调用登录接口
                    wx.login({
                        success: () => {
                            console.log('登录成功')
                            wx.getUserInfo({
                                success: res => {
                                    this.userInfo = res.userInfo;
                                    console.log('获取信息成功')
                                    solve()
                                }
                            });
                        }
                    });
                })
            },
            downloadFile() {
                return new Promise((solve, reject) => {
                    wx.downloadFile({
                        url: this.userInfo.avatarUrl,
                        success: res1 => {
                            this.avatarTemp = res1.tempFilePath
                            console.log('下载用户头像成功')
                            solve()
                            // wx.downloadFile({
                            //     url: that.data.qrcode,
                            //     success: function (res2) {
                            //         console.log('二维码：' + res2.tempFilePath)
                            //         //缓存二维码
                            //         that.setData({
                            //             qrcode_temp: res2.tempFilePath
                            //         })
                            //         console.log('开始绘制图片')
                            //         that.drawImage();
                            //         wx.hideLoading();
                            //         setTimeout(function () {
                            //             that.canvasToImage()
                            //         }, 200)
                            //     }
                            // })
                        }
                    })
                })
            },
            async asd() {
                return new Promise((solve, reject) => {
                    solve()
                })
            }
        },
    };
</script>

<style scoped>
    .box {
        width: 740rpx;
        height: 30px;
        background-color: #f00;
    }
    .canvas {
        background-color: #f00;
        border: 1px solid #f00;
    }
</style>