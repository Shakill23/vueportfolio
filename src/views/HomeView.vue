<template>

  <div class="wrapper container-fluid">

    <section class="row wrapperBg" id="landing">

      <LandingSection />

    </section>
    <section class="row" id="about">

      <AboutSection />

    </section>

    <section class="row wrapperBg" id="skills">

      <SkillsSection />

    </section>
    <section class="row" id="resume">

      <ResumeSection />
 
    </section>
    <section class="row wrapperBg" id="project">

      <ProjectSection />

    </section>
    <section class="row" id="contact">

      <ContactSection />

    </section>
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
