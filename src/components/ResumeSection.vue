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
      <h4 class="resume-h4">Norman Henshilwood High School</h4>
      <p>Studied Computer Applications and Technology, Physical Science, Pure Mathematics, and Business Studies.</p>
    </div>
    <div class="block education-block" data-aos="fade-right" data-aos-delay="200">
      <p><i class="bi bi-award"></i>Mar 2023 - Sep 2023</p>
      <h4 class="resume-h4">HyperionDev</h4>
      <p>Completed a 6-month online coding course, gaining experience with remote work, virtual collaboration, and online meetings with classmates and mentors.</p>
    </div>
    <div class="block education-block" data-aos="fade-right" data-aos-delay="200">
      <p><i class="bi bi-award"></i>Mar 2024 - Sep 2024</p>
      <h4 class="resume-h4">Life Choices Academy</h4>
      <p>This intensive bootcamp taught me web development fundamentals and teamwork, while helping me discover my ability to excel under pressure. There's nothing more stressful than code breaking minutes before submission deadlines.</p>
    </div>
  </div>

  <!-- Work & Experience Section -->
  <div class="col-lg-6 col-md-12 col-sm-12 experience-section">
    <h3 data-aos="fade-down" data-aos-duration="1000">Work & Experience</h3>
    <div class="block work-block" data-aos="fade-left" data-aos-delay="200">
      <p><i class="bi bi-briefcase"></i>2021 - 2022</p>
      <h4 class="resume-h4">New Age SA Travel & Tours</h4>
      <p>Handled administrative tasks including document scanning, ticket booking, and working with Excel spreadsheets and Word documents.</p>
    </div>
    <div class="block work-block" data-aos="fade-left" data-aos-delay="200">
      <p><i class="bi bi-briefcase"></i>2024 - Aug 2025</p>
      <h4 class="resume-h4">LC Studio</h4>
      <p>As an intern, I actively participated in Scrum meetings, collaborated in team environments, and tackled real-world projects while continuously upskilling in my spare time. This experience taught me that there's more to being a developer than just coding.</p>
    </div>
    <div class="block work-block" data-aos="fade-left" data-aos-delay="200">
      <p><i class="bi bi-briefcase"></i>Sep 2025 - Present</p>
      <h4 class="resume-h4">Teleperformance</h4>
      <p>I thought my foundation of patience and problem-solving was solid, but being a Customer Service Agent helped me push beyond those limits. I look forward to applying this enhanced experience in a coding environment.</p>
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
  min-height: 250px; 
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer; 
}

/* H4 with hover effect - fixed to text width */
.resume-h4 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: inline-block;
  width: fit-content; 
}

.resume-h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0; 
  height: 3px;
  background: #ff4757;
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Trigger underline when hovering over the entire block */
.block:hover .resume-h4::after {
  width: 100%; 
}

.block:hover .resume-h4 {
  color: #2d3748;
}

/* Block hover effect */
.block:hover {
  transform: scale(1.01);
}

.placeholder-block {
  visibility: hidden; 
}

/* Responsive styling */
@media (max-width: 768px) {
  .education-experience-container {
    flex-direction: column;
  }

  .block {
    margin-bottom: 20px;
  }
  
  .resume-h4 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .resume-h4 {
    font-size: 1.2rem;
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