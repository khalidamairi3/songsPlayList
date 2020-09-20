<template>
  <div>
    <h3>{{ song.singer }}</h3>
    <h4>{{ song.title}}</h4>
    <button @click="addSong" id="add" v-if="!isInplayList">add</button>
    <button @click="deleteSong" id="delete" v-else>delete</button>
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
    addSong: function() {
      this.$store.dispatch("addSong", this.song);
    },
    deleteSong: function() {
      this.$store.dispatch("deleteSong", this.song);
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