<template>
  <div class="wrapper container-fluid">
    <div class="box">
      <!-- Box decorative divs -->
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <section id="skills" class="container">
      <div class="col-lg-8 col-md-10 col-sm-12 col-12">
        <h2 id="skillsHead">Skills</h2>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <!-- First Skill Card with Peek Feature -->
            <div data-aos="fade-up" data-aos-delay="200"
                 class="card-container skills"
                 style="width:200px; height:200px;" ref="peekCard">
              <div class="card skills" :class="{ 'peekflip': peekActive }">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/icons8-mysql.svg" alt="MySQL" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">MySQL</li>
                    <li class="space">Life Choices Academy</li>
                    <a href="https://lifechoicesacademy.com" class="btn btn-visit" target="_blank">
                      Visit
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Skill Card 2 -->
            <div data-aos="fade-up" data-aos-delay="350"
                 class="card-container skills"
                 style="width:200px; height:200px;">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/python.png" alt="Python" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">Python</li>
                    <li class="space">LC STUDIO</li>
                    <a href="https://lcstudio.co.za" class="btn btn-visit" target="_blank">
                      Visit
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Skill Card 3 -->
            <div data-aos="fade-up" data-aos-delay="450"
                 class="card-container skills"
                 style="width:200px; height:200px;">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/js.png" alt="JavaScript" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">JavaScript</li>
                    <li class="space">HyperionDev</li>
                    <a href="https://www.hyperiondev.com" class="btn btn-visit" target="_blank">
                      Visit
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Skill Card 4 -->
            <div data-aos="fade-up" data-aos-delay="550"
                 class="card-container skills"
                 style="width:200px; height:200px;">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/c++.png" alt="C++" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">C++</li>
                    <li class="space">LC STUDIO</li>
                    <a href="https://lcstudio.co.za" class="btn btn-visit" target="_blank">
                      Visit
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Skill Card 5 -->
            <div data-aos="fade-up" data-aos-delay="650"
                 class="card-container skills"
                 style="width:200px; height:200px;">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/react.jpeg" alt="React.js" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">React.js</li>
                    <li class="space">Self-Taught</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Skill Card 6 -->
            <div data-aos="fade-up" data-aos-delay="750"
                 class="card-container skills"
                 style="width:200px; height:200px;">
              <div class="card skills">
                <div class="card-face front skills">
                  <h4>
                    <img src="https://shakill23.github.io/allImages/images/resstApi.png" alt="REST APIs" loading="lazy">
                  </h4>
                </div>
                <div class="card-face back skills">
                  <ul>
                    <li id="liHead">REST APIs</li>
                    <li class="space">Life Choices Academy</li>
                    <a href="https://lifechoicesacademy.com" class="btn btn-visit" target="_blank">
                      Visit
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <!-- See All Button -->
            <div class="row justify-content-center mt-4">
              <div class="col-12 text-center">
                <button class="download-cv-btn" @click="openModal">
                  Other Skills
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Modified Modal Transition -->
    <transition name="modal-slide-fade">
      <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-custom">
          <div class="modal-header-custom">
            <h5 class="modal-title">All Skills</h5>
            <button type="button" class="btn-close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body-custom">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <tbody>
                  <!-- Modal: List skills in ranking order -->
                  <!-- 1. Node.js -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/node.png" alt="Node.js" class="skill-icon"></td>
                    <td>Node.js</td>
                    <td><a href="https://www.lifechoicesacademy.com" target="_blank">Life Choices Academy</a></td>
                  </tr>
                  <!-- 2. Linux -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/linux.png" alt="Linux" class="skill-icon"></td>
                    <td>Linux</td>
                    <td><a href="https://www.lcstudio.com" target="_blank">LC STUDIO</a></td>
                  </tr>
                  <!-- 3. Agile Development -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/agile.jpg" alt="Agile Development" class="skill-icon"></td>
                    <td>Agile Development</td>
                    <td><a href="https://www.lcstudio.com" target="_blank">LC STUDIO</a></td>
                  </tr>
                  <!-- 4. Cyber Security -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/cyber.png" alt="Cyber Security" class="skill-icon"></td>
                    <td>Cyber Security</td>
                    <td><a href="https://www.lcstudio.com" target="_blank">LC STUDIO</a></td>
                  </tr>
                  <!-- 5. Vue.js -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/vue.png" alt="Vue.js" class="skill-icon"></td>
                    <td>Vue.js</td>
                    <td><a href="https://www.lifechoicesacademy.com" target="_blank">Life Choices Academy</a></td>
                  </tr>
                  <!-- 6. GitHub -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/github.png" alt="GitHub" class="skill-icon"></td>
                    <td>GitHub</td>
                    <td><a href="https://www.lifechoicesacademy.com" target="_blank">Life Choices Academy</a></td>
                  </tr>
                  <!-- 7. HTML -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/html-5.png" alt="HTML" class="skill-icon"></td>
                    <td>HTML</td>
                    <td><a href="https://www.hyperiondev.com" target="_blank">HyperionDev</a></td>
                  </tr>
                  <!-- 8. CSS -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/css-3.png" alt="CSS" class="skill-icon"></td>
                    <td>CSS</td>
                    <td><a href="https://www.hyperiondev.com" target="_blank">HyperionDev</a></td>
                  </tr>
                  <!-- 9. Bootstrap -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/bootstrap.png" alt="Bootstrap" class="skill-icon"></td>
                    <td>Bootstrap</td>
                    <td><a href="https://www.hyperiondev.com" target="_blank">HyperionDev</a></td>
                  </tr>
                  <!-- 10. Figma -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/figma.png" alt="Figma" class="skill-icon"></td>
                    <td>Figma</td>
                    <td><a href="https://www.lifechoicesacademy.com" target="_blank">Life Choices Academy</a></td>
                  </tr>
                  <!-- 11. UIX -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/uix.png" alt="UIX" class="skill-icon"></td>
                    <td>UIX</td>
                    <td><a href="https://www.lcstudio.com" target="_blank">LC STUDIO</a></td>
                  </tr>
                  <!-- 12. Postman API -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/postman.png" alt="Postman API" class="skill-icon"></td>
                    <td>Postman API</td>
                    <td><a href="https://www.lifechoicesacademy.com" target="_blank">Life Choices Academy</a></td>
                  </tr>
                  <!-- 13. Flask -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/flask.png" alt="Flask" class="skill-icon"></td>
                    <td>Flask</td>
                    <td><a href="https://www.lcstudio.com" target="_blank">LC STUDIO</a></td>
                  </tr>
                  <!-- 14. JSON -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/json.png" alt="JSON" class="skill-icon"></td>
                    <td>JSON</td>
                    <td><a href="https://www.hyperiondev.com" target="_blank">HyperionDev</a></td>
                  </tr>
                  <!-- 15. Microsoft Excel -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/excel1.png" alt="Microsoft Excel" class="skill-icon"></td>
                    <td>Microsoft Excel</td>
                    <td>Self-Taught</td>
                  </tr>
                  <!-- 16. Microsoft Word -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/word.png" alt="Microsoft Word" class="skill-icon"></td>
                    <td>Microsoft Word</td>
                    <td>Self-Taught</td>
                  </tr>
                  <!-- 17. GIMP -->
                  <tr>
                    <td><img src="https://shakill23.github.io/allImages/images/gimp.png" alt="GIMP" class="skill-icon"></td>
                    <td>GIMP</td>
                    <td>Self-Taught</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      peekActive: false
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startPeek();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (this.$refs.peekCard) {
      observer.observe(this.$refs.peekCard);
    }
  },
  methods: {
    startPeek() {
      setInterval(() => {
        this.peekActive = true;
        setTimeout(() => {
          this.peekActive = false;
        }, 3000);
      }, 6000);
    },
    openModal() {
      this.modalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalVisible = false;
      document.body.style.overflow = '';
    }
  }
}
</script>
<style scoped>
/* Add horizontal padding to prevent the <li> items from touching the card edges */
.card.skills .back ul {
  list-style: none;
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.card.skills .back ul li {
  width: 100%;
  text-align: center;
  padding: 4px 5px;
  font-size: 10px;
  font-weight: bold;
  color: black;
  background-color: #ededed;
  border-radius: 0.2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

/* Extra spacing between liHead and subsequent li */
#liHead + .space {
  margin-top: 5px;
}

/* Ensure consistent spacing for any anchor within ul */
.card.skills .back ul a {
  margin-top: 5px;
}

/* Updated Visit Button: padding changed as requested */
.btn-visit {
  background-color: rgba(255, 18, 1, 0.8);
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 5px 10px;
  text-decoration: none;
}
.btn-visit:hover {
  transform: scale(1.05);
  text-decoration: none;
}

/* Updated See All Button styled like .download-cv-btn */
.download-cv-btn {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  color: #000;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
.download-cv-btn:hover {
  background: rgba(255, 56, 42, 0.8);
  color: #fff;
  transform: scale(1.05);
}

/* === Modal Slide + Fade Transition === */
.modal-slide-fade-enter-active,
.modal-slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.modal-slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.modal-slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.modal-slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.modal-slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  overflow-y: auto;
  padding: 20px;
}

/* Custom Modal */
.modal-custom {
  background: #fff;
  border: 2px solid #333;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
}
.modal-header-custom {
  background-color: #ff0000;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header-custom .modal-title {
  margin: 0;
}
.btn-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: white;
}
.modal-body-custom {
  padding: 20px;
  overflow-y: auto;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Table and Skill Icon Styles */
.table-hover tbody tr:hover {
  background-color: rgba(224, 209, 209, 0.3);
}
.skill-icon {
  width: 40px;
  height: 40px;
}
.table td {
  vertical-align: middle;
  padding: 1rem;
  color: #333;
}
.table a {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
}
.table a:hover {
  color: #333;
  text-decoration: none;
}

/* Global Styles */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#skillsHead {
  padding: 0 0 10px 0;
  margin: 0 0 30px 0; 
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
  padding: 55px;
}
#skills {
  padding: 0;
  text-align: center;
}
h2,
h3 {
  margin-bottom: 20px;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
}
.row {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
}

