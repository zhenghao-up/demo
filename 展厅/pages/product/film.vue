<template name="film">
	<view>
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
		name: "film",
		data() {
			return {
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
					},
					{
						id:3,
						title:'君子如玉',
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
					},
					{
						id:4,
						title:'桃花道四季',
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
				]
			};
		},

		beforeCreate() {
			_self = this;
			console.log('film');	
		},
		methods: {
			functionfilm(e){
				console.log(e);
				// _self.articleList = [];
				
				//访问服务器获取对应的数据
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
