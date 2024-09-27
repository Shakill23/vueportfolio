<template>

    <main class="container-fluid">
      <section id="home" class="container">
        <div data-aos="fade-down" data-aos-duration="1500" class="row justify-content-center align-items-center">
          <!-- Profile Picture Column -->
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <img id="profilePic" class="img-fluid zoom-in-hover"
              src="https://shakill23.github.io/allImages/images/sdFormal.jpg" alt="profilePic" loading="lazy">
          </div>
          
          <!-- Name and Role Column -->
          <div class="col-lg-8 col-md-6 col-sm-12 mb-4">
            <h2 id="shakeel" class="cool-text" data-text="Shakeel Davids">Shakeel Davids</h2>
            <h2 class="aspiring">Aspiring Developer</h2>
          </div>

        </div>

    


        
      </section>
    </main>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>

#home{
  padding-top: 8%;
}

  
    .cool-text {
      font-size: 2.5rem; 
      font-weight: bold;
      color: #333; 
    }
  
    .aspiring {
      font-size: 1.5rem; 
      color: #666;
    }
  
    #profilePic {
      max-width: 100%; 
      border-radius: 5%; 
      margin-bottom: 2rem;
    }
  
    .zoom-in-hover {
      transition: transform 0.3s ease;
    }
  
    .zoom-in-hover:hover {
      transform: scale(1.1); /* Example zoom on hover */
    }
  </style>
  

<script setup>

</script>

<style scoped></style>

