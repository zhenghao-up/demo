<template>
	<view class="whiteBg">
		<view class="member-top">
			<view class="member-set">
				<i class="iconfont">&#xe614;</i>
				<i class="iconfont">&#xe612;</i>
			</view>
			<view class="member-tx">
				<image src="../../static/image/member-tx.png" mode=""></image>
				<view class="member-tx-txt">
					<text>英特网络</text>
					<text>www.intewl.com</text>
				</view>
			</view>
			<view class="ewm">
				<image src="../../static/image/ewm.png" mode=""></image>
			</view>
		</view>
		<view class="member-icon">
			<view class="icon-item">
				<navigator url="../order/order">
				<image src="../../static/image/member-icon1.png" mode=""></image>
				<text>待付款</text>
				</navigator>
			</view>
			<view class="icon-item">
				<navigator url="../order/order">
				<image src="../../static/image/member-icon2.png" mode=""></image>
				<text>待收货</text>
				</navigator>
			</view>
			<view class="icon-item">
				<navigator url="../order/order">
				<image src="../../static/image/member-icon3.png" mode=""></image>
				<text>待评价</text>
				</navigator>
			</view>
			<view class="icon-item">
				<navigator url="../order/order">
				<image src="../../static/image/member-icon4.png" mode=""></image>
				<text>全部订单</text>
				</navigator>
			</view>
		</view>
		<view class="member-menu">
			<navigator url="/pages/address/index">
				<view class="menu-item" style="border:none">
					<image src="../../static/image/member-menu1.png" mode=""></image>
					<text>收货地址</text>
				</view>
			</navigator>
			<view class="menu-item">
				<image src="../../static/image/member-menu2.png" mode=""></image>
				<text>在线客服</text>
			</view>
			<view class="menu-item">
				<image src="../../static/image/member-menu3.png" mode=""></image>
				<text>邀请有礼</text>
			</view>
			<!-- <view class="menu-item">
				<image src="../../static/image/member-menu4.png" mode=""></image>
				<text>优惠券</text>
			</view> -->
			<view class="menu-item">
				<image src="../../static/image/member-menu5.png" mode=""></image>
				<text>关于我们</text>
			</view>
			
		</view>
		
		<view class="member-btn">
			<input type="button" value="退出登录" />
		</view>
		<view style="height: 80px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style> 
	
.member-top{height: 336rpx;background: url(../../static/image/member-top.png) no-repeat ;
background-size: 100% 336rpx;position: relative;}
.member-top i{font-style: normal;color: #fff;float:right;margin-left:30rpx;}
.member-set{margin-right:30rpx;text-align: right;line-height: 80rpx;
padding-top:50rpx;}

.ewm{width: 35rpx;height: 35rpx;}
.ewm image{width: 35rpx;height: 35rpx;position: absolute;top:200rpx;right:30rpx}
.member-tx{position: absolute;left:30rpx;bottom:60rpx;display: flex;}
.member-tx image{width: 110rpx;height: 110rpx;border-radius: 50%;}
.member-tx-txt{padding-top:20rpx;margin-left:20rpx;}
.member-tx-txt text{height: 40rpx;line-height: 40rpx;display: block;font-size: 30rpx;
color: #fff;font-weight: bold;}

.member-icon{display: flex;border-bottom:20rpx solid #f5f5f5;}
.icon-item{width: 25%;padding:20rpx 0 10rpx;}
.icon-item image{width:70rpx;height: 56rpx;display: block;margin:0 auto;}
.icon-item text{line-height: 80rpx;text-align: center;font-size: 28rpx;display: block}

.menu-item{height: 90rpx;display: flex;align-items: center;
margin:0 30rpx;font-size: 28rpx;border-top:1rpx solid #e5e5e5;
background: url(../../static/image/more.png) no-repeat right center;
background-size: 27rpx 27rpx;
}

.menu-item image{width: 35rpx;height: 35rpx;margin-right:25rpx;}

.member-btn{margin:30rpx 30rpx 0rpx ;padding-bottom: 50rpx;}
.member-btn input{border:1rpx solid #e5e5e5;font-size: 30rpx;text-align: center;
line-height: 80rpx;height: 80rpx;}
</style>
