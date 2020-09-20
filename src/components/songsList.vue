<template>
<div>
    <listSong v-for=" song in songs " :key=song.title :song= "song" :isInplayList= " false " />
    
    
</div>
    
</template>

<script>
import listSong from "./song";
export default {
    name: "songsList",
    components:{
        listSong
    },
    props : {
        songs : {
            type : Array,
            required : true
        }
    }
}
</script>
<style  scoped>
    div{
        border : 1px solid black;
        border-radius: 15px 15px 15px 15px;
    }

</style>