<template>
	<view>
		登陆...
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
