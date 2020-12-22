<template>
	<view>
		
		<navigator url="../address/index?type=1">
			<myAddress></myAddress> 
		</navigator>
		<view class="order-list">
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
					
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
					              
					<i class="iconfont">&#xe60b;</i>
				</view>
			</view>
			
			<view class="buy-shop-item">
				<input type="text" value=""  placeholder="请留言"/>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left">总计</view>
				<view class="shop-item-right">共1件商品 合计:￥19.00.00</view>
			</view>
		</view>	
		<view class="buy-shop-type">
			<view class="buy-shop-item">
				<view class="shop-item-left"><i class="iconfont" style="color:#10cf1c">&#xe63d;</i>微信支付</view>
				<view class="shop-item-right" @click="changeRadio(0)">
					 <radio :checked="pay==0"  color="#00C3F5" />
				</view>
			</view>
			<view class="buy-shop-item">
				<view class="shop-item-left"><i class="iconfont" style="color:#039fe8">&#xe647;</i>支付宝支付</view>
				<view class="shop-item-right" @click="changeRadio(1)">
					<radio  :checked="pay==1" color="#00C3F5"/>
				</view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="buy-shop-bottom">
			<view class="buy-shop-box">
				<view class="buyTxt">总计:1900.00元</view>
				<view class="buyBtn" @click="payBtn">
					立即购买
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import shopItem from '../../components/shopItem.vue'
	import myAddress from '../../components/MyAddress.vue'
	export default {
		data() {
			return {
				array: ['请选择快递', '顺丰快递', '申通快递', '圆通快递'],
				index: 0,
				pay:0,//0表示微信支付，1表示支付宝支付
				providerList:[],
				back:0
			}
		},
	
		components:{
			shopItem,myAddress
		},
		onLoad(data) {
			 this.back=data.address
			// #ifdef APP-PLUS
			uni.getProvider({
			    service: "payment",
			    success: (e) => {
			        console.log("payment success:" + JSON.stringify(e));
			        let providerList = [];
			        e.provider.map((value) => {
			            switch (value) {
			                case 'alipay':
			                    providerList.push({
			                        name: '支付宝',
			                        id: value,
			                    });
			                    break;
			                case 'wxpay':
			                    providerList.push({
			                        name: '微信',
			                        id: value,
			                    });
			                    break;
			                default:
			                    break;
			            }
			        })
			        this.providerList = providerList;
			    },
			    fail: (e) => {
			        console.log("获取支付通道失败：", e);
			    }
			});
			// #endif	
		},
		methods: {
			backBtn(){
				console.log(this.back)
				if(!this.back){
					uni.navigateBack()
				}else{
					uni.navigateBack({
						delta:3
					})
				}
			},
			payBtn(){
				this.requestPayment(this.providerList[this.pay])
			},
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			 },
			//支付宝支付
			async requestPayment(e) {
			  
			    let orderInfo = await this.getOrderInfo(e.id);
			    console.log("得到订单信息", orderInfo);
			    if (orderInfo.statusCode !== 200) {
			        console.log("获得订单信息失败", orderInfo);
			        uni.showModal({
			            content: "获得订单信息失败",
			            showCancel: false
			        })
			        return;
			    }
			    uni.requestPayment({
			        provider: e.id,
			        orderInfo: orderInfo.data,
			        success: (e) => {
			            console.log("success", e);
			            uni.showToast({
			                title: "感谢您的赞助!"
			            })
			        },
			        fail: (e) => {
			            console.log("fail", e);
			            uni.showModal({
			                content: "支付失败,原因为: " + e.errMsg,
			                showCancel: false
			            })
			        },
			        
			    })
			},
			getOrderInfo(e) {
			    let appid = "";
			    // #ifdef APP-PLUS
			    appid = plus.runtime.appid;
			    // #endif
			    let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=1' ;
			    return new Promise((res) => {
			        uni.request({
			            url: url,
			            success: (result) => {
			                res(result);
			            },
			            fail: (e) => {
			                res(e);
			            }
			        })
			    })
			},
			

			changeRadio(index){
				this.pay=index
			}
		}
	}
</script>

<style scoped>
	.order-list{background: #fff;border-radius: 10rpx;margin:20rpx 30rpx 0;overflow: hidden;}
	/* 支付按钮 */
	.buy-shop-bottom{height: 100rpx;background: #fff;position: fixed;bottom:0;width:100%;
	}
	.buy-shop-box{display: flex;justify-content: space-between;align-items: center;}
	.buyBtn{width: 300rpx;background: #00C3F5;height: 100rpx;color: #fff;font-size: 28rpx;text-align: center;line-height: 100rpx;}
	.buyTxt{font-size: 28rpx;margin-left:30rpx;}
	/* 支付列表 */
	.buy-shop-type{background: #fff;margin:20rpx 30rpx 0;border-radius: 10rpx;}
	.shop-item-left i{font-size: 32rpx;margin-right: 20rpx;float:left;}
	/* 列表信息 */
	.buy-shop-list{background: #fff;margin:20rpx 30rpx 0;border-radius: 10rpx;}
	.buy-shop-item{display: flex;justify-content: space-between;min-height: 80rpx;font-size: 24rpx;
	margin:0 20rpx;align-items: center;}
	.shop-item-left{color: #333;display: flex;align-items: center;}
	.shop-item-right{color: #999;display: flex;align-items: center;}
	.shop-item-right i{font-size: 16px;paddint-top:2px;}
	.shop-item-right radio{transform:scale(0.7)}
	
	.buy-shop-item input{width: 100%;background: #f4f4f4;height: 70rpx;border-radius: 70rpx;font-size: 24rpx;
	text-indent: 30rpx;}
	/* 商品信息 */
	
/* 地址样式 */
.buy-address{margin:30rpx 30rpx 0;background: #fff;height: 198rpx;border-radius: 10rpx;
overflow: hidden;
}
.buy-address-content{height: 190rpx;display: flex;}
.buy-address-txt{flex:1;}
.buy-address-txt .user{font-size: 28rpx;line-height: 50rpx;margin-top:20rpx;margin-bottom:10rpx;}
.buy-address-txt .address{font-size: 24rpx;color: #999;line-height: 35rpx;}
.buy-address-item{width: 100rpx;text-align: center;}
.buy-address-item.moreicon{display: flex;align-items: center;justify-content: center;}
.buy-address-item.addressicon{margin-top:25rpx;color: #999;}

.buy-address-line{height: 8rpx;
background-image: linear-gradient(135deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
    background-color: #fff;
    background-size: 68px 8rpx;
}
</style>
