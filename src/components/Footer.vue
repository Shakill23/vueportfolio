<template>
  <footer class="container-fluid text-center" id="footer">
    <div class="row">
      <div class="col">
        <p>
          <span>Shakeel Davids</span>
          <span> &copy; {{ cYear }}</span>
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
#footer {
  background-color: #333;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
}

#footer p {
  margin: 0;
  font-weight: bold;
  color: #ffffffd0;
}

#footer span {
  font-size: 1rem;
}

body {
  min-height: 100vh; /* Ensure body stretches at least the height of the viewport */
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1; /* Push footer to the bottom */
}
</style>
