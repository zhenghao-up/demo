<template>
	<view  class="searchBg">
		<view class="search">
			<view class="searchTxt-box">
				<input type="text" placeholder="请输入搜索的商品名称" 
				v-model="Txt" 
				class="searchTxt">
			</view>
			<input type="button" class="searchBtn"
			v-model="btnTxt" 
			/>
		</view>
		<view class="hot-search">
			<view class="search-title">
				热门搜索
			</view>
			<view class="hot-list">
				<view class="hot-item" v-for="(item,index) in hot" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="history-search">
			<view class="search-title">
				历史搜索
			</view>
			<view class="history-list">
				<view class="hot-item" v-for="(item,index) in hot" :key="index">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				btnTxt:"取消",
				Txt:'',
				hot:["茶叶", "铁观音", "龙井茶", "大红袍", "乌龙茶", "红茶", "金骏眉", "正山小种", "肉桂"]
			}
		},
		watch:{
			Txt(val){
				if(val==''){
					this.btnTxt='取消'
				}else{
					this.btnTxt='搜索'
				}
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.searchBg{height:100vh;background: #fff}
	.search{height: 90rpx;display: flex;margin:0 30rpx;align-items: center;}
	.searchTxt-box{flex: 1;font-size: 28rpx;background: #f5f5f5;height: 60rpx;
	border-radius: 60rpx;line-height: 60rpx;}
	.searchTxt{margin-left:30rpx}
	.searchBtn{width: 80rpx;font-size: 28rpx;text-align: center;}
	.hot-search{border-top:1rpx solid #e5e5e5;padding:0 30rpx 10rpx;
	border-bottom: 10rpx solid #f5f5f5;height: auto;overflow: hidden;
	}
	.search-title{height: 90rpx;font-size: 28rpx;font-weight: bold;
	line-height: 90rpx;}
	.hot-item{font-size: 28rpx;height: 48rpx;border:1rpx solid #e5e5e5;float:left;color: #666;
	padding:0 10rpx;line-height: 48rpx;margin-right: 10rpx;margin-bottom: 15rpx;}
	.history-search{padding:0 30rpx 10rpx;
	height: auto;overflow: hidden;
	}
</style>
