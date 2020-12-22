<template>
	<view class="MyTitle">
		<text><slot></slot></text>
		<view class="split" :style="{background: color}"></view>
	</view>
</template>

<script>
	export default{
		props:['color']
	}
</script>

<style>
	.MyTitle{height: 180rpx;}
	.MyTitle text{height: 88rpx;line-height: 88rpx;font-weight: bold;font-size: 36rpx;
	padding-top:57rpx;display: block;text-align: center;}
	.split{height: 6rpx;width: 45rpx;margin:0 auto;}
</style>
