<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
  import Editor from './components/editor'
  import NoteList from './components/notelist'
  import Toolbar from './components/toolbar'

  export default {
    components: {
      Editor,
      NoteList,
      Toolbar
    }
  }
</script>

<style>
  html{
    height: 100%;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
  }
  
  #app {
  	display: flex;
  	align-items: stretch;
  	height: 100vh;
  }
</style>
