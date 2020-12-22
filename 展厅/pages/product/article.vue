<template name="article">
	<view>
		<view class="padding " style="margin:-50upx 20upx 0 20upx;">
		<view v-for="(item,index) in selecttags" :key="index" 
		@tap="toTaginfo" :data-tag="item.title" :data-id="item.id"
		class="cu-capsule round" style="margin: 40upx 20upx 0 20upx;">
			<view class='cu-tag' :class="selectid==item.id?'bg-grey':'bg-blue'">
				{{item.title}}
			</view>
			<view class="cu-tag bg-cyan" :class="selectid==item.id?'bg-grey':'bg-cyan'">
				{{item.num}}
			</view>
		</view>
		</view>
		
		<view class="cu-card article" :class="isCard?'no-card':''">
				<view v-for="(item,index) in articleList" :key="index" 
				   @tap="toContent" :data-id="item.id" 
				  :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" class="cu-item shadow">
					<view class="title"><view class="text-cut">{{item.title}}</view></view>
					<view class="content">
						<image :src="item.srcUrl"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> {{item.desc}}</view>
							<view style="display: flex;flex-flow: row;justify-content: space-between;">
								<view>
								<view v-for="(ite,ind) in item.tags" :key="ind" 
								:class=" ind%2==0?'bg-red':'bg-olive'" class="cu-tag light sm round">
								  {{ite}}
								</view>
								</view>
								<text class="cuIcon-attentionfill margin-right ">{{item.traffic}}</text> 

							</view>
						</view>
					</view>
				
				</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		name: "article",
		data() {
			return {
				isCard : false,
				backupList: [
					{
							id: 1,
							title: '爱情就是这么无聊',
							srcUrl: '../../static/16.bmp',
							desc: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！',
							tags: ['php','真挚'],
						    traffic: 11
						},
						{
							id: 2,
							title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
							srcUrl: '../../static/16.bmp',
							desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
							tags: ['善良','thinkphp'],
						    traffic: 11
						},
						{
							id: 3,
							title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
							srcUrl: '../../static/16.bmp',
							desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
							tags: ['善良','phpcenter'],
						    traffic: 11
						}
					
				],
				articleList: [
					{
						id: 1,
						title: '爱情就是这么无聊',
						srcUrl: '../../static/16.bmp',
						desc: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！',
						tags: ['php','真挚'],
						traffic: 11
					},
					{
						id: 2,
						title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
						srcUrl: '../../static/16.bmp',
						desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
						tags: ['善良','thinkphp'],
						traffic: 11
					},
					{
						id: 3,
						title: '无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
						srcUrl: '../../static/16.bmp',
						desc: '我无法真正相信人，即便关系再好，如果我的爱能够被发现，如果我的心是黑的...',
						tags: ['善良','phpcenter'],
						traffic: 11
					}
				],
				selecttags: [
					{
						id: 1,
						title: 'php',
						num: 4
					},
					{
						id: 2,
						title: 'thinkphp',
						num: 4
					},
					{
						id: 3,
						title: 'phpgrace',
						num: 4
					},
					{
						id: 4,
						title: 'phpcenter',
						num: 4
					}
				],

				selectid: null,
			};
		},
		beforeCreate() {
			_self = this;
			console.log('article');	
		},
		methods: {
			
			functionarticle(e){
				console.log(e);
				// _self.articleList = [];
				
				//访问服务器获取对应的数据
			},
			getarticle(e){
				console.log(_self);
				
			},
			toContent(e){
				console.log(e);
				uni.navigateTo({
					url: '../product/content?artid='+e.currentTarget.dataset.id
				})
			},
			toTaginfo(e){	
				if(this.selectid == e.currentTarget.dataset.id){
					this.articleList = this.backupList;
					this.selectid = null;
					return;
				}
				this.selectid = e.currentTarget.dataset.id;
				let tag = e.currentTarget.dataset.tag;
				let newArray = [];
				this.backupList.forEach((item,index)=>{
					item.tags.forEach((ite,index)=>{
						if(tag == ite){
							newArray.push(item);
						}
					})
				});
				this.articleList = newArray;
			}
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
