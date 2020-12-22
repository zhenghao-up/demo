<template>
	<view @touchmove.stop.prevent="moveHandle">
		<view  class="serviceDialog" @click="close">
			
		</view>
		<view class="serviceBox">
			<view class="service-top">
				<view class="serviceTitle">
					服务说明
				</view>
				<view class="close" @click="close">
					<i class="iconfont">&#xe62b;</i>
				</view>
			</view>
			<scroll-view class="service-content" scroll-y="true">
				<view class="service-item">
					<view class="service-item-title">
						<i class="iconfont">&#xe8af;</i>
						花呗分期
					</view>
					<view class="service-item-txt">
						花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。                                            
					</view>
				</view>
				<view class="service-item">
					<view class="service-item-title">
						<i class="iconfont">&#xe601;</i>
						顺丰包邮
					</view>
					<view class="service-item-txt">
						花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。                                            
					</view>
				</view>
				<view class="service-item">
					<view class="service-item-title">
						<i class="iconfont">&#xe600;</i>
						七天无理由退换货
					</view>
					<view class="service-item-txt">
						花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。                                            
					</view>
				</view>
				
			</scroll-view>
			<view class="service-bottom" @click="close">
				确定
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		methods:{
			moveHandle(){
				
			},
			close(){
				
				this.$emit('close')
			}
		}
	}
</script>

<style scoped>
	.serviceDialog{position: fixed;top:0;right:0;bottom:0;left: 0;background: rgba(0,0,0,0.5);z-index: 10;
	display: flex;align-items: flex-end;}
	.serviceBox{height: 1070rpx;background: #fff;position: fixed;bottom:0;width: 100%;z-index: 11;}
	.serviceTitle{height: 90rpx;font-size: 32rpx;text-align: center;line-height: 90rpx;}
	.close{position: absolute;top:0;width: 90rpx;width:90rpx;text-align: center;right: 0;
	line-height: 90rpx;}
	.service-content{position: absolute;top: 100rpx;bottom:100rpx;left:0rpx;right:0rpx;}
	.service-item{border-bottom: 1rpx solid #e5e5e5;margin: 0 20rpx;padding:10rpx 0 30rpx;}
	.service-item-title{line-height: 62rpx;font-size: 28rpx;}
	.service-item-title i{font-weight: normal;color: #00C3F5;margin-right: 10rpx;float:left;}
	.service-item-txt{font-size: 24rpx;color: #999;padding-left:30rpx;line-height: 34rpx;}
	.service-bottom{height:90rpx ;background: #00C3F5;color: #fff;position: absolute;bottom:0;
	font-size: 28rpx;text-align: center;line-height: 90rpx;width: 100%;}
</style>
