<template>
  <section id="resume" class="container">
    <div class="row justify-content-center">
      <h2>Resume</h2>
      <h3 id="education">Education</h3>
      <div v-for="resum in $store.state.resume" :key="resum">
        <div class="row justify-content-center">
          <div data-aos="fade-right" data-aos-delay="200" class="block col-lg-4 col-md-6 col-sm-12">
            <p><img src="https://shakill23.github.io/allImages/images/graduation-hat.png" alt="icon">{{resum.year}}</p>
            <h4>{{resum.place}}</h4>
            <p>{{resum.description}}</p>
          </div>
        </div>
      </div>
      <h3>Work & Experience</h3>
      <div class="row justify-content-center">
        <div class="block col-lg-8 col-md-10 col-sm-12 col-12 zoom-in-hover">
          <div data-aos="zoom-out-right" data-aos-delay="100">
            <p><img src="https://shakill23.github.io/allImages/images/administration.png" alt="icon">2020-2024</p>
            <h4>Administration</h4>
          </div>
          <div data-aos="zoom-out-left" data-aos-delay="50">
            <p>I did admin work part-time for a company and the tasks I had to was: scanning documents like passports and
              IDs, booking train and airline tickets, editing and working with Excel spreadsheets.</p>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section id="skills" class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12 col-12">
        <h2 id="skillsHead">Skills</h2>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div data-aos="fade-up" data-aos-delay="100" class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4><img src="https://shakill23.github.io/allImages/images/html-5.png" alt="html" loading="lazy"></h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">Intermediate</li>
                    <li><img src="https://shakill23.github.io/allImages/images/semantic-web.png" alt="icon">Semantic Markup</li>
                    <li><img src="https://shakill23.github.io/allImages/images/form.png" alt="icon">Forms</li>
                    <li><img src="https://shakill23.github.io/allImages/images/website.png" alt="icon">Media</li>
                    <li><img src="https://shakill23.github.io/allImages/images/canvas.png" alt="icon">Canvas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4><img src="https://shakill23.github.io/allImages/images/css-3.png" alt="css" loading="lazy"></h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">Intermediate</li>
                    <li><img src="https://shakill23.github.io/allImages/images/menu.png" alt="icon">Flexbox</li>
                    <li><img src="https://shakill23.github.io/allImages/images/animation.png" alt="icon">Animations</li>
                    <li><img src="https://shakill23.github.io/allImages/images/transition.png" alt="icon">Transitions</li>
                    <li><img src="https://shakill23.github.io/allImages/images/responsive.png" alt="icon">Responsive Design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4><img src="https://shakill23.github.io/allImages/images/js.png" alt="JavaScript" loading="lazy"></h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">Intermediate</li>
                    <li><img src="https://shakill23.github.io/allImages/images/javascript.png" alt="icon">DOM Manipulation</li>
                    <li><img src="https://shakill23.github.io/allImages/images/event.png" alt="icon">Events</li>
                    <li><img src="https://shakill23.github.io/allImages/images/time.png" alt="icon">Async/Await</li>
                    <li><img src="https://shakill23.github.io/allImages/images/javascript.png" alt="icon">ES6+</li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4><img src="https://shakill23.github.io/allImages/images/bootstrap.png" alt="bootstrap" loading="lazy"></h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">Intermediate</li>
                    <li><img src="https://shakill23.github.io/allImages/images/responsive.png" alt="icon">Responsive Design</li>
                    <li><img src="https://shakill23.github.io/allImages/images/grid-organization.png" alt="icon">Grid System</li>
                    <li><img src="https://shakill23.github.io/allImages/images/database.png" alt="icon">Components</li>
                    <li><img src="https://shakill23.github.io/allImages/images/settings.png" alt="icon">Utilities</li>
                  </ul>
                </div>
              </div>
            </div>
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

#skills {
  padding: 50px 0;
}

h2, h3 {
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

.card-container {
  padding: 10px;
}

.card {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 200px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card:hover {
  transform: rotateY(180deg);
}

.card .card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.card .front {
  background-color: #ffffff;
  color: black;
}

.card .back {
  background-color: #ffffff;
  transform: rotateY(180deg);
}

.card .back ul {
  list-style: none;
  padding: 0;
}

.card .back ul li {
  font-family: 'Work Sans', sans-serif;
  margin-bottom: 6px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
  background-color: #ededed;
  border-radius: .2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
</style>




 


