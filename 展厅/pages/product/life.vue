<template name="life">
	<view>
		<view class="cu-card dynamic">
			<view class="cu-item shadow" v-for="(item,index) in lifeList" :key="index"
			:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]">
				<view class="cu-list menu-avatar padding-top-xl padding-bottom">
					<view>
						<view class="flex-sub margin-lr-lg" >
							<view style="line-height: 1.7em;" class="text-df padding-bottom-sm">
								{{item.title}}
							</view>
							<view  class="text-gray text-sm flex justify-end margin-right-sm ">
								{{item.dater}}
							</view>
						</view>
					</view>
				</view>
				<view class="grid flex-sub padding-lr" :class="item.imgs.length>1?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="item.imgs.length>1?'':'only-img'" 
					 v-for="(ite,inde) in item.imgs" :key="inde"
					 :style="[{backgroundImage: 'url( ' + ite + ')'}]"
					@tap="showModal" :data-target="index" :data-displ="inde"
					 >
					</view>
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
				</view>
			</view>
		   <view class="cu-modal" :class="modalName!=null?'show':''" @click="hideModal">
		    	<view class="cu-dialog" >
		    		<swiper 
					:indicator-dots="lifeList[modalName].imgs.length>1?true:false" 
					:current="displ">
		    			<swiper-item class="bg-img" 
						v-for="(it,ind) in lifeList[modalName].imgs" :key="ind"
						:style="[{backgroundImage: 'url( ' + it + ')'}]"
				        >
		    			</swiper-item>
		    		</swiper>
		    	</view>
		    </view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		name: "life",
		data() {
			return {
				modalName:null,
				displ:null,
				isCard : true,
				lifeList: [
					{
						id: 1,
						title: '折磨有我来终结折磨生出苦难折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！，苦难又会加剧折磨，将有我来终结！！',
						traffic: 87,
						dater: '2020年5月6日',
						imgs: [
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp'
						]
					},
					{
						id: 2,
						title: '折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！',
						traffic: 97,
						dater: '2020年5月6日',
						imgs: [
							'../../static/16.bmp'
						]
					},
					{
						id: 3,
						title: '折磨有我来终结折磨生出苦难，苦难又会加剧折磨，将有我来终结！！',
						traffic: 87,
						dater: '2020年5月6日',
						imgs: [
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp',
							'../../static/16.bmp'
						]
					}
				],
				selectid: null,
			};
		},
		beforeCreate() {
			_self = this;
			console.log('life');	
		},
		methods: {
			showModal(e) {
				
				_self.modalName = parseInt(e.currentTarget.dataset.target);
				_self.displ = e.currentTarget.dataset.displ;
				// console.log(_self.lifeList[_self.modalName].imgs);
				// uni.previewImage({
				// 	current: _self.displ,
				//     urls: _self.lifeList[_self.modalName].imgs,
				//     loop:true
				// });
				// _self.modalName = parseInt(e.currentTarget.dataset.target);
				// _self.displ = e.currentTarget.dataset.displ;
			},
			hideModal(e) {
				_self.modalName = null;
				_self.displ = null;
			},
			functionlife(e){
				console.log(e);
				// _self.articleList = [];
				
				//访问服务器获取对应的数据
			},
			
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
