<template>
	<view class="address-list whiteBg">
		<navigator url="../buy/buy?address=5" v-if="type==1">
		<view class="address-item">
			<view class="address-radio">
				<radio value="" color="#00C3F5"/>
			</view>
			<view class="address-box">
				<view class="address-user">
					英特网络 18066666666
				</view>
				<view class="address-info">
					福建省厦门市湖里区禾山街道市服务中心
				</view>
			</view>
			<view class="address-edit">
				<i class="iconfont">&#xe682;</i>
			</view>
		</view>
		</navigator>
		<navigator url="add" v-else>
		<view class="address-item">
			<view class="address-radio">
				<radio value="" color="#00C3F5"/>
			</view>
			<view class="address-box">
				<view class="address-user">
					英特网络 18066666666
				</view>
				<view class="address-info">
					福建省厦门市湖里区禾山街道市服务中心
				</view>
			</view>
			<view class="address-edit">
				<i class="iconfont">&#xe682;</i>
			</view>
		</view>
		</navigator>
		<view style="height: 90rpx;"></view>
		<view class="add-address">
			<navigator url="add">添加新地址</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type:0
			}
		},
		onLoad(e) {
			this.type=e.type;
		},
		
	}
</script>

<style>

	.address-item{padding:30rpx 30rpx 30rpx;display: flex;}
	.address-list{height: 100%}
	.address-radio {display:flex;align-items: center;}
	.address-radio radio{transform: scale(0.7)}
	.address-box{flex: 1;}
	.address-edit {width: 100rpx;display: flex;align-items: center;justify-content: center;}
	.address-edit i{font-style: normal;color: #999;font-size: 28rpx;}
	.address-user{font-size: 28rpx;}
	.address-info{font-size: 24rpx;color: #999;}
	.add-address{height: 90rpx;position: fixed;bottom:0;width: 100%;
	text-align: center;color: #fff;background: #0bbbef;font-size: 28rpx;line-height: 90rpx;
	}
</style>
