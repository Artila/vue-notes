<template>
  <div id="editor">
  	<div class="form-group">
  		<!--<input 
  			v-model="title"
  			type="text" name="title" 
  			class="title form-control" 
  			placeholder="请输入标题">-->
  		<textarea 
  			:value="activeNoteContent"
  			@input="editNote"
  			name="content" class="form-control" 
  			placeholder="请输入正文"></textarea>
  	</div>  
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	
	export default {
		computed: {
			...mapGetters([
				'activeNoteContent'
			])
		},
		methods: {
			...mapActions([
				'editNote'
			])
		}
	}
</script>

<style>
  #editor {
    flex: 2;
  }
  
  .form-group {
  	display: flex;
  	flex-flow: column;
  	height: 100%;
  	margin-bottom: 0;
  }
  
  .title {
  	border: 0;
  }

  #editor textarea {
  	flex-grow: 2;
  	box-sizing: border-box;
  	padding-top: 15px;
    height: 100%;
    border: 0;
    border-radius: 0;
  }
</style>
