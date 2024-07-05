<template>

    <section id="projects" class="container">
      <div class="row justify-content-center">
        <h2>Projects</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4" v-for="project in $store.state.projects" :key="project">
          <div class="card">
            <img :src="project.image" class="card-img-top" alt="project image">
            <div class="card-body">
              <h5 class="card-title">{{project.name}}</h5>
              <p class="card-text">{{project.description}}</p>
              <a :href="project.github" class="btn btn-primary btn-sm">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <div class="row justify-content-center">
      <div class="card contact-card">
        <span class="title">Leave a Comment</span>
        <form class="form" ref="formRef" action="https://formspree.io/f/xnnaqvzg" method="POST">
          <div class="group">
            <input placeholder="‎" type="text" required>
            <label for="name">Name</label>
          </div>
          <div class="group">
            <input placeholder="‎" type="email" id="email" name="email" required>
            <label for="email">Email</label>
          </div>
          <div class="group">
            <textarea placeholder="‎" id="comment" name="message" rows="5" required></textarea>
            <label for="comment">Comment</label>
          </div>
          <button class="form-btn" type="submit">Send</button>
          <button class="form-btn" type="button" @click="clearForm">Clear All</button>
        </form>
  
        <div class="social-card">
          <a class="social-link" href="https://github.com/Shakill23" target="_blank">
            <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
          <a class="social-link" href="https://www.linkedin.com/in/shakeel-davids-55b11a2b1/" target="_blank">
            <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'ContactComp',
  methods: {
    clearForm() {
      this.$refs.formRef.reset();
    }
  }
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
  font-family: Arial, sans-serif;
  color: #212529;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
}

a {
  text-decoration: none;
  color: #ff7e01;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  margin: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 20px;
  text-align: center;
}

.card-title {
  color: #212529;
  font-size: 24px;
  margin-bottom: 10px;
}

.card-text {
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
}

.btn {
  background-color: #ff7e01;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #ffab53;
}

.contact-card {
  background-color: #333;
  padding: 30px 40px;
  border-radius: 10px;
  margin: 20px;
}

.title {
  color: #ff7e01;
  font-size: 32px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.group {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}

.group input,
.group textarea {
  font-size: 18px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #212529;
}

.group input:focus,
.group textarea:focus {
  border-bottom-color: #ff7e01;
  outline: none;
}

.group label {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #ccc;
  font-size: 18px;
  transition: all 0.2s ease;
}

.group input:focus ~ label,
.group input:valid ~ label,
.group textarea:focus ~ label,
.group textarea:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #ff7e01;
}

.form-btn {
  background-color: #ff7e01;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.2s ease;
}

.form-btn:hover {
  background-color: #ffab53;
}

.social-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  background-color: #ff7e01;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #ffab53;
}
</style>
  

    <div>
        <h2>Contact</h2>
        <div class="card">
  <form class="form" action="https://formspree.io/f/xnnaqvzg"
  method="POST">
    <div class="group">
    <input placeholder="‎" type="text" required="">
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="‎" type="email" id="email" name="email" required="">
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
    <label for="comment">Message</label>
</div>
    <button type="submit">Send</button>
  </form>
</div>

    </div>
</template>

<script>
export default {
    name: 'ContactComp'
}
</script>

<style scoped></style>

