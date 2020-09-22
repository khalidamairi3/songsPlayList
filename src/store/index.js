import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playListSongs: [],
    songs: [
      { singer: " singer 1", title: "song 1" },
      { singer: " singer 2", title: "song 2" },
      { singer: " singer 3", title: "song 3" },
      { singer: " singer 4", title: "song 4" },
      { singer: " singer 5", title: "song 5" },
    ]
  },
  mutations: {
    updateAdd: function (state, addedSong) {

      state.playListSongs.push(addedSong);
      state.songs=state.songs.filter(function(song){
        return song != addedSong;
      })
   
    },
   
    updateDelete: function (state, deletedSong) {
      state.songs.push(deletedSong);
      state.playListSongs=state.playListSongs.filter(function(song){
        return song != deletedSong;
      })
    }
  },
  actions: {
    addSong: function (context, addedSong) {
      context.commit('updateAdd', addedSong);
    },
    deleteSong: function (context, deletedSong) {
      context.commit('updateDelete', deletedSong);
    },

  },
  modules: {}
});
