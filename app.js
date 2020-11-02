const app = Vue.createApp({
	data(){
		return {
			className: '',
			toggle: true,
			inlineBackgroundColor: ''
		}
	},
	computed: {
		paraclasses(){
			return {
				user1: this.className === 'user1',
				user2: this.className === 'user2',
				visible: this.toggle,
				hidden: !this.toggle
			}
		}
	},
	methods: {
		toggleMe(){
			this.toggle = !this.toggle;
		}
	}
});

app.mount('#assignment');