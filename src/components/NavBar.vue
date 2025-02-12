<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand text-black" href="#landing">
        <img src="https://shakill23.github.io/allImages/images/sdLogo.png" alt="OSAS-Logo" width="35" height="35" class="d-inline-block align-text-center">
        <span class="brand-name">Digital Portfolio</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#landing"><i class="bi bi-house-door"></i> Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about"><i class="bi bi-file-person-fill"></i> About</a></li>
          <li class="nav-item"><a class="nav-link" href="#resume"><i class="bi bi-book-half"></i> Education & Experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#project"><i class="bi bi-cast"></i> Project</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact"><i class="bi bi-person-lines-fill"></i> Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#navbar {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 999;
  top: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}

img[alt="icon"] {
    max-width: 20px !important;
    max-height: 20px !important;
    margin: 5px;
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
  background-image: none;
  border: 2px solid #333;
  border-radius: 50%;
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  position: absolute;
  background-color: #333;
  width: 100%;
  height: 2px;
  left: 0;
}

.navbar-toggler-icon::before {
  top: 8px;
}

.navbar-toggler-icon::after {
  top: 16px;
}

nav {
  padding: 15px 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  padding: 10px;
  transition: color 0.3s ease, transform 0.3s ease;
}

nav a:hover {
  color: #ff0000;
  transform: translateY(-2px);
}

nav a.active {
  color: #00bfff;
}

@media (max-width: 995px) {
  #navbar {
    background: rgba(255, 255, 255, 0.8);
  }

  nav {
    padding: 10px 20px;
  }

  .brand-name {
    font-size: 1rem;
  }
}
</style>
