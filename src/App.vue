<template>

    <NavBar />
      <router-view />
    <FooterSection />
 
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: {
    NavBar,
    FooterSection
  },
computed:{
    getHome(){
      return this.$store.dispatch("getHome")
    },
    getAbout(){
      return this.$store.dispatch("getAbout")
    },
    getResume(){
      return this.$store.dispatch("getResume")
    },
    getSkills(){
      return this.$store.dispatch("getSkills")
    },
    getProjects(){
      return this.$store.dispatch("getProjects")
    },
    getContact(){
      return this.$store.dispatch("getContact")
    }
  },
mounted(){
  this.getHome
  this.getAbout
  this.getResume
  this.getSkills
  this.getProjects
  this.getContact
}
} 
</script>
<style src="@/assets/css/style.css"></style>
