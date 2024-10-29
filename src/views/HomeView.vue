<template>

  <div class="wrapper container-fluid">

    <section class="row wrapperBg" id="landing">

      <LandingSection />

    </section>
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
        <div></div>
      </div>
    <section class="row" id="about">

      <AboutSection />

    </section>

    <section class="row wrapperBg" id="skills">

      <SkillsSection />

    </section>
    <section class="row" id="resume">

      <ResumeSection />
 
    </section>
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
        <div></div>
      </div>
    <section class="row wrapperBg" id="project">

      <ProjectSection />

    </section>
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
        <div></div>
      </div>
    <section class="row" id="contact">

      <ContactSection />

    </section>
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
        <div></div>
      </div>
  </div>
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
        <div></div>
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
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapperBg {
  background: linear-gradient(90deg, rgb(16, 2, 2) 0%, rgb(90, 8, 8) 35%, rgb(255, 0, 0));
}
</style>
