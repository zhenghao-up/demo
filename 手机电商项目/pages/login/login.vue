<template>
	<view class="login">
		<image src="../../static/image/logo2.png" mode="" class='logo'></image>
		<input type="text" value="" class="inputStyle" placeholder="手机号/用户名" />
		<input type="text" value="" class="inputStyle" placeholder="密码" />
		<input type="text" value="" class="inputStyle" placeholder="密码" />
		<view class="forget">
			<label>
		<image src="../../static/image/uncheck.png" mode=""></image>记住登录状态
		</label>
		<text>忘记密码?</text></view>
		<button type="" class="buttonStyle">登录</button>
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
	.login{position: absolute;top:0;left:0;right:0;bottom:0;background: #fff;}
.inputStyle{height: 96rpx;width: 660rpx;border:1rpx solid #dadada;font-size: 28rpx;
display: block;margin:0 auto;margin-bottom:40rpx;border-radius: 2px;text-indent: 15rpx;}
.inputStyle:focus{border:1rpx solid  #007AFF;}
.logo{width: 390rpx;height: 190rpx;margin:150rpx auto 60rpx;display: block;}
.buttonStyle{width: 660rpx;margin:0 auto;border-radius: 2px;background: #21bbef;
color: #fff;font-size: 28rpx;height: 90rpx;line-height: 90rpx;border:none;}
.forget{display: flex;justify-content: space-between;width: 660rpx;
margin:0 auto 100rpx;font-size: 28rpx;}
.forget text{color: #21bbef;}
.forget label {display: flex;align-items: center;}
.forget label image{width: 32rpx;height:32rpx;margin-right: 10rpx;}
</style>
