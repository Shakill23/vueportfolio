<template>
  <main class="wrapper container-fluid">
    <!-- Decorative Animation -->
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
    </div>

    <!-- Main Section -->
    <section id="home" class="container">
      <div class="row justify-content-center align-items-center">
        <!-- Profile Picture Column -->
        <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="0" data-aos-anchor-placement="top-bottom"
          data-aos-once="false" data-aos-mirror="true" class="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
          <img id="profilePic" class="img-fluid zoom-in-hover"
            src="https://shakill23.github.io/allImages/images/formalNew-removebg.png" alt="profilePic" loading="lazy">
        </div>

        <!-- Name and Role Column -->
        <div class="col-lg-8 col-md-6 col-sm-12 mb-4 text-center text-md-start" id="text">
          <h2 id="shakeel" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="0"
            data-aos-anchor-placement="top-bottom" data-aos-once="false" data-aos-mirror="true" class="cool-text"
            data-text="Shakeel Davids">
            Shakeel Davids</h2>
          <h2 class="aspiring" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="0"
            data-aos-anchor-placement="top-bottom" data-aos-once="false" data-aos-mirror="true">Aspiring Developer
          </h2>

          <!-- Download CV Button -->
          <a href="https://shakill23.github.io/allImages/images/Shakeel Davids CV Resume.pdf" download target="_blank">
            <button class="download-cv-btn" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0"
              data-aos-anchor-placement="top-bottom" data-aos-once="false" data-aos-mirror="true">View
              CV</button>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
/* Main Section */
#home {
  padding-top: calc(40px + 10%);
  padding-bottom: 5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

#text {
  padding-left: 2rem;
}

/* Profile Picture Styling */
#profilePic {
  max-width: 280px;
  max-height: 65vh;
  object-fit: contain;
  object-position: top;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  margin-top: 1rem;
}

/* Cool Text Styling */
.cool-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.cool-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff9e;
  overflow: hidden;
  animation: glow-animation 1.87s ease-in-out infinite alternate;
}

/* Aspiring Developer Subtitle */
.aspiring {
  font-size: 1.5rem;
  color: #666;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0.25rem 0;
  text-shadow: 0.5px 0.5px 2px rgba(255, 255, 255, 0.7);
}

/* Download CV Button */
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

/* Decorative Floating Boxes */
.box {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* Below all other content */
  pointer-events: none;
  /* Prevent interaction */
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
.box div:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-duration: 8s;
}

.box div:nth-child(2) {
  top: 30%;
  left: 40%;
  animation-duration: 10s;
}

.box div:nth-child(3) {
  top: 60%;
  left: 10%;
  animation-duration: 12s;
}

.box div:nth-child(4) {
  top: 70%;
  left: 80%;
  animation-duration: 6s;
}

.box div:nth-child(5) {
  top: 50%;
  left: 50%;
  animation-duration: 9s;
}

.box div:nth-child(6) {
  top: 20%;
  left: 70%;
  animation-duration: 7s;
}

.box div:nth-child(7) {
  top: 80%;
  left: 30%;
  animation-duration: 11s;
}

.box div:nth-child(8) {
  top: 90%;
  left: 90%;
  animation-duration: 5s;
}

.box div:nth-child(9) {
  top: 15%;
  left: 60%;
  animation-duration: 13s;
}

.box div:nth-child(10) {
  top: 40%;
  left: 10%;
  animation-duration: 8s;
}

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
