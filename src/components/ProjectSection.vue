<template>
  <section id="projects" class="container">
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
            <a :href="project.gitHub" class="btn btn-primary" target="_blank"
              >GitHub</a
            >
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
/* Project section heading */
#projectHead {
  color: #333;
  text-shadow: 0.5px 0.5px 2px rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 30px;
  position: relative;
  z-index: 3; /* Ensuring it's above the animations */
}

/* Projects container */
#projects {
  margin-top: 50px;
  padding: 20px;
  max-width: 100%;
  position: relative;
  z-index: 3; /* Keeping it above animations, level 3 */
}

/* Card styling */
.card {
  background-color: #f4f4f4;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  z-index: 3; /* Content level, above animations */
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Image styling */
.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
  object-fit: cover;
  position: relative;
  z-index: 3; /* Image must remain above animations */
}

/* Text styling */
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

/* Button styling */
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Responsive adjustments */
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
</style>

