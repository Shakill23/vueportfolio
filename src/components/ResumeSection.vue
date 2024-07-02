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
       <h5>2024- PRESENT DAY</h5>
       <h2>LC Studio</h2>
       <h4 class="container">Intern</h4>
       <p>Assisting on client projects and part of the Web Development Learning Journey</p>
     </div>
    </section>
   </div>
    <br><br>
    <section id="forthSec">
     <h1 class="resumeW text-uppercase">Skills</h1>
           <div class="container-fluid theSk my-5 " >
               <div class="skilly" v-for="skill in $store.state.skills" :key="skill">
                 <img :src=skill.skill alt=""/>
               </div>
           </div>
       </section>
 
 </template>
 <script>
 export default {
  
 }
 
 </script>
 <style scoped>
 </style>