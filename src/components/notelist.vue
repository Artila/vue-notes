<template>
  <div id="note-list">
    <div id="list-header">
      <h2>笔记</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!--全部笔记-->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">
            全部笔记
          </button>
        </div>
        <!--所喜欢的笔记-->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">
            所喜欢的
          </button>
        </div>
      </div>
    </div>
    <!--笔记列表-->
    <div class="container">
      <div class="list-group">
          <a class="list-group-item">
            <h4 class="list-group-item-heading">

            </h4>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #note-list {
    float: left;
    width: 300px;
    height: 100%;
    font-weight: 400;
    background-color: #f5f5f5;
  }
  #list-header {
    padding: 5px 25px 25px 25px;
  }
  #list-header h2 {
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }
  #note-list .container {
    padding: 0;
    width: 100%;
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
  }
  #note-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }
  .list-group-item-heading {
    font-size: 15px;
    font-weight: 300;
  }
</style>
