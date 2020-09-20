<template>
  <div>
    <song-item v-for=" song in songs " :key="song.title" :song="song" :isInplayList=" false " />
  </div>
</template>

<script>
import songItem from "./song.vue";
export default {
  name: "songs-list",
  components: {
    songItem
  },
  data: function() {
    return {
      songs: this.$store.state.songs
    };
  }
};
</script>
<style scoped>
div {
  border: 1px solid black;
  border-radius: 15px 15px 15px 15px;
}
</style>