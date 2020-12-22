<template>
	<view>
	
		<view class="top">
		
			<view class="status">
			</view>
			
			
			<view class="header">
				<view class="headerLeft">
					<image src="/static/image/search.png" class="search"></image>
				</view>
				<view class="headerMiddle">
					<image src="/static/image/logo.png" class="logo"></image>
				</view>
				<view class="headerRight">
					<image src="/static/image/trolley.png" class="trolley"></image>
					<image src="/static/image/more.png" class="more"></image>
				</view>
			</view>
			<view class="menu">
				<navigator open-type="switchTab"  class="activeMenu" url="/pages/index/index">推荐</navigator>
				<navigator v-for="(item,index) in content" :key="index" url="/pages/list/list" >{{item.menu}}</navigator>
			</view>
		</view>
		<view class="empty">
			
		</view>
	</view>
</template>

<script>
	export default{
		props:['content']
	}
</script>

<style scoped>
	.status{height:var(--status-bar-height) ;width: 100%;background: #fff;}
	.top{background: #fff;
	
	
	position: fixed;width: 100%;z-index: 99;top:0;}
	.empty{height:180rpx;padding-top:var(--status-bar-height) ;}
	.header{height: 110rpx;display: flex;margin:0 20rpx;
	align-items: center;justify-content:space-between ;}
	.headerLeft,.headerMiddle,.headerRight{width: 33.33%;}
	.search{height: 30rpx;width: 30rpx;}
	.logo{width: 142rpx;height: 33rpx;}
	.headerMiddle{display: flex;justify-content: center;}
	.headerRight{display: flex;align-items: center;justify-content: flex-end;}
	.headerRight .trolley{height: 36rpx;width: 36rpx;} 
	.headerRight .more{height: 30rpx;width: 30rpx;margin-left:40rpx;} 
	.menu{display: flex;justify-content: space-between;margin:0 20rpx 0rpx;
	font-size: 28rpx;height: 55rpx;line-height: 55rpx;padding-bottom:15rpx;}
	.menu navigator.activeMenu{color: #0bbbef;border-bottom:1rpx solid #0bbbef;}
</style>
