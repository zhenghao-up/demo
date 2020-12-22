<template>
	<view>
		<cu-custom bgColor="bg-grey light" >
			<block slot="content">动态发布</block>
		</cu-custom>

		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
	
	   <!--  第一步 -->
		<view class="cu-card"  v-if="num==0?true:false">
				<view class="cu-item shadow radius text-grey text-center button-hover "  
				@tap="toSteps" :data-name="item.name" :data-ind="index"
				:class="['bg-' + item.color,'animation-'+item.animation]"
				:style="[{animationDelay: (index + 1)*0.5 + 's'}]"
				 v-for="(item,index) in steps" :key="index"
				>
					<view class="cardTitle">
						{{item.name}}
					</view>
				</view>
		</view>

		<!-- 第二步 -->
		<view v-if="num==1?true:false">
			<view v-if="Origin==0?true:false">
				<view class="padding">
					<view class="cu-form-group margin-top">
						<view class="title text-gray">标题</view>
						<input placeholder=" " v-model="TwoList[0].title" name="title"></input>
					</view>
					<view class="cu-form-group align-start margin-top">
						<view class="desc title text-gray">概述</view>
						<textarea maxlength="77" v-model="TwoList[0].desc" placeholder=" "></textarea>
					</view>
					<view class="margin-top">
						<view class="cu-bar bg-white margin-top" @tap="tocovericontb">
							<view class="action">
								封面上传
							</view>
							<view class="text-gray text-xxl text-right padding-lr"
							:class="showCover?'padding-top':'padding'">
								<text class="margin-lr-xs" 
								:class="showContent?'cuIcon-fold':'cuIcon-unfold' "></text>
							</view>
						</view>
						<view class="cu-form-group" v-show="showCover">
							<view class="grid col-1 grid-square flex-sub padding">
								<view class="bg-img" v-if="TwoList[0].imgSrc==''?false:true"  @tap="ViewImage" :data-url="TwoList[0].imgSrc">
								 <image :src="TwoList[0].imgSrc" mode="aspectFill"></image>
									<view class="close-tag bg-red col-1" @tap.stop="DelImg">
										<text class='cuIcon-close ' ></text>
									</view>
								</view>
								<view class="solids" @tap="ChooseImage" :data-index="Origin" v-if="TwoList[0].imgSrc==''?true:false">
									<text class='cuIcon-cameraadd' style="font-size: 77rpx;"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="Origin==1?true:false">
				<view class="padding ">
					<view class="cu-item bg-white shadow radius text-grey text-center button-hover animation-slide-left"
					:style="[{animationDelay: 0.2 + 's'}]"
					>
						<view class="cardTitle">
							诗与远方
						</view>
					</view>
					<view class="cu-form-group align-start <margin-top></margin-top>">
						<view class="desc title text-gray">以诗抒情</view>
						<textarea maxlength="-1" v-model="TwoList[Origin].poetry" placeholder=" "></textarea>
					</view>
				</view>
			</view>
			<view v-if="Origin==2?true:false">
				<view class="padding ">
					<view class="cu-item bg-white shadow radius text-grey text-center button-hover animation-slide-right"
					:style="[{animationDelay: 0.2 + 's'}]"
					>
						<view class="cardTitle">
							赏月鉴影
						</view>
					</view>
					<view class="cu-form-group align-start <margin-top></margin-top>">
						<view class="desc title text-gray">雅语共鉴</view>
						<textarea maxlength="-1" v-model="TwoList[Origin].poetry" placeholder=" "></textarea>
					</view>
				</view>
				
			</view>
			<view class="padding margin-bottom-xl">
				<view class="flex margin-bottom-xl">
					<button class="flex-sub bg-white margin-xs radius" @tap="BackOK">返回</button>
					<button class="flex-sub bg-green light margin-xs radius" @tap="RunSteps">下一步</button>
				</view>
			</view>
		</view>
		
		<!-- 第三步 -->
		<view v-if="num==2?true:false">
			<view v-if="Origin==0?true:false">
				<view class="padding">
					<view class="flex bg-white solid-bottom padding-lr justify-between margin-top"
					@tap="toicontb">
						<view class="text-gray text-lg text-left padding">
							<view class=" margin-lr-xs radius text-center">内容</view>
						</view>
						<view class="text-gray text-xxl text-right padding-lr"
						:class="showContent?'padding-top':'padding'">
							<text class="margin-lr-xs" 
							:class="showContent?'cuIcon-fold':'cuIcon-unfold' "></text>
						</view>
					</view>
					<view class="content padding-top-sm" v-show="showContent" >
						<ly-markdown :showPreview="false" :textareaData.sync="textareaData" :textareaHtml.sync="textareaHtml"></ly-markdown>
					</view>				
				</view>
			</view>
			<view v-if="Origin==1?true:false">
			  <view class="padding">
				<view class="cu-bar bg-white margin-top">
					<view class="action">
						图集上传
					</view>
					<view class="action">
						{{TwoList[Origin].imgList.length}}/9
					</view>
				</view>
				<view class="cu-form-group">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in TwoList[Origin].imgList" :key="index" @tap="ViewImage" :data-url="TwoList[Origin].imgList[index]">
						 <image :src="TwoList[Origin].imgList[index]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solids" @tap="ChooseImage" :data-index="Origin" v-if="TwoList[Origin].imgList.length<9">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>
			  </view>
			</view>
			<view v-if="Origin==2?true:false">
				<view class="padding">
					<view class="cu-form-group">
						<view class="grid col-1 grid-square flex-sub padding">
							<view class="bg-img" v-if="TwoList[Origin].videoSrc==''?false:true"  @tap="ViewImage" :data-url="TwoList[Origin].videoSrc">
							 <image :src="TwoList[0].imgSrc" mode="aspectFill"></image>
							 <video style="width: 100%;" muted="true"  :src="TwoList[Origin].videoSrc"></video>
								<view class="close-tag bg-red col-1" @tap.stop="DelVideo">
									<text class='cuIcon-close ' ></text>
								</view>
							</view>
							<view class="solids" @tap="ChooseVideo" :data-index="Origin" v-if="TwoList[Origin].videoSrc==''?true:false">
								<text class='cuIcon-cameraadd' style="font-size: 77rpx;"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="padding margin-bottom-xl">
				<view class="flex margin-bottom-xl">
					<button class="flex-sub bg-white margin-xs radius" @tap="BackOK">返回</button>
					<button class="flex-sub bg-green light margin-xs radius" @tap="RunEnd">提交</button>
				</view>
			</view>
		</view>
		
		<view class="cu-modal bottom-modal" :class="modalName?'show':''" >
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green" @tap="BackSteps">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl">
					输入的内容可能被清除
				</view>
			</view>
		</view>
		
		
		<view class="cu-load load-modal" v-if="loadModal">
			<image src="/static/logo.jpg" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view> 
		</view>
	    
	</view>
