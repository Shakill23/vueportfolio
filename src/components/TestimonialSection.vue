<template>
  <section id="testimonials">
    <h2>Testimonials</h2>
    <div class="container">
      <div class="card" v-for="testimonial in $store.state.testimonials" :key="testimonial">
        <img :src="testimonial.profile" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">"{{testimonial.quotes}}"</p>
          <p class="card-text emphasis">-{{ testimonial.name}} {{testimonial.surname}}</p>
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

#testimonials {
  padding: 50px 0;
  text-align: center;
}

#testimonials h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
  text-shadow: 0.25px 0.25px 2px rgba(255, 255, 255, 0.704);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 300px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 340px; /* Set a fixed height for all images */
  object-fit: cover; /* Ensure the image covers the area */
}

.card-body {
  padding: 20px;
}

.card-text {
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
}

.card-text.emphasis {
  font-weight: bold;
  color: #555;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
  }
}


</style>

