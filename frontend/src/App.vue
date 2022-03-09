<template>
	<div id="appDiv">
		<div id="blog-header">
			<img alt="Trevor Logo" src="./assets/logo.png" id="corner-logo"/>
			<p>Hey, welcome to my blog page where I try to keep track of some of the things I learn as a software engineer.</p>
		</div>
		<div id="post-container">
			<Post v-for="post in this.shownPosts" :key="post.postNumber" :postInfo="post"></Post>
		</div>
		<button @click="showMorePosts()"></button>
	</div>
</template>

<script>
  //papee white, dark grey, orange, and cyan. 
import Post from "./components/Post.vue";
export default {
	name: "App",
	components: {
	Post,
	},
  data() {
		return {
			allPosts: [],
			postsPerPage: 30,
			unshownPosts: [],
			shownPosts: [],
		} 
	},
  created() {
		//perform call to get all post ids, put in here, then we can put the first 30 in the thing
		this.allPosts.push({
			id: 1, 
			postNumber: 1,
			title: "Test 1", 
			body: "today i learned some crap."
		});
		this.allPosts.push({
			id: 2, 
			postNumber: 2,
			title: "Test 2", 
			body: "Cold fusion is bad."
		});
		this.allPosts.push({
			id: 3,
			postNumber: 3,
			title: "How to create nice border animations with CSS",
			body: `Something that looks and feels cool is a sleek border animation on hover. Here are a few little examples on how you can put one together. 
			https://jsfiddle.net/twarthman/b3o7hntu/76/
			https://jsfiddle.net/twarthman/kw9Lhb6s/177/
			https://jsfiddle.net/twarthman/tz0m74aj/61/
			`
		});

	this.divideUpPosts();
	
	
  },
  methods: {
		showMorePosts() {
			if(this.unshownPosts.length > 0){
				this.shownPosts.push(this.unshownPosts.splice(0,this.postsPerPage));
			}
		},
		divideUpPosts(){
			this.shownPosts = this.shownPosts.concat(this.allPosts.slice(0,30));
			this.unshownPosts = this.unshownPosts.concat(this.allPosts.slice(this.postsPerPage,this.allPosts.length));
		},
	},
};
</script>

<style>
	body, div#appDiv, div#post-container {
		background-color: #221D23;
	}
	body div {
		background-color: #F9F9F3;
	}


</style>
<style scoped>
	#corner-logo {
		left: 20px;
		top: 20px;

	}

	#blog-header {
		margin-bottom: 3vh;
		display: flex;
		justify-content: center;
		height: 10vh;
	}

	#post-container {
	
	}
</style>