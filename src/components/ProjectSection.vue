<template>
  <section id="projects" class="wrapper container-fluid">
    <div class="box">
      <!-- floating divs... -->
      <div v-for="n in 15" :key="n"></div>
    </div>

    <!-- Centered h2 Heading -->
    <div class="row">
      <div class="col-12 text-center">
        <h2 id="projectHead">Projects</h2>
      </div>
    </div>

    <!-- Projects Grid -->
 <div class="row justify-content-center mt-4">
      <div
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
        v-for="(project, index) in $store.state.projects"
        :key="project.name"
        :data-aos="getAOSAnimation(index)"
        :data-aos-delay="200 * (index + 1)"
      >
        <div class="card h-100">
          <img :src="project.image" class="card-img-top" alt="project image" />
          <div class="tooltip" v-if="isMobile">Tap to light me up!</div>

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ project.name }}</h5>

            <div class="card-description">
              <p class="card-text">{{ project.description }}</p>
            </div>

            <div class="card-buttons">
              <a
                v-if="project.gitHub"
                :href="project.gitHub"
                class="btn btn-github"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="50"
                target="_blank"
              >GitHub</a>

              <a
                v-else-if="project.figma"
                :href="project.figma"
                class="btn btn-figma"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="50"
                target="_blank"
              >Design</a>

              <a
                v-if="project.live"
                :href="project.live"
                class="btn btn-live"
                data-aos="fade-right"
                data-aos-offset="50"
                target="_blank"
              >Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    if (this.$store.state.projects.length === 0) {
      this.$store.dispatch('getProjects');
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    getAOSAnimation(index) {
      const animations = ["fade-up", "fade-down", "fade-right", "fade-left"];
      return animations[index % animations.length];
    }
  }
};
</script>

<style scoped>
#projects {
  margin-top: 50px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* Card base styles */
.card {
  background-color: #f4f4f4;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  z-index: 2;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.card:hover .card-img-top {
  filter: grayscale(0%);
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

/* Fixed-height, scrollable description */
.card-description {
  flex: 1;                   /* fill remaining space */
  min-height: 4.5rem;        /* or whatever suits your design */
  max-height: 8rem;          /* controls scroll area */
  overflow-y: auto;
  margin-bottom: 1rem;

  /* keep text away from the scrollbar */
  padding-right: 1rem;

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #e1e1e1;
}

/* WebKit scrollbar styling */
.card-description::-webkit-scrollbar {
  width: 8px;
}
.card-description::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 4px;
}
.card-description::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

/* Typography */
.card-title {
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  color: #555;
  margin: 0;
}

/* Button block pinned to bottom of card-body */
.card-buttons {
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
}

/* GitHub Button */
.btn-github {
  background-color: #333;
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  /* transition: transform 0.3s ease; */
}

.btn-github:hover {
  transform: scale(1.05);
}

/* Live Demo Button */
.btn-live {
  background-color: rgba(255, 18, 1, 0.8);
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  /* transition: transform 0.3s ease; */
}

.btn-live:hover {
  transform: scale(1.05);
}

.btn-figma {
  background-color: #333;
  border: none;
  border-radius: 20px;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
.btn-figma:hover {
  transform: scale(1.05);
}

/* Tooltip Styling */
.tooltip {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  z-index: 10;
}

/* Floating Divs Styling */
.box div {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 6px solid #fff;
  animation: animate infinite linear;
  background: transparent;
  z-index: 0;
}

.box div:nth-child(1) {
  top: 12%;
  left: 42%;
  animation-duration: 10s;
}

.box div:nth-child(2) {
  top: 70%;
  left: 50%;
  animation-duration: 7s;
}

.box div:nth-child(3) {
  top: 17%;
  left: 6%;
  animation-duration: 9s;
}

.box div:nth-child(4) {
  top: 20%;
  left: 60%;
  animation-duration: 10s;
}

.box div:nth-child(5) {
  top: 67%;
  left: 10%;
  animation-duration: 6s;
}

.box div:nth-child(6) {
  top: 80%;
  left: 70%;
  animation-duration: 12s;
}

.box div:nth-child(7) {
  top: 60%;
  left: 80%;
  animation-duration: 15s;
}

.box div:nth-child(8) {
  top: 32%;
  left: 25%;
  animation-duration: 16s;
}

.box div:nth-child(9) {
  top: 90%;
  left: 25%;
  animation-duration: 9s;
}

.box div:nth-child(10) {
  top: 20%;
  left: 80%;
  animation-duration: 5s;
}

/* New Floating Divs */
.box div:nth-child(11) {
  top: 10%;
  right: 5%;
  animation-duration: 8s;
}

.box div:nth-child(12) {
  bottom: 10%;
  right: 3%;
  animation-duration: 6s;
}

.box div:nth-child(13) {
  bottom: 20%;
  left: 5%;
  animation-duration: 11s;
}

.box div:nth-child(14) {
  bottom: 30%;
  right: 10%;
  animation-duration: 9s;
}

.box div:nth-child(15) {
  top: 25%;
  left: 2%;
  animation-duration: 13s;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(0);
    opacity: 1;
  }

  100% {
    transform: scale(1.3) translateY(-90px) rotate(360deg);
    opacity: 0;
  }
}
</style>
