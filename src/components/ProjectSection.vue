<template>
  <section id="projects" class="wrapper container-fluid">
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
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
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
        v-for="project in $store.state.projects"
        :key="project.name"
      >
        <div class="card h-100">
          <img :src="project.image" class="card-img-top" alt="project image" />
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.gitHub" class="btn btn-github" target="_blank">GitHub</a>
            <a :href="project.liveDemo" class="btn btn-live" target="_blank">Live</a>
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
};
</script>

<style scoped>
#projects {
  margin-top: 50px;
  padding: 20px;
  max-width: 100%;
  position: relative;  
}

.card {
  background-color: #f4f4f4;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Project Image Styling */
.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
  object-fit: cover;
  filter: grayscale(100%); /* Default greyscale */
  transition: filter 0.3s ease; /* Smooth transition on hover */
  position: relative;
}

.card:hover .card-img-top {
  filter: grayscale(0%); /* Remove greyscale on hover */
}

.card-title {
  font-family: 'Work Sans', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
}

.card-text {
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  color: #555;
}

/* GitHub Button */
.btn-github {
  background-color: #333;
  border-color: #333;
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-github:hover {
  background-color: #555;
  transform: scale(1.05);
}

/* Live Demo Button */
.btn-live {
  background-color: rgba(255, 18, 1, 0.8);
  border-radius: 20px;
  color: #fff;
  margin-left: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-live:hover {
  transform: scale(1.05);
}

/* Responsive styling */
@media (max-width: 768px) {
  .card-img-top {
    height: 150px;
  }

  #projects {
    padding-left: 10px;
    padding-right: 10px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}

.box div{
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 6px solid rgb(255, 255, 255);
    z-index: 0;
}

.box div:nth-child(1){
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(2){
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
}

.box div:nth-child(3){
    top: 17%;
    left: 6%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(4){
    top: 20%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(5){
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
}

.box div:nth-child(6){
    top: 80%;
    left: 70%;
    animation: animate 12s linear infinite;
}

.box div:nth-child(7){
    top: 60%;
    left: 80%;
    animation: animate 15s linear infinite;
}

.box div:nth-child(8){
    top: 32%;
    left: 25%;
    animation: animate 16s linear infinite;
}

.box div:nth-child(9){
    top: 90%;
    left: 25%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(10){
    top: 20%;
    left: 80%;
    animation: animate 5s linear infinite;
}

/* New Floating Divs Positions */
.box div:nth-child(11) {
  top: 10%;
  right: 5%;
  animation: animate 8s linear infinite;
}

/* Closer to right edge */
.box div:nth-child(12) {
  bottom: 10%;
  right: 3%;
  animation: animate 6s linear infinite;
}

/* Closer to bottom right edge */
.box div:nth-child(13) {
  bottom: 20%;
  left: 5%;
  animation: animate 11s linear infinite;
}

/* Closer to left edge */
.box div:nth-child(14) {
  bottom: 30%;
  right: 10%;
  animation: animate 9s linear infinite;
}

/* Slightly closer to right edge */
.box div:nth-child(15) {
  top: 25%;
  left: 2%;
  animation: animate 13s linear infinite;
}

@keyframes animate{
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;

    }
}

</style>