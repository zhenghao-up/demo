<template>
	<view>
		<view class="order-tab">
			<view class="order-item active-order">
				全部订单
			</view>
			<view class="order-item">
				待付款
			</view>
			<view class="order-item">
				待收货
			</view>
			<view class="order-item">
				待评价
			</view>
		</view>
		<view class="order-list">
			<navigator url="detail" >
			<view class="order-title">
				<view class="order-title-time">
					订单日期:2019-10-29
				</view>
				<view class="order-title-status">
					卖家已支付
				</view>
			</view>
			<shopItem class="borderTop"></shopItem>
			
			<view class="order-total">
				共2件商品&nbsp;&nbsp;&nbsp;合计：<text>¥ 79.00</text>（运费¥ 10.00）    
			</view>
			</navigator>
		</view>
		<view class="order-list">
			<navigator url="detail" >
			<view class="order-title">
				<view class="order-title-time">
					订单日期:2019-10-29
				</view>
				<view class="order-title-status">
					卖家已支付
				</view>
			</view>
			<shopItem class="borderTop"></shopItem>
			<view class="order-total">
				共2件商品&nbsp;&nbsp;&nbsp;合计：<text>¥ 79.00</text>（运费¥ 10.00）    
			</view>
			</navigator>
		</view>
		<view class="order-list">
			<navigator url="detail" >
			<view class="order-title">
				<view class="order-title-time">
					订单日期:2019-10-29
				</view>
				<view class="order-title-status">
					卖家已支付
				</view>
			</view>
			<shopItem class="borderTop"></shopItem>
			<view class="order-total">
				共2件商品&nbsp;&nbsp;&nbsp;合计：<text>¥ 79.00</text>（运费¥ 10.00）    
			</view>
			</navigator>
		</view>
		<view class="order-list">
			<navigator url="detail" >
			<view class="order-title">
				<view class="order-title-time">
					订单日期:2019-10-29
				</view>
				<view class="order-title-status">
					卖家已支付
				</view>
			</view>
			<shopItem class="borderTop"></shopItem>
			<view class="order-total">
				共2件商品&nbsp;&nbsp;&nbsp;合计：<text>¥ 79.00</text>（运费¥ 10.00）    
			</view>
			</navigator>
		</view>
		</view>
</template>

<script>
	import shopItem from '../../components/shopItem.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			shopItem
		},
		methods: {
			
		}
	}
</script>

<style>
.order-tab{display: flex;background: #fff;height: 80rpx;line-height: 80rpx;font-size: 28rpx;color: #999;}
.order-item{width: 25%;text-align: center;}
.active-order{color: #00C3F5;font-weight: bold;}
.order-list{background: #fff;margin-top:10rpx;font-size: 28rpx;margin:10rpx 0rpx 0;}
.order-title{height: 80rpx;display: flex;padding:0 30rpx;align-items: center;justify-content: space-between;
border-bottom:1rpx solid #e5e5e5
}
.order-title-time{color: #999;}
.order-title-status{color: #00C3F5;}
.order-total{line-height: 80rpx;height: 80rpx;font-size: 28rpx;border-top:1rpx solid #e5e5e5;text-align: right;padding-right:30rpx;
color: #666;}
.order-total text{color: #00C3F5;}

</style>
