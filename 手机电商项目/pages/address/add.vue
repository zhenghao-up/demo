<template>
	<view class="addBg ">
		
		<view class="add-item">
			<view class="add-item-left">收货人:</view>
			<view class="add-item-right">
				<input type="text" placeholder="收货人姓名">
				<view class="sex-box">
					<view class="sexitem">先生</view>
					<view class="sexitem">女士</view>
				</view>
			</view>
		</view>
		<view class="add-item">
			<view class="add-item-left">电话号码:</view>
			<view class="add-item-right">
				<input type="text" placeholder="收货人联系电话">
			</view>
		</view>
		<view class="add-item">
			<view class="add-item-left">收货地址:</view>
			<view class="add-item-right">
				<view  @click="showMulLinkageThreePicker">{{pickerText}}</view>
			</view>
		</view>
		<view class="add-item" style="border:none">
			
			<view class="add-item-right">
				<textarea placeholder="请输入详细地址"></textarea>
			</view>
		</view>
		
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		 
		<view class="save-btn">
			保存收货地址
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "../../components/mpvue-citypicker/mpvueCityPicker.vue"
	export default{
		data(){
			return{
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#0BBBEF',
				pickerText:'请选择收货地址'
			}
			
		},
		components:{
			mpvueCityPicker
		},
		methods:{
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText=e.label
			},
			onCancel(e) {
				console.log(e)
			},
		}
	}
</script>

<style scoped>
	.addBg{height: 100vh;background: #fff;}
	.add-item{margin:0 30rpx;display: flex;border-bottom: 1rpx solid #e5e5e5;}
	.add-item-left{font-size: 28rpx;width: 140rpx;line-height: 90rpx;}
	.add-item-right{flex:1;line-height:90rpx;color: #999;font-size: 28rpx;}
	.add-item-right input{font-size: 28rpx;width: 100%;border-bottom:1rpx solid #e5e5e5;
	height: 90rpx;}
	
	.add-item-right .sex-box{height: 90rpx;font-size: 28rpx;}
	.save-btn{height: 80rpx;width: 600rpx;background: #0BBBEF;color: #fff;
	text-align: center;font-size: 28rpx;font-weight: bold;line-height: 80rpx;
	margin:50rpx auto;border-radius: 80rpx;box-shadow: 0 0 5rpx #ccc;}
	.add-item-right textarea{padding:10rpx;font-size: 28rpx;color: #999;width: 100%;
	height: 200rpx;}
	.sex-box{display: flex;align-items: center;}
	.sex-box .sexitem{height: 40rpx;padding:0 10rpx;border:1rpx solid #999;line-height: 40rpx;
	margin-right:10rpx;color: #999;box-sizing: border-box;}
</style>
