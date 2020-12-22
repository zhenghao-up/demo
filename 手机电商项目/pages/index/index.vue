<template>
	<view class="content">
		
		<MyHeader :content="indexData.menu"></MyHeader>
		<MySwiper :content="indexData.banner"></MySwiper>
		<view class="notice">
			<view class="noticeItem">
				<image src="../../static/image/icon1.png" mode=""></image>
				魅族官方直供
			</view>
			<view class="noticeItem">
				<image src="../../static/image/icon2.png" mode=""></image>
				满80免运费
			</view>
			<view class="noticeItem">
				<image src="../../static/image/icon3.png" mode=""></image>
				7 天无理由退货
			</view>
		</view>
		<view class="recommend">
			<view class="recommendItem">
				<image src="../../static/image/recommend1.png" mode=""></image>
				<text>魅族 16s Pro</text>
			</view>
			<view class="recommendItem">
				<image src="../../static/image/recommend2.png" mode=""></image>
				<text>魅族 16s</text>
			</view>
			<view class="recommendItem">
				<image src="../../static/image/recommend3.jpg" mode=""></image>
				<text>魅族 Note9</text>
			</view>
			<view class="recommendItem">
				<image src="../../static/image/recommend4.jpg" mode=""></image>
				<text>以旧换新</text>
			</view>
		</view>
		<view class="adBox">
			<view class="adLeft">
				<image src="../../static/image/ad1.jpg" mode=""></image>
			</view>
			<view class="adRight">
				<image src="../../static/image/ad2.jpg" mode=""></image>
				<image src="../../static/image/ad3.png" mode=""></image>
			</view>
		</view>
		<view class="cateOne">
			<MyTitle color="#0bbbef">智能手机</MyTitle>
			<image class="cate1Ad" src="../../static/image/cate1Ad.jpg" mode=""></image>
			<view class="product">
				<view class="productItem">
					<navigator url="../detail/detail">
					<image src="../../static/image/p1.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
					</navigator>
				</view>
				<view class="productItem">
					<navigator url="../detail/detail">
					<image src="../../static/image/p2.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
					</navigator>
				</view>
				<view class="productItem">
					<navigator url="../detail/detail">
					<image src="../../static/image/p3.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
					</navigator>
				</view>
				<view class="productItem">
					<navigator url="../detail/detail">
					<image src="../../static/image/p4.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
					</navigator>
				</view>
				
				
				
			</view>
		</view>
		<view class="cateTwo">
			<MyTitle color="#0bbbef">魅族声乐</MyTitle>
			<view class="cateRecommend">
				<view class="cateRecommendItem">
					<image src="../../static/image/cateRecommend1.jpg" mode=""></image>
					<view style="background: #7063c9;">
						<text class="title">MEIZU UR 高端定制耳机  预约</text>
						<text class="goodinfo">预约专用私人定制，为你而声预约专用私人定制</text>
						<label class="linsplit"></label>
						<text class="goodprice">￥200</text>
					</view>
				</view>
				<view class="cateRecommendItem">
					<view style="background: #f55c5c;">
						<text class="title">MEIZU UR 高端定制耳机  预约</text>
						<text class="goodinfo">预约专用私人定制，为你而声</text>
						<label class="linsplit"></label>
						<text class="goodprice">￥200</text>
					</view>
					<image src="../../static/image/cateRecommend2.jpg" mode=""></image>
				</view>
			</view>
			
			<view class="product">
				<view class="productItem">
					<navigator url="../detail/detail">
					<image src="../../static/image/p5.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
					</navigator>
				</view>
				<view class="productItem">
					<image src="../../static/image/p6.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
				</view>
				<view class="productItem">
					<image src="../../static/image/p7.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
				</view>
				<view class="productItem">
					<image src="../../static/image/p8.png" mode=""></image>
					<text class="productName">魅族 16s Pro</text>
					<view class="productDetail">
						<view class="mark">免息</view>
						<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
					</view>
					<view class="productPrice">
						<text>￥</text>2699
					</view>
				</view>
				
				
			</view>
		</view>
		<view class="cateThree">
				<MyTitle color="#0bbbef">智能配件</MyTitle>
				<view class="cateRecommend">
					<view class="cateRecommendItem">
						<image src="../../static/image/cateRecommend3.jpg" mode=""></image>
						<view style="background: #7063c9;">
							<text class="title">MEIZU UR 高端定制耳机  预约</text>
							<text class="goodinfo">预约专用私人定制，为你而声预约专用私人定制</text>
							<label class="linsplit"></label>
							<text class="goodprice">￥200</text>
						</view>
					</view>
					<view class="cateRecommendItem">
						<view style="background: #f55c5c;">
							<text class="title">MEIZU UR 高端定制耳机  预约</text>
							<text class="goodinfo">预约专用私人定制，为你而声</text>
							<label class="linsplit"></label>
							<text class="goodprice">￥200</text>
						</view>
						<image src="../../static/image/cateRecommend4.jpg" mode=""></image>
					</view>
				</view>
				
				<view class="product">
					<view class="productItem">
						<image src="../../static/image/p9.png" mode=""></image>
						<text class="productName">魅族 16s Pro</text>
						<view class="productDetail">
							<view class="mark">免息</view>
							<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
						</view>
						<view class="productPrice">
							<text>￥</text>2699
						</view>
					</view>
					<view class="productItem">
						<image src="../../static/image/p10.png" mode=""></image>
						<text class="productName">魅族 16s Pro</text>
						<view class="productDetail">
							<view class="mark">免息</view>
							<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
						</view>
						<view class="productPrice">
							<text>￥</text>2699
						</view>
					</view>
					<view class="productItem">
						<image src="../../static/image/p11.png" mode=""></image>
						<text class="productName">魅族 16s Pro</text>
						<view class="productDetail">
							<view class="mark">免息</view>
							<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
						</view>
						<view class="productPrice">
							<text>￥</text>2699
						</view>
					</view>
					<view class="productItem">
						<image src="../../static/image/p12.png" mode=""></image>
						<text class="productName">魅族 16s Pro</text>
						<view class="productDetail">
							<view class="mark">免息</view>
							<view class="detailInfo">4800W AI三摄 屏幕下指纹</view>
						</view>
						<view class="productPrice">
							<text>￥</text>2699
						</view>
					</view>
					
					
				</view>
			</view>
		
	</view>	
