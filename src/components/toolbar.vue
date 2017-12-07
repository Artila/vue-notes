<template>
  <div id="toolbar">
    <i class="glyphicon glyphicon-plus"></i>
    <i class="glyphicon glyphicon-star"></i>
    <i class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
</script>

<style>
  #toolbar {
    float: left;
    padding: 35px 25px 25px 25px;
    width: 80px;
    height: 100%;
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
