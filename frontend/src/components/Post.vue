<template>
	<div :id="'post-' + postInfo.id" class="post">	
		<div class="post-head">
			{{this.postInfo.title}}
		</div>
		<div class="post-body">
			{{this.postInfo.body}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Post',
	props: {	
		postInfo: {
			type: Object,
			required: true
		}
	},
	created(){
		console.log(this.postInfo.title)
	},
	mounted(){
		console.log(this.postInfo)
	}
}
</script>

<style scoped>
/*
FAEDCA
7B435B
3A606E
CC5803
2DC2BD 

or

F2F7F2
39A9DB - blue
221D23 - dark
FA8334 - orange
*/

.post {
	width: 80vw;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3vh;
	background-color: #F2F7F2;
	border: 2px solid #F2F7F2;
}

.post-head {
	color: #FA8334;
	font-weight: bold;
	
}
</style>
