<template>
    <footer class="container-fluid text-center sticky-sm-bottom">
      <div class="row">
        <div class="col">
          <p>
            <span class="shadow">Shakeel's Portfolio</span>
            <span>&copy; {{ cYear }}</span>
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  
  .footer {
    background-color: #ffffff;
    color: #000000;
    padding: 20px 0;
  }

  </style>
  