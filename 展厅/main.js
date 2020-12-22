import Vue from 'vue'
import App from './App'

import product from 'pages/product/home.vue'
Vue.component('product',product)

import trail from 'pages/trail/home.vue'
Vue.component('trail',trail)

import order from 'pages/order/home.vue'
Vue.component('order',order)

import write from 'pages/write/write.vue'
Vue.component('write',write)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
 

Vue.config.productionTip = false
Vue.prototype.checkLogin = function(backpage,backtype){
	var SUID = uni.getStorageSync('SUID');
	var SRAND = uni.getStorageSync('SRAND');
	var SNAME = uni.getStorageSync('SNAME');
	var SFACE = uni.getStorageSync('SFACE');
	if(SUID == '' || SRAND == '' || SFACE == ''){
		uni.redirectTo({
			url:"../login/login?backpage="+backpage+"&backtype="+backtype
		});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}
var APITOKEN = 'api2020';
Vue.prototype.apiServer = 'http://www.foshcity.cn/index.php?token='+APITOKEN+'&c=';
Vue.prototype.staticServer = 'http://www.foshcity.cn/';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
