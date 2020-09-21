<template>
  <div>
    <h3>{{ song.singer }}</h3>
    <h4>{{ song.title}}</h4>
    <button @click="addSong(song)" id="add" v-if="!isInplayList">add</button>
    <button @click="deleteSong(song)" id="delete" v-else>delete</button>
  </div>
</template>

<script>
export default {
  name: "sond-item",
  props: {
    song: {
      type: Object,
      required: true
    },
    isInplayList: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addSong: function(song) {
      this.$store.dispatch("addSong", song);
    },
    deleteSong: function(song) {
      this.$store.dispatch("deleteSong", song);
    }
  }
};
</script>
<style scoped>
#add {
  background-color: blue;
  color: white;
  border-radius: 5px 5px 5px 5px;
  width: 100px;
}
#delete {
  background-color: red;
  color: white;
  border-radius: 5px 5px 5px 5px;
  width: 100px;
}
</style>