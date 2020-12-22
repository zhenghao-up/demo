<template>
	<view class="" >
		<view class="bg" @touchmove.stop.prevent="moveHandle" @click="close">
		</view>
		<view class="shopDialog">
			<view class="shopDialog-top" @touchmove.stop.prevent="moveHandle">
				<image src="/static/image/dimg1.jpg" mode=""></image>
				<view class="top-price">￥{{current.price}}</view>
				<view class="top-param">{{attrTxt}}</view>
				<view class="top-close" @click="close">
					<i class="iconfont">&#xe62b;</i>
				</view>
			</view>
			<scroll-view scroll-y="true" class="scroll">
				<view class="shop-param-list" v-for="(item,index) in allAttr" :key="index">
					<view class="shop-param-title">
						{{item.attr}}
					</view>
					<view class="shop-param-box">
						<view class="shop-param-item " v-for="(child,childindex) in item.value" :key="childindex"
						@click="selectAttr" :data-attr="index" :data-child="childindex"
						:class="{activeBtn:childindex==attr[index]}"
						>
						<!-- @click="attr1Tab" :data-text="item" :data-id="index"
						:class="{activeBtn:index==attr[0]}" -->
						{{child}}
						</view>
					</view>
				</view>
				<MyNum :stock="current['stock']" :changenum="changenum" @buynum="buynum"></MyNum>
				
				
				
			</scroll-view>
			<view class="shopDialog-bottom">
				<view class="shopDialog-bottom-item trolley" >
					加入购物车
				</view>
				<view class="shopDialog-bottom-item buy" @click="toBuy">
					立即购买
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import MyNum from './MyNum.vue'
	export default{
		data(){
			return{
				attr:[],
				changenum:0,
				shopnum:1,
				data:[
					{id:1,attr0:'魅族 16S Pro',attr1:'黑色',price:300,productid:1,stock:5},
					{id:2,attr0:'魅族 16th Plus',attr1:'黑色',price:400,productid:1,stock:10},
					{id:3,attr0:'魅族 16S Pro',attr1:'红色',price:500,productid:1,stock:15},
					{id:4,attr0:'魅族 16th Plus',attr1:'红色',price:600,productid:1,stock:20},
					// {id:1,attr0:'魅族 16S Pro',price:300},
					// {id:2,attr0:'魅族 16th Plus',price:400},
					// {id:3,attr0:'魅族 16S Pro',price:500},
					// {id:4,attr0:'魅族 16th Plus',price:600}
				],
				allAttr:[
					{
						attr:'版本',
						value:['魅族 16S Pro','魅族 16th Plus']
					 },
					{
						attr:'颜色',
						value:['黑色','红色']
					}
				],
				current:{},
				attrTxt:''
			}
		},
		components:{
			MyNum
		},
		
		created(){
			
			//初始attr内容
			for(var i=0;i<this.allAttr.length;i++){
				this.attr[i]=0;
			}
			//计算价格
			this.getPrice()
			
		},
		methods:{
			buynum(data){
				this.shopnum=data;
			},
			toBuy(){
				//购买数量
				console.log(this.shopnum)
				//所选的商品
				console.log(this.current)
				uni.navigateTo({
					url:'/pages/buy/buy?num='+this.shopnum+'&attrid='+this.current.id
				})
			},
			selectAttr(e){
				var attr=e.target.dataset.attr;
				var child=e.target.dataset.child
				this.attr.splice(attr,1,child);
				this.getPrice();
				this.$emit('value',{text:this.attrTxt,price:this.current.price})
				this.changenum=Math.random();
			},
			getPrice(){
				var currentVal=[]
				for(var i=0;i<this.attr.length;i++){
					currentVal.push(this.allAttr[i]['value'][this.attr[i]]);
				}
				this.attrTxt=currentVal.toString();
				var num;
				for(var i=0;i<this.data.length;i++){
					if(this.isContained(Object.values(this.data[i]),currentVal)){
						num=i
					}
				}
				this.current=this.data[num];
			},
			close(){
				this.$emit('close')
			},
			isContained(aa,bb){
			    if(!(aa instanceof Array)||!(bb instanceof Array)||((aa.length < bb.length))){
			        return false;
			    }
			    var aaStr = aa.toString();
			    for (var i = 0 ;i < bb.length;i++) {
			        if(aaStr.indexOf(bb[i]) < 0) return false;
			    }
			    return true;
			},
			moveHandle(){
				}
	
			
		}
	}
</script>

<style scoped>
	.shop-param-list{margin:0 30rpx;clear: both;}
	.shop-param-title{font-size: 28rpx;color: #999;margin-bottom: 15rpx;}
	.shop-param-item{height:70rpx ;padding:0 30rpx;border:1rpx solid #e5e5e5;float:left;
	font-size: 24rpx;margin-right:30rpx;margin-bottom: 15rpx;line-height: 70rpx;color: #666;}
	.activeBtn{border:1rpx solid #00C3F5;color: #00C3F5;}
	.bg{position: fixed;bottom:0;left:0;right:0;top:0;background: rgba(0,0,0,0.5);}
	
	.scroll{position: absolute;top:220rpx;bottom:90rpx}
	
	.shopDialog{height: 1070rpx;background: #fff;position: fixed;bottom:0;width: 100%;z-index: 11;}
	.shopDialog-top{height:180rpx;position: relative;border-bottom: 1rpx solid #e5e5e5;}
	.shopDialog-top image{width: 210rpx;height: 210rpx;position: absolute;top:-60rpx;left:30rpx;
	border:1px solid #e5e5e5;box-sizing: border-box;}
	.top-price{font-size: 36rpx;color: #f0415f;margin-left:280rpx;line-height: 50rpx;margin-top:20rpx;}
	.top-price text{font-size: 24rpx;color: #999;text-decoration: line-through;}
	.top-param{font-size: 24rpx;margin-left:280rpx;padding-right: 30rpx;}
	.top-close{position: absolute;top:0;right:30rpx;}
	
	.shopDialog-bottom{position: absolute;bottom:0;height: 90rpx;display: flex;width: 100%;}
	.shopDialog-bottom-item{width: 50%;text-align: center;line-height: 90rpx;height: 90rpx;font-size: 28rpx;color: #fff;}
	.shopDialog-bottom-item.trolley{background: #0BBBEF;}
	.shopDialog-bottom-item.buy{background: #007AFF;}
</style>
