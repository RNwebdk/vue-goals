let app = Vue.createApp({
	data(){
		return {
			number: 0,
		}
	},
	computed: {
		result(){
			if (this.number > 37) {
				return "Too much!";
			}else if(this.number === 37){
				return this.number;
			}else{
				return "Not there yet";
			}
		}
	},
	watch: {
		result(){
			console.log("Watcher executing...");
			setTimeout(() => {
				this.number = 0;
			}, 5000);
		}
	},
	methods: {
		addNumber(num){
			this.number += num;
			console.log("number = ", this.number);
		}
	}
});

app.mount('#assignment');