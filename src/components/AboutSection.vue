<template>
  <section id="about" class="about-section container-fluid">
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
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12 col-12">
          <h2 class="section-title" data-aos="fade-down" data-aos-duration="1000">About Me</h2>
          <div data-aos="fade-up" data-aos-delay="300" class="content-card">
            <div>
              <p class="intro-text">
                Hello! I'm <strong>Shakeel Davids</strong> – a driven and curious software developer with a deep passion
                for <span class="highlight">coding</span>. I’m always
                eager to learn, explore new perspectives, and find ways to simplify and optimize processes to make
                things easier and more effective.
              </p>

              <p>
                I specialize in creating efficient, responsive, and user-centered applications, using a variety of tools
                and technologies such as <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span
                  class="highlight">JavaScript</span>, <span class="highlight">Node.js</span>, <span
                  class="highlight">MySQL</span>, and <span class="highlight">Vue.js</span>.
              </p>

              <p>
                After completing my training at <strong>Life Choices Academy</strong> with distinction, I’m excited to
                apply my skills in a professional environment. I excel at <span class="highlight">breaking down complex
                  problems</span>, analyzing them logically, and developing efficient solutions. I am enthusiastic about
                tackling new challenges, thrive in collaborative team settings, and am equally comfortable working
                independently to deliver impactful results.
              </p>

              <p>
                Currently, as an intern at <strong>Life Choices Studios</strong>, I am building my expertise in
                full-stack development while expanding my knowledge base. I’m self-learning <span
                  class="highlight">Python</span> and <span class="highlight">React.js</span> to broaden my programming
                versatility and enhance my ability to develop dynamic, user-focused applications. Additionally, I'm
                planning to learn <span class="highlight">C#</span>, driven by my interest in game development, backend
                programming, and the rewarding challenge of debugging.
              </p>

              <p class="closing-text">
                I am excited to continue growing as a developer and look forward to taking on new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Global reset and box sizing */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Smooth scroll for anchor links */
html {
  scroll-behavior: smooth;
}

/* Styling for the 'About Me' section */
.about-section {
  padding: 80px 0;
  background: rgb(224, 209, 209);
  text-align: center;
}

/* Section Title */
.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}



/* Section Title animation underline */
/* .section-title::after {
  content: '';
  width: 50px;
  height: 4px;
  background-color: #ff0000;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.4s ease-in-out;
} */

.section-title:hover::after {
  width: 100px;
}

/* Container */
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

/* Card effect for content */
.content-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  transition: transform 0.3s ease-in-out, box-shadow 0.006s ease-in-out;
}

/* Hover effect for the card */
.content-card:hover {
  /* transform: translateY(-15px); */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Smooth hover effect for zoom */
.zoom-out-hover {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.zoom-out-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Paragraph styling with better spacing */
p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: left;
}

/* Highlighted text styling */
.highlight {
  color: #ff0000;
  font-weight: bold;
}

/* Introductory and closing text */
.intro-text {
  font-size: 1.2rem;
  font-weight: bold;
}

.closing-text {
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 30px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .about-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 2.4rem;
  }

  .content-card {
    padding: 20px;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
  }
}

.box div {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 6px solid rgb(0, 0, 0);
  z-index: 0;
}

.box div:nth-child(1) {
  top: 12%;
  left: 42%;
  animation: animate 10s linear infinite;
}

.box div:nth-child(2) {
  top: 70%;
  left: 50%;
  animation: animate 7s linear infinite;
}

.box div:nth-child(3) {
  top: 17%;
  left: 6%;
  animation: animate 9s linear infinite;
}

.box div:nth-child(4) {
  top: 20%;
  left: 60%;
  animation: animate 10s linear infinite;
}

.box div:nth-child(5) {
  top: 67%;
  left: 10%;
  animation: animate 6s linear infinite;
}

.box div:nth-child(6) {
  top: 80%;
  left: 70%;
  animation: animate 12s linear infinite;
}

.box div:nth-child(7) {
  top: 60%;
  left: 80%;
  animation: animate 15s linear infinite;
}

.box div:nth-child(8) {
  top: 32%;
  left: 25%;
  animation: animate 16s linear infinite;
}

.box div:nth-child(9) {
  top: 90%;
  left: 25%;
  animation: animate 9s linear infinite;
}

.box div:nth-child(10) {
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
