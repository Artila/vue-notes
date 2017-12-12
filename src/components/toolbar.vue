<template>
  <div id="toolbar">
    <i 
    	@click="addNote" 
    	class="glyphicon glyphicon-plus">
    </i>
    <i 
    	@click="toggleFavorite"
    	:class="{ star: activeNote.favorite }"
    	class="glyphicon glyphicon-star">
    </i>
    <i 
    	@click="deleteNote" 
    	class="glyphicon glyphicon-remove">
    </i>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	
	export default {
		computed: {
			...mapGetters([
				'activeNote'
			])
		},
		methods: {
			...mapActions([
				'addNote',
				'toggleFavorite',
				'deleteNote'
			])
		}
	}
</script>

<style>
  #toolbar {
    padding: 35px 25px 25px 25px;
    width: 80px;
    background-color: #30414d;
    color: #767676;
  }

  #toolbar i {
    margin-bottom: 35px;
    font-size: 30px;
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.5s ease;
  }

  #toolbar i:hover {
    opacity: 1;
  }

  .star {
    color: #f7ae4f;
  }
</style>
