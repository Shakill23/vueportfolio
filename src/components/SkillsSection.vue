<template>
      <div class="wrapper container-fluid">
    <section id="skills" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12 col-12">
          <h2 id="skillsHead">Skills</h2>
          <div class="container mt-5">
            <div class="row justify-content-center">
              <div data-aos="fade-up" data-aos-delay="200"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/html-5.png" alt="html" loading="lazy">
                    </h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>Semantic
                        Markup</li>
                      <li>Forms</li>
                      <li>Media</li>
                      <li>Canvas</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="350"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/css-3.png" alt="css" loading="lazy"></h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>Flexbox</li>
                      <li>Animations
                      </li>
                      <li>Transitions
                      </li>
                      <li>Responsive
                        Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="450"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/js.png" alt="JavaScript" loading="lazy">
                    </h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>DOM
                        Manipulation</li>
                      <li>Events</li>
                      <li>Async/Await</li>
                      <li>ES6+</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="550"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/bootstrap.png" alt="bootstrap"
                        loading="lazy"></h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>Responsive
                        Design</li>
                      <li>Grid
                        System</li>
                      <li>Components
                      </li>
                      <li>Utilities</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="650"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/icons8-mysql.svg" alt="mysql"
                        loading="lazy"></h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>Database Design
                      </li>
                      <li>Complex SQL
                        Queries</li>
                      <li>Data
                        Manipulation</li>
                      <li>Performance
                        Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="750"
                class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                <div class="card skills">
                  <div class="card-face front skills">
                    <h4><img src="https://shakill23.github.io/allImages/images/icons8-nodejs.svg" alt="node"
                        loading="lazy"></h4>
                  </div>
                  <div class="card-face back skills">
                    <ul>
                      <li id="liHead">Advanced</li>
                      <li>Building
                        RESTful APIs</li>
                      <li>Middleware and Routing</li>
                      <li>Asynchronous
                        Programming</li>
                      <li>Database
                        Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#resume {
  padding: 0;
  background: rgb(224, 209, 209);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Work Sans', sans-serif;
  text-align: center;
}

section,
#resume,
.container-fluid {
  background-attachment: white;
}

#skills {
  padding: 50px 0;
  text-align: center;
  /* Center the heading */
}

h2,
h3 {
  margin-bottom: 20px;
  text-align: center;
  /* Center heading */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  /* Adjust left and right padding */
  max-width: 1200px;
  /* Limit the maximum width for central alignment */
  margin: 0 auto;
  /* Center the container */
}

.row {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* Ensure equal spacing between cards */
  gap: 20px;
  flex-wrap: wrap;
}


/* flip card */

#liHead {
  font-family: 'Work Sans', sans-serif;
  background-color: #999898;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin-top: 2px;
  padding: 10px;
}

.card-container.skills img {
  width: 6rem;
  height: 6rem;
}

.card-container.skills {
  perspective: 1000px;
}

.card.skills {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card-container.skills:hover .card.skills {
  transform: rotateY(180deg);
}

.card.skills .card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.card.skills .front {
  background-color: #ffffff;
  color: black;
}

.card.skills .back {
  background-color: #ffffff;
  transform: rotateY(180deg);
}

.card.skills .back ul {
  list-style: none;
  padding: 0;
}

.card.skills .back ul li {
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
