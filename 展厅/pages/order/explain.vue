<template>
	<view>
		<cu-custom bgColor="bg-grey light" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">关于</block>
		</cu-custom>
		<view class="padding-lr margin-lr-lg margin-top-xl padding-bottom-xl  margin-lr-lg bg-white">
			<view class="text-lg text-df padding-lr padding-top-xl">
				此插件库主要使用ColorUI来开发，至此有许多原设想未完成，后继将继续扩展
			</view>
			<view class="text-lg text-df padding">
				欢迎来github或者码云提交好的想法，此外，再次感谢ColorUI作者的开源之举
			</view>
		</view>
	</view>
</template>

<script>
	var _self, session_key, openid, pageOptions;
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad: (options) => {
			_self = this;
			
			//app登陆
			// #ifdef APP-PLUS
			uni.login({
				provider: 'weixin',
				success: (res) => {
					uni.getUserInfo({
						success: (info) => {
							console.log(JSON.stringify(info));
							uni.request({
								url: _self.apiServer+'member&m=login',
								method: 'POST',
								header: {'content-type' : "application/x-www-form-urlencoded"},
								method: 'GET',
								data: {},
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						}
					})
				}
			})
			// #endif
		}
	}
</script>

<style>

</style>
