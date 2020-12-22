import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

var judy = Vue.extend({            
	template:'<p>{{message}}</p>',          
	  data: function () {               
		  return{                   
			  message:'I am Judy'          ,
			  }          
				}      ,
			  });


const app = new Vue({
    ...App
})

app.$mount()
