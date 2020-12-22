<template>
	<view class="">
		<view class="order-status">
			订单状态:<text>买家已付款</text>
		</view>
		<view class="addressBox">
			<myAddress></myAddress>  
		</view>
		<view class="shoplist">
			<shopItem></shopItem>
		</view>
		<view class="buy-shop-list" style="padding:20rpx 0;">
			<view class="buy-shop-item">
				<view class="shop-item-left">应付金额</view>
				<view class="shop-item-right">19.00</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">配送方式</view>
				<view class="shop-item-right">
					顺丰快递
					
				</view>
			</view>
			<view class="buy-shop-item">
					<input type="text" value=""  placeholder="请留言"/>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">总计</view>
				<view class="shop-item-right">共1件商品 合计:￥19.00.00</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">支付方式</view>
				<view class="shop-item-right">微信支付</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">订单变化</view>
				<view class="shop-item-right">20180925233333</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">支付时间</view>
				<view class="shop-item-right">2019-10-29 10:20:20</view>
			</view>
		</view>	
		
	
	</view>
</template>

<script>
	import myAddress from '../../components/MyAddress.vue'
	import shopItem from '../../components/shopItem.vue'
	export default{
		components:{
			myAddress,shopItem
		}
	}
</script>

<style scoped>
	.order-status{height: 100rpx;background: #fff;font-size: 30rpx;line-height: 100rpx;padding:0 30rpx;
	border-top:1rpx solid #e5e5e5}
	.order-status text{color: #00C3F5;}
	.addressBox{margin-top:20rpx}
	.shoplist{background: #fff;margin-top:20rpx}
	/* 列表信息 */
	.buy-shop-list{background: #fff;border-top:1rpx solid #e5e5e5}
	.buy-shop-item{display: flex;justify-content: space-between;min-height: 80rpx;font-size: 24rpx;
	margin:0 20rpx;align-items: center;}
	.shop-item-left{color: #333;display: flex;align-items: center;}
	.shop-item-right{color: #999;display: flex;align-items: center;}
	.shop-item-right i{font-size: 16px;paddint-top:2px;}
	.shop-item-right radio{transform:scale(0.7)}
	
	.buy-shop-item input{width: 100%;background: #f4f4f4;height: 70rpx;border-radius: 70rpx;font-size: 24rpx;
	text-indent: 30rpx;}
	

</style>
