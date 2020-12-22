<template>
	<view class="padding-bottom-xl margin-bottom-xl">
		<cu-custom bgColor="bg-grey light" >
			<block slot="content">足迹</block>
		</cu-custom>
		<view class="cu-timeline padding-tb-sm" v-for="(item,index) in list" :key="index">
			<view class="cu-time">{{item.date}}</view>
			<view class="cu-item cur"
			v-for="(ite,inde) in item.trail" :key="inde"
			:class="['cuIcon-'+cuIcon[inde%cuIcon.length].name,'text-'+text[inde%text.length]] "
			>
				<view class="content shadow-blur" :class="'bg-'+text[inde%text.length]">
					<text> 【 {{ite.time}} 】 </text>{{ite.content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						date: '5月4号',
						trail: [
							{
								time: '20.22',
								content: '您在视频【二哈的表现】发弹幕【这哈士奇真帅】'
							},
							{
								time: '20.24',
								content: '您进入了文章-我家的铲屎官 '
							},
							{
								time: '20.25',
								content: '您进入了动态区-看，这是大明湖的风景'
							},
						],
					},
					{
						date: '5月3号',
						trail: [
							{
								time: '20.22',
								content: '您在视频【二哈的表现】发弹幕【这哈士奇真帅】'
							},
							{
								time: '20.24',
								content: '您进入了文章-我家的铲屎官 '
							},
							{
								time: '20.25',
								content: '您进入了动态区-看，这是大明湖的风景'
							},
						],
					}
				],
				cuIcon:[
					{name: 'likefill'},
					{name: 'samefill'}, 
					{name: 'evaluate'},
					{name: 'ticket'},
					{name: 'showfill'},
					{name: 'favorfill'},
					{name: 'footprint'}, 
					{name: 'activity'}, 
					{name: 'selection'}, 
					{name: 'square'}
				],
				text:['green','red','orange','yellow','olive','cyan','blue','purple','mauve','pink'],
			};
		}
	}
</script>

<style>
</style>
