<template>
  
  <section id="resume" class="wrapper container-fluid">
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
      <div></div> 
      <div></div> 
      <div></div> 
      <div></div> 
      <div></div> 
    </div>
    <div class="row justify-content-center">
      
      <h2 data-aos="fade-down" data-aos-duration="1000" id="resumeHead">Resume</h2>

      <!-- Flexbox container for Education and Experience -->
      <div class="row education-experience-container">
        <!-- Education Section -->
        <div class="col-lg-6 col-md-12 col-sm-12 education-section">
          <h3 id="education" data-aos="fade-down" data-aos-duration="1000">Education</h3>
          <div class="block education-block" data-aos="fade-right" data-aos-delay="200">
            <p><i class="bi bi-award"></i>2020 - 2022</p>
            <h4>Norman Henshilwood High School</h4>
            <p>I studied Computer Applications and Technology, Physical Science, Pure Mathematics, and Business Studies.</p>
          </div>
          <div class="block education-block" data-aos="fade-right" data-aos-delay="200">
            <p><i class="bi bi-award"></i>Feb 2023 - Sep 2023</p>
            <h4>HyperionDev</h4>
            <p>I completed a 6-month online course at HyperionDev, focusing on HTML, CSS, JavaScript, and Bootstrap.</p>
          </div>
          <div class="block education-block" data-aos="fade-right" data-aos-delay="200">
            <p><i class="bi bi-award"></i>2024 - Sep 2024</p>
            <h4>Life Choices Coding Academy</h4>
            <p>This bootcamp taught Web Development fundamentals, including coding languages like HTML, CSS, JavaScript, MySQL, and more.</p>
          </div>
        </div>

        <!-- Work & Experience Section -->
        <div class="col-lg-6 col-md-12 col-sm-12 experience-section">
          <h3 data-aos="fade-down" data-aos-duration="1000">Work & Experience</h3>
          <div class="block work-block" data-aos="fade-left" data-aos-delay="200">
            <p><i class="bi bi-briefcase"></i>2020 - 2024</p>
            <h4>Administration</h4>
            <p>I handled admin tasks like scanning documents, booking tickets, and working with Excel spreadsheets.</p>
          </div>
          <div class="block work-block" data-aos="fade-left" data-aos-delay="200">
  <p><i class="bi bi-briefcase"></i>2024 - Present</p>
  <h4>Intern at LC Studio</h4>
  <p>Currently, I am interning at LC Studio, where I focus on cyber security. I actively participate in Scrum meetings with my team and tackle real-world projects while continuously upskilling in my spare time.</p>
</div>

          <!-- Placeholder for additional experience -->
          <div class="block placeholder-block" data-aos="fade-left" data-aos-delay="200">
            <h4>Working on it...</h4>
            <p>More experiences and achievements are coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#resume {
  padding: 0;
  background: rgb(224, 209, 209);
}


h3 {
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  padding-top: 55px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  text-align: center;
}

/* Container for Education and Experience sections */
.education-experience-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
}

.education-section,
.experience-section {
  display: flex;
  flex-direction: column;
}

.block {
  min-height: 250px; /* Set minimum height based on content balance */
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  /* transition: transform 0.2s ease; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.placeholder-block {
  visibility: hidden; /* Makes the yellow block invisible but keeps its size */
}

/* Block hover effect */
.block:hover {
  transform: scale(1.01);
}

/* Responsive styling */
@media (max-width: 768px) {
  .education-experience-container {
    flex-direction: column;
  }

  .block {
    margin-bottom: 20px;
  }
}

.box div{
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 6px solid rgb(0, 0, 0);
    z-index: 0;
}

.box div:nth-child(1){
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(2){
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
}

.box div:nth-child(3){
    top: 17%;
    left: 6%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(4){
    top: 20%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(5){
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
}

.box div:nth-child(6){
    top: 80%;
    left: 70%;
    animation: animate 12s linear infinite;
}

.box div:nth-child(7){
    top: 60%;
    left: 80%;
    animation: animate 15s linear infinite;
}

.box div:nth-child(8){
    top: 32%;
    left: 25%;
    animation: animate 16s linear infinite;
}

.box div:nth-child(9){
    top: 90%;
    left: 25%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(10){
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

@keyframes animate{
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;

    }
}


</style>


