var data = {
	homeDiv:true,
	contactDiv:false,
	aboutDiv:false,
	servicesDiv:false,
	currentPage:1,
	horseDiv:false,
	famPetDiv:false,
	cattleDiv:false,
	currentDiv:1,
}

const app = new Vue({
	el: '#app',
	data,
	methods:{
		contactClick(){
			this.currentPage=2
			this.homeDiv = false
			this.aboutDiv=false
			this.servicesDiv=false
			this.contactDiv=true
		},
		aboutClick(){
			this.currentPage=4
			this.homeDiv = false
			this.servicesDiv=false
			this.contactDiv = false
			this.aboutDiv= true
		},
		homeClick(){
			this.currentPage=1
			this.homeDiv=true
			this.servicesDiv=false
			this.contactDiv=false
			this.aboutDiv=false
		},
		servicesClick(){
			this.currentPage=3
			this.homeDiv=false
			this.servicesDiv=true
			this.contactDiv=false
			this.aboutDiv=false
			this.famPetDiv=true
			this.horseDiv=false
			this.cattleDiv=false
			this.currentDiv=1
		},
		famPetClick(){
			this.servicesClick()
			this.famPetDiv=true
			this.horseDiv=false
			this.cattleDiv=false
			this.currentDiv=1
		},
		horseClick(){
			this.servicesClick()
			this.famPetDiv=false
			this.horseDiv=true
			this.cattleDiv=false
			this.currentDiv=2
		},
		cattleClick(){
			this.servicesClick()
			this.famPetDiv=false
			this.horseDiv=false
			this.cattleDiv=true
			this.currentDiv=3
		}

	}
})