<template>
	<view class="cate">
		<!-- <image src="../../static/image/search2.png" mode=""></image> -->
		<MySearch></MySearch>
		<view class="split">
			
		</view>
		<view class="cateBox">
			<scroll-view class="cate-left" scroll-y="true"
			:scroll-top="verticalNavTop" 
			scroll-with-animation
			>
				<view class="cate-left-list" v-for="(item,index) in data" :key="index" 
				@click="tapselect(index)"
				
				>
					<!-- activeItem为选中状态 -->
					<view class="cate-left-item "
					 :class="{activeItem:currentTab==index}"
					><label></label><text>{{item.navtitle}}</text></view>
				</view>
			</scroll-view>
			<scroll-view class="cate-right" scroll-y="true" 
			@scroll="mainScroll" 
			:scroll-into-view="'cate-'+mainCur"
			scroll-with-animation
			>
				<view v-for="(item,index) in data" :key="index" :id="'cate-'+index">
					<view class="cate-right-title">
						<view class="line"></view>
						<text>{{item.navtitle}}</text>
					</view>
					<view class="cate-right-list">
						<view class="cate-right-item" v-for="(child,childindex) in item.shop" :key="childindex">
							<image :src="child.shopimage" mode=""></image>
							<text>{{child.shoptitle}}</text>
						</view>
					</view>
				</view>
				<view style="height: 50rpx;"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import MySearch from '../../components/MySearch.vue'
	export default {
		data() {
			return {
				currentTab:0,
				mainCur:0,
				verticalNavTop:0,
				list:[{}],
				data:[
					{
						navtitle:'精品推荐1',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码2',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'声学设备3',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'精品推荐4',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码5',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码6',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码7',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码8',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码9',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码10',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码11',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码12',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码13',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码14',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					},
					{
						navtitle:'手机数码15',
						shop:[
							{
								shoptitle:"手机一",
								shopimage:"../../static/image/p1.png",
							},
							{
								shoptitle:"手机二",
								shopimage:"../../static/image/p2.png",
							},
							{
								shoptitle:"手机三",
								shopimage:"../../static/image/p3.png",
							},
							{
								shoptitle:"手机四",
								shopimage:"../../static/image/p4.png",
							}
						]
					}
				]
			}
		},
		components:{
			MySearch
		},
		mounted() {
			this.getHeight();
		},
		methods: {
			//点击左侧按钮
			tapselect(index){
				this.currentTab=index;
				this.mainCur=index;
				this.verticalNavTop = (index - 1) * 50
			},
			//右侧滚动
			mainScroll(e){
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.currentTab=i;
						this.verticalNavTop = (i- 1) * 50
						return false
					}
				}
			},
			//获取右侧每项的top和bottom,里面需获取对应dom元素的高度，所以只能在mounted生命周期里调用
			getHeight(){
				var top=0;
				var bottom=0;
				var temp=0;
				for (let i = 0; i < this.data.length; i++) {
					let view = uni.createSelectorQuery().select("#cate-" + i);
					view.fields({
						size: true
					}, data => {
						top=temp;
						bottom=temp+data.height;
						this.list[i]={top:top,bottom:bottom};
						temp=bottom;
					}).exec();
				}
				
			}
		}
	}
</script>

<style>
.split{background: #f4f4f4;height: 10rpx;}
.cateBox{position: absolute;top:120rpx;bottom:0;background: #fff;width: 100%;display: flex;}
.cate-left{width: 200rpx;background: #f4f4f4;height: 100%;}
.cate-left-item {background: #f4f4f4;height: 50px;display: flex;align-items: center;}
.cate-left-item.activeItem{background: #fff;}
.cate-left-item label{width: 4rpx;height: 15px;float:left;background: #f4f4f4;}
.cate-left-item.activeItem label{background: #0bbbef;}
.cate-left-item text{width: 196rpx;font-size: 28rpx;display: block;text-align: center;}
/* 右侧*/
.cate-right{flex: 1;}
.cate-right-title{text-align: center;font-size: 28rpx;margin-top:20rpx;line-height: 80rpx;position: relative;}
.cate-right-title .line{position: absolute;height: 2rpx;width:300rpx;background: #f4f4f4;top:39rpx;left:50%;margin-left: -150rpx;}
.cate-right-title text{background: #fff;padding:0 10px;position: relative;color: #999;}
.cate-right-list{height: auto;overflow: hidden;}
.cate-right-item{width: 33.33%;float:left;margin-top:20rpx;}
.cate-right-item image{width: 160rpx;height: 160rpx;display: block;margin:0 auto;}
.cate-right-item text{display: block;text-align: center;font-size: 24rpx;}
</style>
