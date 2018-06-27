var data = {
	homeDiv:true,
	contactDiv:false,
	aboutDiv:false,
	servicesDiv:false,
}

const app = new Vue({
	el: '#app',
	data,
	methods:{
		contactClick(){
			this.homeDiv = false
			this.aboutDiv=false
			this.servicesDiv=false
			this.contactDiv=true
		},
		aboutClick(){
			this.homeDiv = false
			this.servicesDiv=false
			this.contactDiv = false
			this.aboutDiv= true
		},
		homeClick(){
			this.homeDiv=true
			this.servicesDiv=false
			this.contactDiv=false
			this.aboutDiv=false
		},
		servicesClick(){
			this.homeDiv=false
			this.servicesDiv=true
			this.contactDiv=false
			this.aboutDiv=false
		}
	}
})