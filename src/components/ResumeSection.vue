<template lang="">
    <div class="resume">
      <h1 class="resumeW text-uppercase fw-bold-semi">Education</h1>
     <section class="thirdSec row" id="resumee" >
         <div v-for="resum in $store.state.resume" :key="resum" >
           <div class="col-12 my-3">
             <img class="logo" :src= resum.logo>
           </div>
           <div class="col words mx-3">
             <h4>{{resum.year}}</h4>
             <h2>{{resum.place}}</h2>
             <p class="container">
            {{resum.description}}
             </p>
           </div>
         </div>
       </section>
    </div>
    <div class="resume work">
    <h1 class=" resumeW text-uppercase fw-bold-semi" >Experience</h1>
    <section class="">
     <div class="col words mt-3">
       <h5>2020 - 2024</h5>
       <h2>Administration</h2>
       <p>I did admin work part-time for a company and the tasks I had to was: scanning documents like passports and IDs, booking train and airline tickets, editing and working with Excel spreadsheets.</p>
     </div>
    </section>
   </div>
    <br><br>
    <section id="skills" class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10 col-sm-12 col-12">
                        <h2>Skills</h2>
                        <div class="container mt-5">
                            <div class="row justify-content-center">
                                <div data-aos="fade-up" data-aos-delay="100"
                                    class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                                    <div class="card skills">
                                        <div class="card-face front skills">
                                            <h4><img src="https://shakill23.github.io/allImages/images/html-5.png"
                                                    alt="html" loading="lazy"></h4>
                                        </div>
                                        <div class="card-face back skills">

                                            <ul>
                                                <li id="liHead">Intermediate</li>
                                                <li class="move-on-hover"><img
                                                        src="https://shakill23.github.io/allImages/images/semantic-web.png"
                                                        alt="icon">Semantic Markup</li>
                                                <li class="move-on-hover"><img
                                                        src="https://shakill23.github.io/allImages/images/form.png"
                                                        alt="icon">Forms</li>
                                                <li class="move-on-hover"><img
                                                        src="https://shakill23.github.io/allImages/images/website.png"
                                                        alt="icon">Media</li>
                                                <li class="move-on-hover"><img
                                                        src="https://shakill23.github.io/allImages/images/canvas.png"
                                                        alt="icon">Canvas</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200"
                                    class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                                    <div class="card skills">
                                        <div class="card-face front skills">
                                            <h4><img src="https://shakill23.github.io/allImages/images/css-3.png"
                                                    alt="css" loading="lazy"></h4>
                                        </div>
                                        <div class="card-face back skills">

                                            <ul>
                                                <li id="liHead">Intermediate</li>
                                                <li class="move-on-hover2"><img
                                                        src="https://shakill23.github.io/allImages/images/menu.png"
                                                        alt="icon">Flexbox</li>
                                                <li class="move-on-hover2"><img
                                                        src="https://shakill23.github.io/allImages/images/animation.png"
                                                        alt="icon">Animations</li>
                                                <li class="move-on-hover2"><img
                                                        src="https://shakill23.github.io/allImages/images/transition.png"
                                                        alt="icon">Transitions</li>
                                                <li class="move-on-hover2"><img
                                                        src="https://shakill23.github.io/allImages/images/responsive.png"
                                                        alt="icon">Responsive Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300"
                                    class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                                    <div class="card skills">
                                        <div class="card-face front skills">
                                            <h4><img src="https://shakill23.github.io/allImages/images/js.png"
                                                    alt="JavaScript" loading="lazy"></h4>
                                        </div>
                                        <div class="card-face back skills">

                                            <ul>
                                                <li id="liHead">Intermediate</li>
                                                <li class="move-on-hover3"><img
                                                        src="https://shakill23.github.io/allImages/images/javascript.png"
                                                        alt="icon">DOM Manipulation</li>
                                                <li class="move-on-hover3"><img
                                                        src="https://shakill23.github.io/allImages/images/event.png"
                                                        alt="icon">Events</li>
                                                <li class="move-on-hover3"><img
                                                        src="https://shakill23.github.io/allImages/images/time.png"
                                                        alt="icon">Async/Await</li>
                                                <li class="move-on-hover3"><img
                                                        src="https://shakill23.github.io/allImages/images/javascript.png"
                                                        alt="icon">ES6+</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400"
                                    class="card-container col-lg-3 col-md-4 col-sm-6 col-6 skills">
                                    <div class="card skills">
                                        <div class="card-face front skills">
                                            <h4><img src="https://shakill23.github.io/allImages/images/bootstrap.png"
                                                    alt="bootstrap" loading="lazy"></h4>
                                        </div>
                                        <div class="card-face back skills">

                                            <ul>
                                                <li id="liHead">Intermediate</li>
                                                <li class="move-on-hover4"><img
                                                        src="https://shakill23.github.io/allImages/images/responsive.png"
                                                        alt="icon">Responsive Design</li>
                                                <li class="move-on-hover4"><img
                                                        src="https://shakill23.github.io/allImages/images/grid-organization.png"
                                                        alt="icon">Grid System</li>
                                                <li class="move-on-hover4"><img
                                                        src="https://shakill23.github.io/allImages/images/database.png"
                                                        alt="icon">Components</li>
                                                <li class="move-on-hover4"><img
                                                        src="https://shakill23.github.io/allImages/images/settings.png"
                                                        alt="icon">Utilities</li>
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
<script>
export default {

}

</script>
<style scoped></style>