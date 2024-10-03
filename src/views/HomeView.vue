<template>
  <div class="wrapper container-fluid">
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <section class="row wrapperBg" id="landing"><LandingSection/></section>
    <section class="row" id="about"><AboutSection/></section>
    <section class="row wrapperBg" id="skills"><SkillsSection/></section>
    <section class="row" id="resume"><ResumeSection/></section>
    <section class="row wrapperBg" id="project"><ProjectSection/></section>
    <section class="row" id="contact"><ContactSection/></section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import ContactSection from '@/components/ContactSection.vue';

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    SkillsSection,
    ResumeSection,
    ProjectSection,
    ContactSection,
  },
  mounted() {
    const floatDivs = document.querySelectorAll('.box div');
    const area2Sections = document.querySelectorAll('#about, #resume, #contact');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatDivs.forEach(div => div.style.backgroundColor = 'black');
        } else {
          floatDivs.forEach(div => div.style.backgroundColor = '');
        }
      });
    });

    area2Sections.forEach(section => {
      observer.observe(section);
    });
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
