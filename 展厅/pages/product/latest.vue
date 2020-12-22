<template name="latest">
	<view>
	   <!-- 文章区域 -->
		<view class="cu-card article" :class="isCard?'no-card':''">
				<view v-for="(item,index) in articleList" :key="index" 
				@tap="toContent" :data-id="item.id" 
				  :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" class="cu-item shadow">
					<view class="title"><view class="text-cut">{{item.title}}</view></view>
					<view class="content">
						<image :src="item.srcUrl"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> {{item.desc}}</view>
							<view style="display: flex;flex-flow: row;justify-content: space-between;">
								<view>
								<view v-for="(ite,ind) in item.tags" :key="ind" 
								:class=" ind%2==0?'bg-red':'bg-olive'" class="cu-tag light sm round">
								  {{ite}}
								</view>
								</view>
								<text class="cuIcon-attentionfill margin-right ">{{item.traffic}}</text> 

							</view>
						</view>
					</view>
				
				</view>
		</view>
	    <!-- 生活区域 -->
		<view class="cu-card dynamic">
	    	<view class="cu-item shadow" v-for="(item,index) in lifeList" :key="index"
	    	:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]">
	    		<view class="cu-list menu-avatar padding-top-xl padding-bottom">
	    			<view>
	    				<view class="flex-sub margin-lr-lg" >
	    					<view style="line-height: 1.7em;" class="text-df padding-bottom-sm">
	    						{{item.title}}
	    					</view>
	    					<view  class="text-gray text-sm flex justify-end margin-right-sm ">
	    						{{item.dater}}
	    					</view>
	    				</view>
	    			</view>
	    		</view>
	    		<view class="grid flex-sub padding-lr" :class="item.imgs.length>1?'col-3 grid-square':'col-1'">
	    			<view class="bg-img" :class="item.imgs.length>1?'':'only-img'" 
	    			 v-for="(ite,inde) in item.imgs" :key="inde"
	    			 :style="[{backgroundImage: 'url( ' + ite + ')'}]"
	    			@tap="showModal" :data-target="index" :data-displ="inde"
	    			 >
	    			</view>
	    		</view>
	    		<view class="text-gray text-sm text-right padding">
	    			<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
	    		</view>
	    	</view>
	    
		    <view class="cu-modal" :class="modalName!=null?'show':''" @click="hideModal">
		    	<view class="cu-dialog" >
		    		<swiper 
		    		:indicator-dots="lifeList[modalName].imgs.length>1?true:false" 
		    		:current="displ">
		    			<swiper-item class="bg-img" 
		    			v-for="(it,ind) in lifeList[modalName].imgs" :key="ind"
		    			:style="[{backgroundImage: 'url( ' + it + ')'}]"
		    	        >
		    			</swiper-item>
		    		</swiper>
		    	</view>
		    </view>
		    		
		</view>
	    <!-- 视频区域 -->
		<view class="cu-card dynamic">
		    <view class="cu-item shadow uni-padding-wrap uni-common-mt"
			v-for="(item,index) in filmList" :key="index"
			:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" >
		    	<view class="cu-list menu-avatar">
		    		<view>
		    			<view class="flex-sub margin-lr-lg padding-tb-xl" >
		    				<view style="line-height: 1.7em;overflow: hidden;height: auto;" class="text-df">
		    					{{item.title}}
		    				</view>
		    			</view>
		    		</view>
		    	</view>
		        <view class="grid center-sub col-1 padding-lr" >
		            <video style="width: 100%;"  :id="'video'+index" :ref="'video'+index"
		    		:src="item.src" muted="true" 
					    @timeupdate="timechange" :data-index="index"
		                @error="videoErrorCallback" play-btn-position="center"
		    			:title="item.title" enable-play-gesture="true" danmu-btn="true"
		    			 :danmu-list="item.danmuList" page-gesture="true" show-mute-btn="true"
		    			 enable-danmu="true"  controls ></video>
		        </view>
		    	<view class="text-gray text-xxl text-right padding-lr" 
				:class="item.icontb?'padding-top':'padding'" @tap="toicontb" :data-index="index">
		    		<text class="margin-lr-xs" 
		    		:class="item.icontb?'cuIcon-fold':'cuIcon-unfold' "></text>
		    	</view>
		    	<!-- #ifndef MP-ALIPAY -->
		    	  <view class="padding-lr" v-if="item.icontb">
		    	      <view class="cu-form-group margin-top solid-top solid-bottom">
		    	      	<view class="title">弹幕内容</view>
		    	      	<input adjust-position="false" v-model="item.danmuValue" type="text"  placeholder="请输入弹幕内容" maxlength="20" name="input"></input>
		    	      </view>
		    	  </view>
		    	  <view class="cu-btn-v padding-tb-sm padding-lr" v-if="item.icontb">
		    	      <button @tap="sendDanmu" :data-index="index" :data-id="item.id" class="bg-grey page-body-button">发送弹幕</button>
		    	  </view>
		    	 <!-- #endif -->
		    </view>
			
		</view>
	
	</view>
