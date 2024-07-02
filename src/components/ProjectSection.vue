<template lang="">
    <section class="projsect " v-if="$store.state.projects.length > 0">
       <h1 class="projh2 text-uppercase fw-bold-semi">Projects</h1>
     <div class="projgrid" >
         <div class="card-2" v-for="project in $store.state.projects" :key="project">
           <div class="cards cee">
             <div class="imageProj">
               <img :src=project.image />
             </div>
             <div class="card-body mine">
               <h2>{{project.name}}</h2>
               <p>{{project.description}}</p>
               <div class="buttons">
                 <a :href=project.gitHub target="_blank" class="icon"><i class="fa fa-github"></i></a>
                 <a :href=project.netlify target="_blank" class="icon"><i class="fa fa-link"></i></a>
               </div>
             </div>
           </div>
         </div>

     </div>
     </section>
  <div v-else>
    <SpinnerView/>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>

</style>