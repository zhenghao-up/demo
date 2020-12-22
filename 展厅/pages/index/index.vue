<template>
	<view>
		<product :class="PageCur=='product'?'':'hidden'"></product>
		<trail :trailPage="'history'" v-if="PageCur=='trail'?true:false" ></trail>
		<write v-if="PageCur=='write'?true:false" ></write>
		<order :class="PageCur=='order'?'':'hidden'"></order>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="product">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/product' + [PageCur=='product'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='product'?'text-green':'text-gray'">展区</view>
			</view>
			<view class="action" @click="NavChange" data-cur="trail">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/trail' + [PageCur == 'trail'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='trail'?'text-green':'text-gray'">足迹</view>
			</view>
			<view class="action" @click="NavChange" data-cur="write">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/write' + [PageCur == 'write'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='write'?'text-green':'text-gray'">展筹</view>
			</view>
			<view class="action" @click="NavChange" data-cur="order">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/order' + [PageCur == 'order'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='order'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'product'
			}
		},
		onShareAppMessage(res) {
		    return {
		      title: '微信分享测试',
		      path: '页面路径'
		    }
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
