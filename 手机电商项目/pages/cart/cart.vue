<template>
	<view class="cart">
		<image src="../../static/image/cartEmpty.png" mode="" class="cart-empty"></image>
		<view class="cart-text">亲,你需要登录才能查看购物车哦~</view>
		<navigator url="../login/login" class="login" open-type="switchTab">
			立即登陆
		</navigator>
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
	.cart{}
	.cart-empty{width: 300rpx;height:300rpx;display: block;margin:150rpx auto 0;}
	.cart-text{text-align: center;font-size: 28rpx;color: #999;line-height: 160rpx;}
	.login{width: 315rpx;height: 80rpx;display: block;background: #21bbef;text-align: center;line-height: 80rpx;color: #fff;font-size: 28rpx;margin: 0 auto;}
</style>
