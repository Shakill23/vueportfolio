<template>
  
  <main class="wrapper container-fluid">
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
    <section id="home" class="container">
      
      <div data-aos="fade-down" data-aos-duration="1500" class="row justify-content-center align-items-center">
        <!-- Profile Picture Column -->
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <img id="profilePic" class="img-fluid zoom-in-hover"
            src="https://shakill23.github.io/allImages/images/formalNew-removebg.png" alt="profilePic" loading="eager">
        </div>

        <!-- Name and Role Column -->
        <div class="col-lg-8 col-md-6 col-sm-12 mb-4 text-center text-md-start">
          <h2 id="shakeel" class="cool-text" data-text="Shakeel Davids">Shakeel Davids</h2>
          <h2 class="aspiring">Aspiring Developer</h2>
          
          <!-- Download CV Button -->
          <a href="https://shakill23.github.io/allImages/images/Shakeel Davids CV Resume.pdf" download target="_blank">
            <button class="download-cv-btn">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Container padding for responsiveness */
#home {
  padding-top: 8%;
  padding-bottom: 5%;
}

/* Profile Picture */
#profilePic {
  max-width: 100%;
  max-height: 80vh; /* This ensures the image won't overflow the viewport */
  object-fit: cover; /* Ensures the image covers the area without getting cut */
  border-radius: 5%;
  margin-bottom: 2rem;
}

/* Cool text for the name */
.cool-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

/* Aspiring text */
.aspiring {
  font-size: 1.5rem;
  color: #666;
}

/* Hover effect on profile picture */
.zoom-in-hover {
  transition: transform 0.3s ease;
}

/* Style for the Download CV Button */
.download-cv-btn {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  color: #000000;
  background: rgba(255, 255, 255, 0.4); /* Semi-transparent white */
  backdrop-filter: blur(8px); /* Frosted glass effect */
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.download-cv-btn:hover {
  background: rgba(255, 56, 42, 0.8); 
  color: rgb(255, 255, 255);
  transform: scale(1.05); /* Slightly enlarges on hover */
}

/* Responsive text size */
@media (max-width: 768px) {
  .cool-text {
    font-size: 2rem;
  }

  .aspiring {
    font-size: 1.25rem;
  }

  #profilePic {
    max-height: 50vh; /* Adjusts image height for smaller screens */
  }
}

.box div{
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 6px solid rgb(255, 255, 255);
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