</template> 

<script>
	import lyMarkdown from '../../colorui/components/ly-markdown.vue'
	export default{
		components: {
			lyMarkdown
		},
		data(){
			return{
				TwoList:[
					{
						title:'',
						desc:'',
						content:'',
						imgSrc:''
					},
					{
						poetry:'',
						imgList: []
					},
					{
						poetry: '',
						videoSrc: ''
					}
				],
				textareaData: "",
				textareaHtml: "",	
				showContent: false,
				showCover:false,
				steps:[
					{
						name:'载文之书',
						animation:'slide-left',
						color: 'orange'
					},
					{
						name:'诗与远方',
						animation:'slide-right',
						color: 'green'
					},
					{
						name:'赏月鉴影',
						animation:'slide-bottom',
						color: 'cyan'
					}
				],
				Origin:0,
				loadModal: false,
				modalName:false,
				numList: [{
					name: '选择'
				}, {
					name: '主体'
				}, {
					name: '附加'
				} ],
				num: 0,
			};
		},
		watch:{
			"textareaData":function(){
				this.TwoList[0].content = this.textareaData;
				console.log("markdown:"+this.textareaData)
				console.log("html:"+this.textareaHtml)
			}
		},
		methods:{
			DelVideo(){
				this.TwoList[this.Origin].videoSrc = '';
			},
			RunEnd(){
				console.log('开始'+this.Origin);
				// 根据不同的Origin值,发送至服务器进行相应的操作，success完成后返回到空白页
				//_self.TwoList= [{title:'',desc:'',content:'',imgSrc:''},
				//{poetry:'',imgList: []},{poetry: '',videoSrc: ''}];
			},
			ChooseVideo(e){
				let _self = this;
				_self.loadModal=true;
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						console.log('video');
						_self.loadModal=false;
					    _self.TwoList[_self.Origin].videoSrc = res.tempFilePath;
					},
					complete: function(res){
						_self.loadModal=false;
					}
				});
			},
			ChooseImage(e) {
				if(e.currentTarget.dataset.index == 0){
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
                            this.TwoList[0].imgSrc = res.tempFilePaths;
						}
					});
				}else if(e.currentTarget.dataset.index == 1){
					uni.chooseImage({
						count: 9, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							if (this.TwoList[1].imgList.length != 0) {
								this.TwoList[1].imgList = this.TwoList[1].imgList.concat(res.tempFilePaths)
							} else {
								this.TwoList[1].imgList = res.tempFilePaths
							}
							console.log(this.TwoList[1].imgList);
						}
					});
					
				}
				
			},
			DelImg(e) {
				if(this.Origin == 0){
					uni.showModal({
						title: '删图',
						content: '确定要删除这张图吗？',
						cancelText: '考虑一会',
						confirmText: '当然',
						success: res => {
							if (res.confirm) {
								this.TwoList[0].imgSrc = '';
							}
						}
					})
				}else if(this.Origin == 1){
					uni.showModal({
						title: '删图',
						content: '确定要删除这张图吗？',
						cancelText: '考虑一会',
						confirmText: '当然',
						success: res => {
							if (res.confirm) {
								this.TwoList[1].imgList.splice(e.currentTarget.dataset.index, 1)
							}
						}
					})
				}
				
			},
			toicontb(e){
				this.showContent = this.showContent?false:true;
			},
			tocovericontb(e){
				this.showCover = this.showCover?false:true;
			},
			changeContent(e){
				console.log(e);
			},
			RunSteps(e){
				console.log(e);
				this.NumSteps();
			},
			toSteps(e){
				console.log(e.currentTarget.dataset.name);
				this.NumSteps();
				this.Origin = e.currentTarget.dataset.ind;
			},
			LoadModal(e) {
				this.loadModal = true;
				setTimeout(() => {
					this.loadModal = false;
				}, 5000)
			},
			NumSteps() {
				if(this.num==this.numList.length){
					//已走完流程，现在把数据发送至服务器
				}
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			},
			BackSteps(){
			    let _self = this;
				// _self.TwoList= [{title:'',desc:'',content:''},{},{}];
			    _self.hideModal();
				_self.num = _self.num>0?_self.num-1:0;
			},
			hideModal(e) {
				this.modalName = false;
			},
			BackOK(e){
				this.modalName = true;
			}
			
		}
	}
