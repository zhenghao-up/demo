<template>
	<view>
		<view>
			<view class="toolbar">
				<view class="iconfont icon-bold" @click="toolBarClick('bold')"></view>
				<view class="iconfont icon-italic" @click="toolBarClick('italic')"></view>
				<view class="iconfont icon-xiahuaxian1" @click="toolBarClick('header')"></view>
				<view class="iconfont icon-underline" @click="toolBarClick('underline')"></view>
				<view class="iconfont icon-strike" @click="toolBarClick('strike')"></view>
				<view class="iconfont icon-sup" @click="toolBarClick('sup')"></view>
				<view class="iconfont icon-sub" @click="toolBarClick('sub')"></view>
				<view class="iconfont icon-alignleft" @click="toolBarClick('alignleft')"></view>
				<view class="iconfont icon-aligncenter" @click="toolBarClick('aligncenter')"></view>
				<view class="iconfont icon-alignright" @click="toolBarClick('alignright')"></view>
				<view class="iconfont icon-link" @click="toolBarClick('link')"></view>
				<view class="iconfont icon-image" @click="toolBarClick('imgage')"></view>
				<view class="iconfont icon-code" @click="toolBarClick('code')"></view>
				<view class="iconfont icon-table" @click="toolBarClick('table')"></view>
				<view class="iconfont icon-qingkong" @click="toolBarClick('clear')"></view>
			</view>
			<view class="input-content">
				<textarea auto-height maxlength="-1" @input="textchange" v-model="textData" @blur="getCursor"></textarea>
			</view>
		</view>
		<view class="margin-top">
			<view class="cu-bar bg-white margin-top" @tap="toPreviewsicontb">
				<view class="action">
					md格式转换
				</view>
				<view class="text-gray text-xxl text-right padding-lr"
				:class="showPreviews?'padding-top':'padding'">
					<text class="margin-lr-xs" 
					:class="showPreviews?'cuIcon-fold':'cuIcon-unfold' "></text>
				</view>
			</view>
		</view>
		<view class="preview" v-if="showPreviews">
			<scroll-view scroll-y :style="'height:'+screenHeight/3+'px;padding:10px'">
				<wxParse :content="textHtml" @preview="preview" @navigate="navigate" />
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import marked from './marked'
	import wxParse from './mpvue-wxparse/src/wxParse.vue'
	
	export default {
		name: "ly-markdown",
		components: {
			wxParse
		},
		data: function () {
			return {
				screenHeight: 0,
				showPreviews: false,
				cursor: 0,
				textHtml: null,
				textData: "",
				
			}
		},
		props: {
			textareaData: {
				type: String,
				default: ""
			},
			textareaHtml: {
				type: String,
				default: ""
			},
			showPreview: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			toPreviewsicontb(){
				this.showPreviews = this.showPreviews?false:true;
			},
			textchange(e){
				let newValue=e.detail.value;
				// this.textareaHtml = marked(newValue,{breaks: true});
				this.textHtml = marked(newValue,{breaks: true});
				this.$emit('update:textareaData', newValue);
				this.$emit('update:textareaHtml', this.textHtml);
			},
			preview(src, e) {
				uni.previewImage({
					urls: src,
				})
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				// #ifdef APP-PLUS
				plus.runtime.openURL(href)
				// #endif
				// #ifdef MP-WEIXIN
				uni.setClipboardData({
					data: href,
					success: function () {
						uni.showModal({
							content: "网址已复制,请在浏览器中粘贴打开",
							showCancel: false
						})
					}
				})
				// #endif
			},
			toolBarClick(type) {
				if (type == 'bold') {
					this.textData += "**粗体文字** "
				} else if (type == "italic") {
					this.textData += "*斜体* "
				} else if (type == "header") {
					uni.showActionSheet({
						itemList: ["标题1", "标题2", "标题3", "标题4", "标题5", "标题6"],
						success: res => {
							switch (res.tapIndex) {
								case 0:
									this.textareaData += "# 标题1\r";
									return;
								case 1:
									this.textareaData += "## 标题2\r";
									return;
								case 2:
									this.textareaData += "### 标题3\r";
									return;
								case 3:
									this.textareaData += "#### 标题4\r";
									return;
								case 4:
									this.textareaData += "##### 标题5\r";
									return;
								case 5:
									this.textareaData += "###### 标题6\r";
									return;
							}
						}
					})
				} else if (type == "underline") {
					this.textData += "++下划线++ "
				} else if (type == "strike") {
					this.textData += "~~中划线~~ "
				} else if (type == "sup") {
					this.textData += "^上角标^ "
				} else if (type == "sub") {
					this.textData += "~下角标~ "
				} else if (type == "alignleft") {
					this.textData += "\n::: hljs-left\n\n左对齐\n\n:::\n"
				} else if (type == "aligncenter") {
					this.textData += "\n::: hljs-center\n\n居中对齐\n\n:::\n"
				} else if (type == "alignright") {
					this.textData += "\n::: hljs-right\n\n\n\n右对齐\n\n:::\n"
				} else if (type == "link") {
					this.textData += "[在此输入网址描述](在此输入网址) "
				} else if (type == "imgage") {
					uni.chooseImage({
						count: 1,
						success: chooseImageRes => {
							const tempFilePaths = chooseImageRes.tempFilePaths;
							uni.showLoading({
								mask: true,
								title: "上传中",
							})
							uni.uploadFile({
								url: '', //在此填写图片上传地址
								filePath: tempFilePaths[0],
								name: 'file',
								formData: {},
								complete: function () {
									uni.hideLoading();
								},
								success: uploadFileRes => {
									var data = JSON.parse(uploadFileRes.data);
									this.textareaData += "![](" + data.data + ") "
								}
							});
						}
					})
					this.textData += "![](在此输入图片地址) "
				} else if (type == "code") {
					this.textData += "\n``` 代码块 \n\n```\n"
				} else if (type == "table") {
					this.textData += "\n|列1|列2|列3|\n|-|-|-|\n|单元格1|单元格2|单元格3|\n"
				} else if (type == "clear") {
					uni.showModal({
						title: "提示",
						content: "确定清空?",
						success: res => {
							if (res.confirm) {
								this.textData = "";
							}
						}
					})
				}
				this.textHtml = marked(this.textData,{breaks: true});
				this.$emit('update:textareaData', this.textData);
				this.$emit('update:textareaHtml', this.textHtml);
			},
			getCursor(e) {
				//安卓失去焦点获取不到cursor位置,暂不使用
				//this.cursor = e.detail.cursor; 
			}
		},
		watch: {
			"textareaData": function (newValue, oldValue) {
				this.textareaHtml = marked(newValue,{breaks: true})
				this.$emit('update:textareaData', newValue)
				this.$emit('update:textareaHtml', this.textareaHtml)
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = res.screenHeight
				}
			})
		},
		// onLoad: function () {
		// 	uni.getSystemInfo({
		// 		success: res => {
		// 			console.log(res);
		// 			this.screenHeight = res.screenHeight
		// 		}
		// 	})
		// }
	}
</script>

<style>
	 @import '../../static/markdown.css';
	@import url("./mpvue-wxparse/src/wxParse.css");
/*
	.input-content {
		width: 100%;
	}

	.input-content textarea {
		padding: 16px 25px 15px 25px;
		font-size: 30px;
		min-height: 500px;
		line-height: 1.5;
	}

	.preview {
		border-top: 1px solid #e0e0e0;
		width: 100%;
	}

	.toolbar {
		width: 100%;
		border: none;
		box-shadow: 0 0px 4px rgba(0, 0, 0, 0.157), 0 0px 4px rgba(0, 0, 0, 0.227);
	}

	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 61.6px;
		width: 61.6px;
		margin: 13px 0 11px 0px;
		font-size: 33px;
		padding: 10px 13px 11px 8px;
		color: #757575;
		border-radius: 11px;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		line-height: 2.2;
		vertical-align: middle;
	}

	.input-content {
		min-height: ;
	}
	 */
</style>
