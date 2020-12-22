<template>
	<swiper class="swiper" 
	indicator-color="rgba(255,255,255,0.5)"	
	indicator-active-color="rgba(255,255,255,1)"
	:indicator-dots="true" :autoplay="true" 
	:interval="3000" :duration="500">

		<swiper-item v-for="(item,index) in content" :key="index">
			<view class="swiper-item" >
				<image :src="item.image" mode=""></image>
			</view>
		</swiper-item>
		
	</swiper>
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style>
	.swiper{height: 388rpx;}
	.swiper-item image{height: 388rpx;width: 100%;}
</style>