</script>

<style>
	@import '../../static/markdown.css';
	@import url("../../colorui/components/mpvue-wxparse/src/wxParse.css");


    
    .close-tag{
		position: absolute;
		right: 0;
		top: 0;
		border-bottom-left-radius: 6rpx;
		padding: 30rpx;
		height: auto;
		background-color: rgba(0, 0, 0, 0.5);

	}
    
	.input-content {
		width: 100%;	
	}

	.input-content textarea {
		padding: 16px 25px;
		font-size: 14px;
		min-height: 150px;
		line-height: 1; 
		max-height: 300px;
	}
	.wxParse {
	    width: 100%;
	    font-family: Helvetica, sans-serif;
	    font-size: 14px;
	    color: #666;
	    line-height: 1.8;
	}

    .wxParse .blockquote {
    	margin: 10px 0;
        padding: 12px 0 12px 22px;
        font-family: Courier, Calibri, "\5B8B\4F53";
        background: #f5f5f5;
        border-left: 6px solid #dbdbdb;
    }
	.preview {
		border-top: 1px solid #e0e0e0;
		width: 100%;
		font-size: 15rpx;
		background-color: #FFFFFF;
	}

	.toolbar {
		width: 100%;
		border: none;
		background-color: #ffffff;
		box-shadow: 0 0px 4px rgba(0, 0, 0, 0.157), 0 0px 4px rgba(0, 0, 0, 0.227);
	}

	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 33px;
		width: 33px;
		font-size: 15px;
		padding: 12px;
		color: #757575;
		border-radius: 11px;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		/* line-height: 1.3; */
		vertical-align: middle;
	}

	.input-content {

		border-top: 1px solid #aaa;
		background-color: #ffffff;

	}

   
	.animation-slide-left {
	    animation-name: slide-left;
		animation-duration: .5s;
		animation-timing-function: ease-out;
		animation-fill-mode: both
	}
	
	.animation-slide-right {
	    animation-name: slide-right;
		animation-duration: .5s;
		animation-timing-function: ease-out;
		animation-fill-mode: both
	}
	.animation-slide-bottom {
	    animation-name: slide-bottom;
		animation-duration: .5s;
		animation-timing-function: ease-out;
		animation-fill-mode: both
	}
	
@keyframes slide-left {
    0% {
        opacity: 0;
        transform: translateX(-100%)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}

@keyframes slide-right {
    0% {
        opacity: 0;
        transform: translateX(100%)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}
@keyframes slide-bottom {
    0% {
        opacity: 0;
        transform: translateY(100%)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
}
	.cardTitle {
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}
	

</style>
