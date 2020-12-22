<template>
	<view class="itemlist">
		<view class="buy-shop-info">
			<image src="/static/image/dimg1.jpg" mode=""></image>
			<view class="shop-info-text">
				<view class="shop-title">
					苹果（Apple）ipad2019新款第7代10.2英寸2018款9.7英寸air2更新版平板电脑 金色 19款10.2英寸 32G WLAN版-标配
				</view>
				<view class="shop-attr">appad,黑色</view>
				<view class="shop-price-num">
					<text class="price">￥299.00</text>
					<text class="num">×1</text>
				</view>
			</view>
		</view>
		<view class="buy-shop-info">
			<image src="/static/image/dimg1.jpg" mode=""></image>
			<view class="shop-info-text">
				<view class="shop-title">
					苹果（Apple）ipad2019新款第7代10.2英寸2018款9.7英寸air2更新版平板电脑 金色 19款10.2英寸 32G WLAN版-标配
				</view>
				<view class="shop-attr">appad,黑色</view>
				<view class="shop-price-num">
					<text class="price">￥299.00</text>
					<text class="num">×1</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
</script>

<style scoped>
	.itemlist .buy-shop-info{border-top:1rpx solid #e5e5e5;}
	.itemlist .buy-shop-info:nth-of-type(1){border-top:none;}
	.buy-shop-info{display: flex;padding:10rpx 0rpx;margin:0 20rpx;background: #fff;}
		.buy-shop-info image{width: 200rpx;height: 200rpx;margin-right:10rpx;}
		.shop-info-text{flex: 1;}
		.shop-title{font-size: 28rpx;overflow: hidden; 
	 text-overflow: ellipsis;
	 display: -webkit-box;color: #333;
	 -webkit-line-clamp: 2; 
	 -webkit-box-orient: vertical;}
	 .shop-attr{font-size: 24rpx;color: #999;line-height: 40rpx;}
	 .shop-price-num{height: 40rpx;font-size: 28rpx;margin-top:10rpx;display: flex;justify-content: space-between;
	 margin-top:20rpx;}
	.shop-price-num .price{color: red;}
	.shop-price-num .num{color: #999;}
</style>
