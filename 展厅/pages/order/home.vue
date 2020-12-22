<template>

	<view>
		<cu-custom bgColor="bg-white light text-grey " >
			<block slot="content">尘行展厅</block>
		</cu-custom>
		<view>
			<view class="flex justify-center flex-direction align-center bg-white">
					<view class="bg-grey lg margin-top-xl cu-avatar round" style="background-image:url(../../static/logo.jpg);"></view>
				   <button class="text-sm lg margin bg-green light margin-bottom">登录展厅</button>
			</view>
			<view class="margin-bottom">
				<view class="bg-white ">
					<view class="grid margin-bottom text-center col-3 padding-bottom-xl solids-bottom radius"
					style="box-shadow: 0px 9px 25upx rgba(0, 0, 0, 0.1);">
						<view class=" flex justify-around flex-direction align-center "
						v-for="(item,index) in alfList" :key="index" :class="index==2?'solid-left solid-right':''">
							<view class="padding-tb-sm text-lg" :class="'text-'+item.color">{{item.num}}</view>
							<view class="text-gray"><text class="lg text-gray cuIcon-tagfill" :class="'cuIcon-'+item.icon" ></text>{{item.title}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl">
				<view class="cu-item arrow" v-for="(item,index) in copys" :key="index" @tap="toCopy" :data-url="item.url">
					<view class="content">
						<text :class="['cuIcon-'+item.icon,'text-'+item.color]"></text>
						<text class="text-grey">{{item.title}}</text>
					</view>
				</view>
				<view class="cu-item arrow" @tap="toNote">
					<view class="content">
						<text class="cuIcon-formfill text-green"></text>
						<text class="text-grey">日志</text>
					</view>
				</view>
				<view class="cu-item arrow" @tap="callAuthor">
					<view class="content">
						<text class="cuIcon-messagefill text-blue"></text>
						<text class="text-grey">联系开发者</text>
					</view>
				</view>
			    <view class="cu-item arrow" @tap="toExplain">
			    	<view class="content">
			    		<image src="../../static/logo.jpg" class="png" mode="aspectFit"></image>
			    		<text class="text-grey">展厅使用相关组件库及插件说明</text>
			    	</view>
			    </view>
			</view>
		</view>
	</view>
</template>

<script>
    var _self,loginRes;
	export default {
		data() {
			return {
				alfList:[
					{
						title: 'Article',
						num: '1w',
						color: 'green',
						icon: 'tagfill'
					},
					{
						title: 'life',
						num: '1w',
						color: 'blue',
						icon: 'formfill'
					},
					{
						title: 'film',
						num: '1w',
						color: 'red',
						icon: 'recordfill'
					}
				],
				copys:[
					{
						url: 'https://github.com/chen-cache',
						title: 'github',
						icon: 'github',
						color: 'black'
					},
					{
						url: 'https://gitee.com/chenpeak',
						title: '码云',
						icon: 'writefill',
						color: 'red'
					}
				]
			}
		},
		onLoad:function(){
			// _self = this;
			// loginRes = this.checkLogin('../order/home','2');
			// if(!loginRes){return false;}
			// console.log(JSON.stringify(loginRes));
		},
		
		methods: {
			toCopy(e){
				let _data = e.currentTarget.dataset.url;
				uni.setClipboardData({
					data: _data+'',
					success: function () {
					   console.log('成功');
					}
				})
			},
			toExplain(){
				uni.navigateTo({
					url:'../order/explain'
				})
			},
			toNote(){
				uni.showModal({
					title:'插件主最近忙，后面再更新'
				})
				// uni.navigateTo({
				// 	url:'../order/note'
				// })
			},
			callAuthor(e){
				let _self = this;
				console.log(_self.staticServer+'displaywx.jpg');
				uni.previewImage({ 
				    urls: [_self.staticServer+'displaywx.jpg']
				});
			}
		}
	}
</script>

<style>
	/* page{background-color: #FFFFFF;} */
</style>
