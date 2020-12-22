<template>
	<view class="buy-address">
		<view class="buy-address-content">
			<view class="buy-address-item addressicon">
				<i class="iconfont">&#xe622;</i>
			</view>
			<view class="buy-address-txt">
				<view class="user">收货人:英特网络（18055555555）</view>
				<view class="address">福建省厦门市湖里区禾山街道什么路第几号禾山街道什么路第几号</view>
			</view>
			<view class="buy-address-item moreicon">
				<i class="iconfont">&#xe60b;</i>
			</view>
		</view>
		<view class="buy-address-line"></view>
	</view>   
</template>

<script>
</script>

<style>
	/* 地址样式 */
	.buy-address{margin:0rpx 0rpx 0;background: #fff;height: 198rpx;border-radius: 10rpx;
	overflow: hidden;
	}
	.buy-address-content{height: 190rpx;display: flex;}
	.buy-address-txt{flex:1;}
	.buy-address-txt .user{font-size: 28rpx;line-height: 50rpx;margin-top:20rpx;margin-bottom:10rpx;}
	.buy-address-txt .address{font-size: 24rpx;color: #999;line-height: 35rpx;}
	.buy-address-item{width: 100rpx;text-align: center;}
	.buy-address-item.moreicon{display: flex;align-items: center;justify-content: center;}
	.buy-address-item.addressicon{margin-top:25rpx;color: #999;}
	
	.buy-address-line{height: 8rpx;
	background-image: linear-gradient(135deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
	    background-color: #fff;
	    background-size: 68px 8rpx;
	}
</style>
