<template name="basics">
	<view>
		<scroll-view scroll-y class="page DrawerPage" :class="modalName=='viewModal'?'show':''">
			<!-- <view class="fixed">
				<cu-custom bgColor="bg-shadeTop text-white">
					<block slot="content">尘世间</block>
				</cu-custom>
			</view> -->
			<swiper class="screen-swiper " :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item class="bg-img bg-mask" v-for="(item,index) in swiperList" :key="index"
				:style="[{backgroundImage: 'url( ' + item.url + ')'}]"
				>
					<view class="padding-xl margin-top-xl  text-white">
						<view class="padding-xs text-xxl text-bold margin-top-xl">
							{{item.header}}
						</view>
						<view class="padding-xs text-lg">
							{{item.letter}}
						</view>
					</view>
				</swiper-item>
			</swiper>
			
			<view class='padding-xs margin text-center'>
			 	<view class='cu-btn bg-cyan lg block shadow radius margin' @tap="showModal" data-target="viewModal">
			 		选择区
			 	</view>
			</view>
			<Latest v-if="PageCur=='latest'?true:false" ></Latest>
			<Article :class="PageCur=='article'?'':'hidden'" ></Article>
			<Life :class="PageCur=='life'?'':'hidden'" ></Life>
			<Film v-if="PageCur=='film'?true:false"></Film>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text style="margin-bottom: calc(100upx + env(safe-area-inset-bottom) / 2);" class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow "
				@tap="toCate" data-title="最新" data-stype="latest"
				>
					<view class="content">
						<text class="cuIcon-github text-grey"></text>
						<text class="text-grey">最新</text>
					</view>
				</view>
				<view class="cu-item arrow" 
				v-for="(item,index) in selectList" :key="index"
				@tap="toCate" :data-title="item.title" :data-stype="item.stype"
				>
					<view class="content">
						<text class="cuIcon-github text-grey"></text>
						<text class="text-grey">{{item.title}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import latest from 'pages/product/latest.vue'
	import article from 'pages/product/article.vue'
	import life from 'pages/product/life.vue'
	import film from 'pages/product/film.vue'
	export default {
		name: "product",
		data() {
			return {
				PageCur: 'latest',
				isCard: false,
				dotStyle: true,
				towerStart: 0,
				direction: '',
				swiperList:[
				     {
				     	id: 0,
				     	type: 'image',
				     	url: '../../static/slide/3.jpg',
						header: '无垠海岛',
						letter: '道的是谁的寂寞？'
				     }, {
				     	id: 1,
				     	type: 'image',
				     	url: '../../static/slide/2.jpg',
						header: '蓝天钟塔',
						letter: '是在感慨天空之阔吗？'
				     }, {
				     	id: 2,
				     	type: 'image',
				     	url: '../../static/slide/1.jpg',
						header: '大地绿席',
						letter: '那是生命的姿态啊！'
				     }
				],
				modalName:null,				
				selectList: [
					{
						id: 1,
						title: '前端',
						stype: 'article'
					},
					{
						id: 7,
						title: '生活',
						stype: 'life'
					},
					{
						id: 2,
						title: 'php',
						stype: 'article'
					},
					{
						id: 3,
						title: 'uniapp',
						stype: 'article'
					},
					{
						id: 5,
						title: '剪辑视频',
						stype: 'film'
					},
					{
						id: 4,
						title: '数据库',
						stype: 'article',
					}
				],
				
			};
		},
		components: {
			    'Latest': latest,
		        'Article': article,
				'Life': life,
				'Film': film
		},
		methods: {
			//获取数据
			toCate(e){
				// console.log(e.currentTarget.dataset.title);
				// console.log(article.data());
				// console.log(article.data().articleList);
				// console.log(this);
				// article.methods.getarticle();
				if(e.currentTarget.dataset.stype == 'life'){
					life.methods.functionlife(e.currentTarget.dataset.title);
				}else if(e.currentTarget.dataset.stype == 'article'){
					article.methods.functionarticle(e.currentTarget.dataset.title);
				}else if(e.currentTarget.dataset.stype == 'film'){
					film.methods.functionfilm(e.currentTarget.dataset.title);
				}else{
					latest.methods.functionlatest(e.currentTarget.dataset.title);
				}
				this.modalName = null;
				this.PageCur = e.currentTarget.dataset.stype;
			},
			
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},
			
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},
			
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
					
			toChild(e) {
				console.log(e);
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		},
	}
</script>

<style>
	.nav-li{
		width: 100%;
	}
	.page {
		height: 100vh;
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.hidden{
		display: none;
	}
	
	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}
	
	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}
	
	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}
	
	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}
	
	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}
	
	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}
	
	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}
	
	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}
	
	.DrawerPage .nav {
		flex: 1;
	}
	
	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}
	
	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
	
</style>
