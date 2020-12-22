<template>
	<view class="MyNum">
		<text class="MyNum-title">数量</text>
		<view class="numBox">
			<view class="MyNumBox">
				<text @click="minus">-</text>
				<view>{{num}}</view>
				<text @click="add">+</text>
			</view>
			<view class="stock">(库存:<text>{{stock}}</text>件)</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:1
			}
		},
		created() {
			
		},
		
		watch:{
			changenum(val,old){
				console.log(val,old)
				// 方式一:
				// this.num=1;
				if(this.num>this.stock){
					this.num=this.stock;
				}
			}
		}
		,
		methods:{
			minus(){
				if(this.num==1){
					uni.showToast({
					    title: '数量不能小于1',
						'icon':'none'
					});
					return;
				}
				this.num--
				this.$emit('buynum',this.num)
			},
			add(){
				if(this.num>=this.stock){
					uni.showToast({
					    title: '数量不能大于库存',
						'icon':'none'
					});
					return;
				}
				this.num++
				this.$emit('buynum',this.num)
			}
		},
		props:[
			'stock','changenum'
		]
	}
</script>

<style>
	.MyNum{clear: both;margin: 0 30rpx;}
	.numBox{display: flex;margin-top:14rpx;}
	.stock{line-height: 70rpx;color: #999;font-size: 24rpx;height: 70rpx;margin-left:20rpx;}
	.stock text{padding:0 5rpx;}
	.MyNum-title{font-size: 28rpx;
    color: #999;
   }
	.MyNumBox{display: flex;border:1rpx solid #e5e5e5;width: 240rpx;font-size: 28rpx;}
	.MyNumBox text{width: 70rpx;height: 70rpx;text-align: center;line-height: 70rpx;color: #666;}
	.MyNumBox view{flex: 1;border-left:1rpx solid #e5e5e5;border-right: 1rpx solid #e5e5e5;
	text-align: center;line-height: 70rpx;
	}
</style>
