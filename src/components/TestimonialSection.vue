<template lang="">
    <div class="testimonials">
      <h1 class="testheader text-uppercase fw-bold-semi">References</h1>
      <section class="testimon container" v-if="$store.state.testimonials.length > 0">
          <div class="card row" v-for="testimonial in $store.state.testimonials" :key="testimonial">
            <div class="poster">
              <img :src= testimonial.profile alt="" />
            </div>
            <div class="details">
              <h1 class="testname1">{{testimonial.name}} {{testimonial.surname}}</h1>
              <div class="info">
                <p>
                 {{testimonial.quotes}}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div v-else>
          <SpinnerView/>
        </div>
    </div>
  </template>
  <script>
  
  export default {
    
  }
  </script>

<style lang="scss" scoped>

</style>