</template>

<script>
	var _self;
	export default {
		name: "latest",
		data() {
			return {
				modalName:null,
				displ:null,
				isCard : false,
				backupList: [
					{
							id: 1,
							title: '爱情就是这么无聊',
							srcUrl: '../../static/16.bmp',
							desc: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！',
							tags: ['php','真挚'],
						    traffic: 11
						},
						{
							id: 2,
							title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
							srcUrl: '../../static/16.bmp',
							desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
							tags: ['善良','thinkphp'],
						    traffic: 11
						},
						{
							id: 3,
							title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
							srcUrl: '../../static/16.bmp',
							desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
							tags: ['善良','phpcenter'],
						    traffic: 11
						}
					
				],
				articleList: [
					{
						id: 1,
						title: '爱情就是这么无聊',
						srcUrl: '../../static/16.bmp',
						desc: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！',
						tags: ['php','真挚'],
						traffic: 11
					},
					{
						id: 2,
						title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
						srcUrl: '../../static/16.bmp',
						desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
						tags: ['善良','thinkphp'],
						traffic: 11
					}
				],
				lifeList: [
					{
						id: 1,
						title: '折磨有我来终结折磨生出苦难折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！，苦难又会加剧折磨，将有我来终结！！',
						traffic: 87,
						dater: '2020年5月6日',
						imgs: [
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp'
						]
					},
					{
						id: 2,
						title: '折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！',
						traffic: 97,
						dater: '2020年5月6日',
						imgs: [
							'../../static/16.bmp'
						]
					}
				],
				filmList: [
					{
						id:1,   //视频在服务器对应唯一id
						title:'君子不器',  //视频名字
						//视频地址
						src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v',
						icontb: false,  //是否显示弹幕输入区域
						danmuValue: '',  //本地发送时的弹幕内容
						danmuTime: 0,     //本地发送时的弹幕时间
						//自服务器查询出来的弹幕数据
						danmuList: [
							{
							    text: '第 1s 出现的弹幕',
							    color: '#ff0000',
							    time: 1
							},
							{
							    text: '第 3s 出现的弹幕',
							    color: '#ff00ff',
							    time: 3
							}
						]
					},
					{
						id:2,
						title:'君子好器',
						src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v',
						icontb: false,
						danmuValue: '',
						danmuTime: 0,
						danmuList: [
							{
							    text: '第 1s 出现的弹幕',
							    color: '#ff0000',
							    time: 1
							},
							{
							    text: '第 3s 出现的弹幕',
							    color: '#ff00ff',
							    time: 3
							}
						]
					}
				],
				selectid: null,
			};
		},
		beforeCreate() {
			_self = this;
			console.log('latest');	
		},
		methods: {
			showModal(e) {
				_self.modalName = parseInt(e.currentTarget.dataset.target);
				_self.displ = e.currentTarget.dataset.displ;
				console.log(_self.modalName);
			},
			hideModal(e) {
				_self.modalName = null;
				_self.displ = null;
			},
			functionlatest(e){
				console.log(e);
				// _self.articleList = [];
				
				//访问服务器获取对应的数据
			},
			toContent(e){
				console.log(e);
				uni.navigateTo({
					url: '../product/content?artid='+e.currentTarget.dataset.id
				})
			},
			//改变所点击的视频弹幕输入显示与否
			toicontb(e){
				let indexid = e.currentTarget.dataset.index;
				this.filmList[indexid]['icontb'] = this.filmList[indexid]['icontb']?false:true;
			},
			//发送弹幕，并把数据发送到服务器无须服务器返回值
			sendDanmu(e){
				
				
				let indexid = e.currentTarget.dataset.index;
				//对应视频的唯一fid、弹幕时间和内容
				let danmuTime = _self.filmList[indexid].danmuTime;
				let text = _self.filmList[indexid].danmuValue;
				let fid = e.currentTarget.dataset.id; 
				
				let zhi = 'video'+indexid;
				console.log(uni.createVideoContext(zhi,_self));
			    uni.createVideoContext(zhi,_self).sendDanmu({
			        text: _self.filmList[indexid].danmuValue,
			        color: _self.getRandomColor()
			    });
			    _self.filmList[indexid].danmuValue = '';
				
				//把fid、danmuTime和text包发给服务器存储，无须服务器返回数据
				
			},
			videoErrorCallback: function(e) {
			    uni.showModal({
			        content: e.target.errMsg,
			        showCancel: false
			    })
			},
			timechange: function(e){
				console.log(e.detail);
				let indexid = e.currentTarget.dataset.index;
				_self.filmList[indexid].danmuTime = Math.floor(e.detail.currentTime);
				console.log(_self.filmList[indexid].danmuTime);
			},
			getRandomColor(){
			    const rgb = []
			    for (let i = 0; i < 3; ++i) {
			        let color = Math.floor(Math.random() * 256).toString(16)
			        color = color.length == 1 ? '0' + color : color
			        rgb.push(color)
			    }
			    return '#' + rgb.join('')
			}
					
			
		
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