/* Flip Card Styles */
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

/* 1. Hide the icons (and their table cell) on anything below 576px wide */
@media (max-width: 576px) {
  /* Completely hide the <img> */
  .skill-icon {
    display: none !important;
  }
  /* Also hide that first <td> so the empty cell collapses */
  .modal-body-custom .table td:first-child {
    display: none;
  }
  /* Shrink padding and font‐sizes for very small viewports */
  .modal-body-custom .table td {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}

/* 2. Make the modal fluid on very narrow screens */
@media (max-width: 480px) {
  .modal-custom {
    max-width: 100%;    /* allow full width */
    width: 95%;         /* slight gutter left/right */
    margin: 0 auto;     /* center if needed */
  }
  .modal-body-custom {
    padding: 10px;      /* reduce inner padding */
  }
  .modal-header-custom {
    padding: 8px 12px;  /* reduce header padding */
  }
  .modal-header-custom .modal-title {
    font-size: 1rem;    /* slightly smaller title */
  }
}

/* Peek Feature Class for first flip card */
.peekflip {
  transform: rotateY(180deg) !important;
}

/* Decorative Floating Boxes */
.box {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Below all other content */
  pointer-events: none; /* Prevent interaction */
  overflow: hidden;
}

.box div {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 6px solid #fff;
  background-color: transparent;
  animation: animate 10s infinite linear;
}

/* Position each box randomly */
.box div:nth-child(1) { top: 10%; left: 20%; animation-duration: 8s; }
.box div:nth-child(2) { top: 30%; left: 40%; animation-duration: 10s; }
.box div:nth-child(3) { top: 60%; left: 10%; animation-duration: 12s; }
.box div:nth-child(4) { top: 70%; left: 80%; animation-duration: 6s; }
.box div:nth-child(5) { top: 50%; left: 50%; animation-duration: 9s; }
.box div:nth-child(6) { top: 20%; left: 70%; animation-duration: 7s; }
.box div:nth-child(7) { top: 80%; left: 30%; animation-duration: 11s; }
.box div:nth-child(8) { top: 90%; left: 90%; animation-duration: 5s; }
.box div:nth-child(9) { top: 15%; left: 60%; animation-duration: 13s; }
.box div:nth-child(10) { top: 40%; left: 10%; animation-duration: 8s; }

/* Floating Animation */
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
