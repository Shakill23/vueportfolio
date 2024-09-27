<template>
  <section id="resume" class="container-fluid">
    <div class="row justify-content-center">
      <h2>Resume</h2>
      <h3 id="education">Education</h3>
      <div v-for="resum in $store.state.resume" :key="resum">
        <div class="row justify-content-center">
          <div data-aos="fade-right" data-aos-delay="200" class="block col-lg-4 col-md-6 col-sm-12">
            <p><img src="https://shakill23.github.io/allImages/images/graduation-hat.png" alt="icon">{{ resum.year }}</p>
            <h4>{{ resum.place }}</h4>
            <p>{{ resum.description }}</p>
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
            <p>I did admin work part-time for a company and the tasks I had to was: scanning documents like passports
              and
              IDs, booking train and airline tickets, editing and working with Excel spreadsheets.</p>
          </div>
        </div>
        <div class="block col-lg-8 col-md-10 col-sm-12 col-12 zoom-in-hover">
        <div data-aos="zoom-out-left" data-aos-delay="100">
          <p><img src="https://shakill23.github.io/allImages/images/icons8-cyber-security-50.png" alt="icon">2024-Present</p>
          <h4>LC Studio</h4>
        </div>
        
          <div data-aos="zoom-out-left" data-aos-delay="50">
            <p>I did admin work part-time for a company and the tasks I had to was: scanning documents like passports
              and
              IDs, booking train and airline tickets, editing and working with Excel spreadsheets.</p>
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
