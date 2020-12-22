<script>
	export default {
		
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入图标字体 */
	@font-face {
	 font-family: 'iconfont';
	 src: url('~@/static/font/iconfont.ttf') format('truetype');;
	}
	 .iconfont {
	    font-family: iconfont;
	 
	}
	i{font-style: normal;}
	page{background: #f4f4f4;}
	.whiteBg{min-height:calc(100vh - 50px) ;background: #fff;}
	::-webkit-scrollbar{width:0;height:1px}
</style>
