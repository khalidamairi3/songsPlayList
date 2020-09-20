<template>
  <div>
    <h1>Music Play List</h1>
    <div id="list">
      <songs-list />
      <play-list />
    </div>
  </div>
</template>

<script>
import songsList from "./songsList.vue";
import playList from "./playList.vue";
export default {
  name: "page-body",
  components: {
    songsList,
    playList
  }
};
</script>
<style scoped>
#list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2vw;
}
</style>