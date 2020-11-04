const app = Vue.createApp({
	data(){
		return {
			taskText : "",
			tasks: [],
			taskListIsVisible: true
		}
	},
	computed: {
		buttonCaption(){
			return this.taskListIsVisible ? 'Hide List' : 'Show List';
		}
	},
	methods: {
		addTask(){
			if (this.taskText === "") {
				return;
			}
			this.tasks.push(this.taskText);
			this.taskText = "";
		},
		toggleTaskList(){
			this.taskListIsVisible = !this.taskListIsVisible;
		}
	}
});

app.mount('#assignment');