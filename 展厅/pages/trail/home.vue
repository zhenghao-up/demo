<template>
	<view>
		<History v-if="trailPage=='history'?true:false"></History>
		<Write v-if="trailPage=='write'?true:false"></Write>
	</view>
</template>

<script>
	import {history} from 'pages/trail/history.vue'
	import {write} from 'pages/trail/write.vue'
	export default {
		data() {
			return {
				// trailPage:''
			}
		},
		components:{
			'History':history,
			'Write':write
		},
		props:{
			trailPage: {
				type: String,
				default: 'history'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
