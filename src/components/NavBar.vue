<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand text-black" href="#landing">
        <img src="https://shakill23.github.io/allImages/images/sdLogo.png" alt="OSAS-Logo" class="logo">
        <span class="brand-name">Digital Portfolio</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Toggle navigation"
        :class="{ collapsed: !isMenuOpen }"
      >
        <span class="hamburger" :class="{ active: isMenuOpen }">
          <span></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'landing' }" href="#landing">
              <i class="bi bi-house-door"></i> Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about">
              <i class="bi bi-file-person-fill"></i> About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'resume' }" href="#resume">
              <i class="bi bi-book-half"></i> Education & Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'project' }" href="#project">
              <i class="bi bi-cast"></i> Project
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact">
              <i class="bi bi-person-lines-fill"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeSection: null,
      isMenuOpen: false,
      observer: null,
    };
  },
  mounted() {
    this.setupIntersectionObserver();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setupIntersectionObserver() {
      const sections = ['landing', 'about', 'resume', 'project', 'contact'];
      const navHeight = document.getElementById('navbar').offsetHeight;
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, {
        rootMargin: `-${navHeight}px 0px 0px 0px`,
        threshold: 0.5,
      });
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) this.observer.observe(section);
      });
    },
    handleScroll() {
      const sections = ['landing', 'about', 'resume', 'project', 'contact'];
      const scrollPosition = window.scrollY + document.getElementById('navbar').offsetHeight;
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            this.activeSection = id;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
/* Navbar Container */
#navbar {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 999;
  top: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
  padding: 15px 30px;
}

/* Nav Link Styles */
.nav-link {
  position: relative;
  font-weight: bold;
  color: #000;
  padding: 10px;
  transition: color 0.3s ease, transform 0.3s ease;
  text-decoration-line: none !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: #ff0000;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #ff0000;
  transform: translateY(-2px);
}

.nav-link.active {
  color: #ff0000 !important;
}

/* New Hamburger/X Animation Styles */
.navbar-toggler {
  border: none;
  outline: none;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.hamburger {
  display: block;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
}

.hamburger:before,
.hamburger span,
.hamburger:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.hamburger:before {
  top: 0;
}

.hamburger span {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger:after {
  bottom: 0;
}

/* Active state (X transformation) */
.hamburger.active:before {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger.active:after {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.hamburger.active span {
  opacity: 0;
  transform: translateY(-50%) rotate(90deg);
}

/* Hover effect */
.navbar-toggler:hover .hamburger:before,
.navbar-toggler:hover .hamburger span,
.navbar-toggler:hover .hamburger:after {
  background-color: #ff0000;
}

/* Dropdown Animation */
.navbar-collapse {
  display: flex !important;
  flex-basis: auto;
  transition: max-height 0.3s ease-out, opacity 0.3s ease;
}

@media (max-width: 992px) {
  .navbar-collapse {
    display: block !important;
    flex-basis: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  
  .navbar-collapse.show {
    max-height: 500px;
    opacity: 1;
    transition: max-height 0.3s ease-in, opacity 0.3s ease;
  }
}

/* Branding Styles */
.logo {
  width: 50px;
  height: auto;
  margin-right: 8px;
}

.brand-name {
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
  margin-left: 8px;
}

/* Mobile Adjustments */
@media (max-width: 995px) {
  #navbar {
    padding: 10px 20px;
  }
  
  .brand-name {
    font-size: 1rem;
  }
  
  .logo {
    width: 45px;
  }

  .hamburger {
    width: 26px;
    height: 20px;
  }
}

/* Remove Focus Outline */
.navbar-toggler:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>