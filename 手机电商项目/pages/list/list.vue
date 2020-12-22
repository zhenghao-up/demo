<template>
	<view>
		<!-- <MyHeader></MyHeader> -->
		<image class="listBanner" src="../../static/image/banner3.jpg" mode=""></image>
		<view class="cateOne">
		<view class="product">
			<view class="productItem">
				<image src="../../static/image/p1.png" mode=""></image>
				<text class="productName">魅族 16s Pro</text>
				<view class="productDetail">
					<view class="mark">免息</view>
					<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
				</view>
				<view class="productPrice">
					<text>￥</text>2699
				</view>
			</view>
			<view class="productItem">
				<image src="../../static/image/p2.png" mode=""></image>
				<text class="productName">魅族 16s Pro</text>
				<view class="productDetail">
					<view class="mark">免息</view>
					<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
				</view>
				<view class="productPrice">
					<text>￥</text>2699
				</view>
			</view>
			<view class="productItem">
				<image src="../../static/image/p3.png" mode=""></image>
				<text class="productName">魅族 16s Pro</text>
				<view class="productDetail">
					<view class="mark">免息</view>
					<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
				</view>
				<view class="productPrice">
					<text>￥</text>2699
				</view>
			</view>
			<view class="productItem">
				<image src="../../static/image/p4.png" mode=""></image>
				<text class="productName">魅族 16s Pro</text>
				<view class="productDetail">
					<view class="mark">免息</view>
					<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
				</view>
				<view class="productPrice">
					<text>￥</text>2699
				</view>
			</view>
			
			
			
		</view>
	</view>
	
	</view>
</template>

<script>
	import MyHeader from '@/components/MyHeader.vue'
	import MyTitle from '@/components/MyTitle.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			MyHeader,MyTitle
		},
		methods: {
			
		}
	}
</script>

<style>
.listBanner{width: 100%;height: 392rpx;}
.product{display: flex;justify-content: space-between;flex-wrap: wrap;}
	.productItem{background: #fff;width: 370rpx;height: 560rpx;overflow: hidden;margin-top:10rpx}
	.productItem image{height: 316rpx;width: 316rpx;margin:44rpx auto 0;display: block;} 
	.productName{line-height: 57rpx;display: block;font-size: 28rpx;width: 100%;display: block;text-align: center;}
	.productDetail{display:flex;align-items:center;width: 346rpx;height: 40rpx;background: #cc0000;margin:10rpx auto;}
	.productDetail .mark{width: 70rpx;line-height: 40rpx;font-size: 24rpx;color: #fff;text-align: center;}
	.productDetail .detailInfo{width: 275rpx;font-size: 24rpx;text-indent: 10rpx;color: #cc0000;
	background: #fff;height: 37rpx;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.productPrice{line-height: 60rpx;text-align: center;font-size: 28rpx;color: #c00;}
	.productPrice text{font-size: 24rpx;}
</style>