</template>

<script>
	import MyHeader from '@/components/MyHeader.vue'
	import MyTitle from '@/components/MyTitle.vue'
	import MySwiper from '@/components/MySwiper.vue'
	import indexData from "@/data/index.js"
	export default {
		data() {
			return {
				indexData:indexData
			}
		},
		components:{
			MyTitle,MySwiper,MyHeader
		},
		onLoad() {
			console.log(indexData)
		},
		created() {
			
		},
		methods: {

		}
	}
</script>

<style>
	
	.notice{height: 70rpx;background: #f7f7f7;display: flex;justify-content: center;}
	.notice .noticeItem{font-size:24rpx;display: flex;align-items: center;margin:0 20rpx;color: #999;}
	.notice .noticeItem image{width: 36rpx;height: 36rpx;margin-right:10rpx;}
	.recommend{display: flex;background: #fff;
	justify-content: center;padding-top:30rpx;padding-bottom:10rpx;}
	.recommend .recommendItem{width: 165rpx;text-align: center;}
	.recommend .recommendItem image{width: 100rpx;height: 100rpx;}
	.recommend .recommendItem text{display: block;font-size: 24rpx;line-height: 70rpx;}
	.adBox{display: flex;margin-top:20rpx;height: auto;overflow: hidden;}
	.adBox .adLeft{width: 375rpx;height: 520rpx;}
	.adBox .adLeft image{width: 375rpx;height: 520rpx;}
	.adBox .adRight image{width: 375rpx;height: 260rpx;display: block;}
	.cate1Ad{height: 344rpx;width: 100%;display: block;}
	
	.product{display: flex;justify-content: space-between;flex-wrap: wrap;}
	.productItem{background: #fff;width: 370rpx;height: 560rpx;overflow: hidden;margin-top:10rpx}
	.productItem image{height: 316rpx;width: 316rpx;margin:44rpx auto 0;display: block;} 
	.productName{line-height: 57rpx;display: block;font-size: 28rpx;width: 100%;display: block;text-align: center;}
	.productDetail{display:flex;align-items:center;width: 346rpx;height: 40rpx;background: #cc0000;margin:10rpx auto;}
	.productDetail .mark{width: 70rpx;line-height: 40rpx;font-size: 24rpx;color: #fff;text-align: center;}
	.productDetail .detailInfo{width: 275rpx;font-size: 24rpx;text-indent: 10rpx;color: #cc0000;
	background: #fff;height: 37rpx;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.productPrice{line-height: 60rpx;text-align: center;font-size: 28rpx;color: #c00;}
	.productPrice text{font-size: 24rpx;}
	
	.cateRecommend{}
	.cateRecommendItem{display: flex;}
	.cateRecommendItem image{width: 375rpx;height: 330rpx;}
	.cateRecommendItem view{width: 375rpx;height: 330rpx;color: #fff;}
	.cateRecommendItem view .title{font-size: 30rpx;padding-left:30rpx;
	display: block;line-height: 48rpx;padding-top:30rpx;width: 220rpx;}
	.cateRecommendItem view .goodinfo{font-size: 22rpx;display: block;    color: hsla(0,0%,100%,.7);
	margin-left:30rpx;width: 315rpx;margin-top:15rpx;line-height: 30rpx;}
	.linsplit{height: 5rpx;width: 35rpx;background: #fff;display: block;margin:20rpx 0 20rpx 30rpx}
	.goodprice{font-size: 34rpx;margin-left:30rpx;    color: hsla(0,0%,100%,.7);}
</style>
