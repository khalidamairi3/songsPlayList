<template>
<div>
    <h1>Music Play List</h1>
    <div id="list">
      
      <songsList :songs= "songs" />
      <playList :songs = " playListSongs" />

  </div>

</div>
  
  
</template>

<script>
import playList from "./playList.vue";
import songsList from "./songsList.vue";
export default {
  name: "pageBody",
  components: {
    playList,
    songsList,
  },
  data: function () {
    return {
      playListSongs: [
      
      ],
      songs: [
        { singer: " singer 1", title: "song 1" },
        { singer: " singer 2", title: "song 2" },
        { singer: " singer 3", title: "song 3" },
        { singer: " singer 4", title: "song 4" },
        { singer: " singer 5", title: "song 5" },
      ],
    };
  },
  methods:{
      addSong : function(addedSong){
         
          this.playListSongs.push(addedSong);
          for ( let i=0 ; i< this.songs.length ; i++){
              if(this.songs[i] == addedSong)
              this.songs.splice(i,1)
          }
      },
      deleteSong : function(deletedSong){
          
          this.songs.push(deletedSong);
          for ( let i=0 ; i< this.playListSongs.length ; i++){
              if(this.playListSongs[i] == deletedSong)
              this.playListSongs.splice(i,1);
          }
      }
  },
  mounted : function(){
      this.$root.$on("addSong",this.addSong);
      this.$root.$on("deleteSong",this.deleteSong);
  }
};
</script>
<style  scoped>

#list{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    column-gap: 2vw;
}
</style>