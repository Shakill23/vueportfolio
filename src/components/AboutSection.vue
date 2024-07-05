<template>
    <section id="about" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12 col-12">
          <h2>About</h2>
          <div data-aos="fade-up" data-aos-delay="200">
            <div class="zoom-out-hover">
              <p>Hey there! I'm Shakeel Davids, an aspiring game developer. I enjoy finding the smart and efficient routes to solving problems and I'm not afraid to explore new ideas and methods.</p>
              <p>I love playing strategic games like chess because I relish the challenge of outsmarting my opponents. This strategic mindset translates into my work, where I constantly seek out the best solutions and enjoy working collaboratively with others to bring projects to life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

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

#about {
  padding: 50px 0;
}

h2 {
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.row {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.zoom-out-hover {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.zoom-out-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

p {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .row {
    gap: 10px;
  }
}

</style>