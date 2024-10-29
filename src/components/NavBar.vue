<template>
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid">
        <div class="navbar-brand text-black" href="#landing">
          <img src="https://shakill23.github.io/allImages/images/sdLogo.png" alt="OSAS-Logo" width="35" height="35" class="d-inline-block align-text-center">
          <span class="brand-name">Digital Portfolio</span>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#landing">
                <i class="bi bi-house-door"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <i class="bi bi-file-person-fill"></i> About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                <i class="bi bi-book-half"></i> Education & Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#project">
                <i class="bi bi-cast"></i> Project
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <i class="bi bi-person-lines-fill"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
<style scoped>
#navbar {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.8); /* Subtle opacity for the background */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  z-index: 999;
  top: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a shadow for depth */
  transition: background 0.3s ease; /* Smooth background transition */
}

.brand-name {
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
  margin-left: 8px;
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  background-color: #333;
  border-radius: 50%;
}

nav {
  padding: 15px 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  padding: 10px;
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth hover effects */
}

nav a:hover {
  color: #ff0000;
  transform: translateY(-2px); /* Slight lift on hover */
}

nav a.active {
  color: #00bfff;
}

@media (max-width: 995px) {
  #navbar {
    background: rgba(255, 255, 255, 1);
  }

  nav {
    padding: 10px 20px;
  }

  .brand-name {
    font-size: 1rem;
  }
}
</style>
  