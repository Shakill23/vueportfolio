<template>
  <section id="projects" class="container">
    <div class="row justify-content-center">
      <h2 id="projectHead">Projects</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 mb-4" v-for="project in $store.state.projects" :key="project">
        <div class="card">
          <img :src="project.image" class="card-img-top" alt="project image">
          <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">{{project.description}}</p>
            <a :href="project.gitHub" class="btn btn-primary" target="_blank">Github</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Work Sans', sans-serif;
  text-align: center;
}

#projects {
  padding: 50px 0;
}

#projects h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensure cards have the same height */
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.card-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
  }
}

</style>

