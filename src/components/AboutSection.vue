<template>
  <section id="about" class="about-section container-fluid wrapper">
    <div class="box">
      <!-- Floating animation divs -->
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12 col-12">
          <h2 class="section-title" id="aboutHead" data-aos="fade-down" data-aos-duration="1000">About Me</h2>

          <!-- Content Card -->
          <div
            class="content-card scrollspy-content"
            ref="scrollContent"
            data-aos="fade-up"
            data-aos-duration="1000"
            @scroll="handleScroll"
          >
            <!-- Internal Navigation -->
            <nav id="internalScrollspy" class="internal-nav navbar navbar-expand-lg">
              <button
                class="navbar-toggler"
                type="button"
                @click="toggleInternalMenu"
                :aria-expanded="isInternalMenuOpen ? 'true' : 'false'"
                aria-label="Toggle navigation"
                :class="{ collapsed: !isInternalMenuOpen }"
              >
                <span class="hamburger" :class="{ active: isInternalMenuOpen }">
                  <span></span>
                </span>
              </button>

              <div class="collapse navbar-collapse" :class="{ show: isInternalMenuOpen }">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeSection === 'approach' }" href="#approach" @click="closeInternalMenu">Approach</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeSection === 'strengths' }" href="#strengths" @click="closeInternalMenu">Strengths</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeSection === 'mindset' }" href="#mindset" @click="closeInternalMenu">Mindset</a>
                  </li>
                </ul>
              </div>
            </nav>

            <!-- Updated Scrollable Sections -->
            <section id="approach" class="scroll-section" ref="approachSection">
              <h4>Approach</h4>
              <p class="intro-text">
                I'm a young developer, eager to prove myself in a coding environment. I have experience working both solo and in teams to deliver projects on deadline, and I handle the pressure that comes with it well.
              </p>
            </section>

            <section id="strengths" class="scroll-section" ref="strengthsSection">
              <h4>Strengths</h4>
              <p>
                I have a perfectionist's eye for detail, which means I'm naturally good at spotting areas for improvement. Though ironically I'm not perfect myself. But I've learned to use this focus to refine my work and help elevate the work of those around me.
              </p>
            </section>

            <section id="mindset" class="scroll-section" ref="mindsetSection">
              <h4>Mindset</h4>
              <p class="closing-text mindset-paragraph">
                If you're looking for the "perfect" candidate who never makes a mistake, you might be looking for a long time. But if you're looking for someone who actively seeks feedback, learns from missteps, and is committed to constant growth, then I am that person.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isInternalMenuOpen: false,
      activeSection: 'approach',
      sections: ['approach', 'strengths', 'mindset']
    };
  },
  methods: {
    toggleInternalMenu() {
      this.isInternalMenuOpen = !this.isInternalMenuOpen;
    },
    closeInternalMenu() {
      if (window.innerWidth < 992) {
        this.isInternalMenuOpen = false;
      }
    },
    handleInternalNavClick(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const target = this.$refs.scrollContent.querySelector(targetId);
      if (target) {
        const top = target.offsetTop - 60;
        this.$refs.scrollContent.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
      this.closeInternalMenu();
    },
    handleScroll() {
      const scrollPosition = this.$refs.scrollContent.scrollTop + 100; // Offset for navbar
      const scrollHeight = this.$refs.scrollContent.scrollHeight;
      const clientHeight = this.$refs.scrollContent.clientHeight;

      // Check if we're at the bottom (for mindset section)
      if (scrollPosition + clientHeight >= scrollHeight - 50) {
        this.activeSection = 'mindset';
        return;
      }

      // Find which section is currently in view
      for (let i = this.sections.length - 1; i >= 0; i--) {
        const section = this.sections[i];
        const element = this.$refs[`${section}Section`];
        if (element && element.offsetTop <= scrollPosition) {
          this.activeSection = section;
          break;
        }
      }
    },
    setupScrollObserver() {
      const options = {
        root: this.$refs.scrollContent,
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      // Observe all sections
      this.sections.forEach(section => {
        const element = this.$refs[`${section}Section`];
        if (element) {
          observer.observe(element);
        }
      });

      this.observer = observer;
    }
  },
  mounted() {
    document.querySelectorAll('.internal-nav .nav-link').forEach((link) => {
      link.addEventListener('click', this.handleInternalNavClick);
    });
    
    // Set up scroll detection
    this.setupScrollObserver();
    
    // Also listen to scroll events as backup
    this.$refs.scrollContent.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    document.querySelectorAll('.internal-nav .nav-link').forEach((link) => {
      link.removeEventListener('click', this.handleInternalNavClick);
    });
    
    if (this.observer) {
      this.observer.disconnect();
    }
    
    this.$refs.scrollContent.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
/* Base Styles */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/* About Section */
.about-section {
  padding: 55px 0;
  background: rgb(224, 209, 209);
  text-align: center;
}

/* Section Title */
.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title:hover::after {
  width: 100px;
}

/* Container */
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

/* Content Card */
.content-card {
  background-color: #fff;
  border-radius: 0;
  /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); */
  padding: 0;
  overflow: hidden;
}

/* Scrollspy Content */
.scrollspy-content {
  max-height: 400px;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}

/* Internal Navigation */
.internal-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 60px;
  background: rgba(231, 231, 231, 0.9);
  backdrop-filter: blur(10px);
  padding: 10px 15px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.internal-nav .navbar-collapse {
  flex-grow: 1;
}

.internal-nav .navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
}

/* Remove default focus outline on hamburger */
.internal-nav .navbar-toggler {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

/* Hamburger menu styles */
.internal-nav .navbar-toggler {
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: none;
  position: absolute;
  right: 15px;
  top: 10px;
}

.internal-nav .hamburger {
  display: block;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
}

.internal-nav .hamburger:before,
.internal-nav .hamburger span,
.internal-nav .hamburger:after {
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

.internal-nav .hamburger:before {
  top: 0;
}

.internal-nav .hamburger span {
  top: 50%;
  transform: translateY(-50%);
}

.internal-nav .hamburger:after {
  bottom: 0;
}

/* Active state (X transformation) */
.internal-nav .hamburger.active:before {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.internal-nav .hamburger.active:after {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.internal-nav .hamburger.active span {
  opacity: 0;
  transform: translateY(-50%) rotate(90deg);
}

/* Hover effect */
.internal-nav .navbar-toggler:hover .hamburger:before,
.internal-nav .navbar-toggler:hover .hamburger span,
.internal-nav .navbar-toggler:hover .hamburger:after {
  background-color: #ff0000;
}

/* Nav link styles */
.internal-nav .nav-link {
  font-weight: bold;
  color: #000;
  padding: 10px 20px;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  text-decoration: none !important;
}

.internal-nav .nav-link:hover {
  color: #ff0000;
  transform: translateY(-2px);
}

.internal-nav .nav-link::after {
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

.internal-nav .nav-link:hover::after {
  width: 100%;
}

.internal-nav .nav-link.active {
  color: #ff0000;
}

/* Enhanced Scroll Sections */
.scroll-section {
  scroll-margin-top: 60px;
  padding: 25px 30px;
  text-align: left;
  background: rgba(255, 255, 255, 0.95);
  margin: 10px 15px;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); */
  cursor: pointer; /* Show it's interactive */
}

/* Commented out hover effects */
/*
.scroll-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
*/

.scroll-section h4 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: inline-block;
  width: fit-content; 
}

.scroll-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: #ff4757;
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Trigger underline when hovering over the entire scroll-section */
.scroll-section:hover h4::after {
  width: 100%; 
}

.scroll-section:hover h4 {
  color: #2d3748;
}

/* Enhanced Text Styles */
p {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.intro-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #2d3748;
  letter-spacing: 0.2px;
}

.closing-text {
  font-size: 1.1rem;
  font-style: italic;
  color: #718096;
  margin-top: 20px;
  padding-left: 1.5rem;
  border-left: 3px solid #ff4757;
  position: relative; 
}

.scroll-section:hover .mindset-paragraph::after {
  width: 100%;
}

.highlight {
  color: #ff4757;
  font-weight: 600;
  position: relative;
  padding: 0 4px;
  transition: all 0.2s ease;
}

.highlight::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.highlight:hover::before {
  transform: scaleX(1);
}

/* Floating Box Animation */
.box div {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 6px solid rgb(0, 0, 0);
  z-index: 0;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.3) translateY(-90px) rotate(360deg);
    opacity: 0;
  }
}

/* Individual Box Positions */
.box div:nth-child(1) { top: 12%; left: 42%; animation: animate 10s linear infinite; }
.box div:nth-child(2) { top: 70%; left: 50%; animation: animate 7s linear infinite; }
.box div:nth-child(3) { top: 17%; left: 6%; animation: animate 9s linear infinite; }
.box div:nth-child(4) { top: 20%; left: 60%; animation: animate 10s linear infinite; }
.box div:nth-child(5) { top: 67%; left: 10%; animation: animate 6s linear infinite; }
.box div:nth-child(6) { top: 80%; left: 70%; animation: animate 12s linear infinite; }
.box div:nth-child(7) { top: 60%; left: 80%; animation: animate 15s linear infinite; }
.box div:nth-child(8) { top: 32%; left: 25%; animation: animate 16s linear infinite; }
.box div:nth-child(9) { top: 90%; left: 25%; animation: animate 9s linear infinite; }
.box div:nth-child(10) { top: 20%; left: 80%; animation: animate 5s linear infinite; }
.box div:nth-child(11) { top: 10%; right: 5%; animation: animate 8s linear infinite; }
.box div:nth-child(12) { bottom: 10%; right: 3%; animation: animate 6s linear infinite; }
.box div:nth-child(13) { bottom: 20%; left: 5%; animation: animate 11s linear infinite; }
.box div:nth-child(14) { bottom: 30%; right: 10%; animation: animate 9s linear infinite; }
.box div:nth-child(15) { top: 25%; left: 2%; animation: animate 13s linear infinite; }

/* Responsive Adjustments */
@media (max-width: 992px) {
  .internal-nav {
    padding: 10px 50px 10px 15px;
  }

  .internal-nav .navbar-toggler {
    display: block;
  }

  .internal-nav .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(231, 231, 231, 0.95);
    backdrop-filter: blur(10px);
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease;
    opacity: 0;
  }

  .internal-nav .navbar-collapse.show {
    max-height: 500px;
    opacity: 1;
    transition: max-height 0.3s ease-in, opacity 0.3s ease-in;
  }

  .internal-nav .navbar-nav {
    flex-direction: column;
    padding: 15px;
    gap: 0.5rem;
    justify-content: flex-start;
  }

  .internal-nav .nav-item {
    text-align: center;
    padding: 10px 0;
  }

  /* Slide-in & Fade for nav links (when open) */
  .internal-nav .nav-link {
    opacity: 0;
    transform: translateY(-5px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    padding: 10px;
  }

  .internal-nav .navbar-collapse.show .nav-link {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s;
  }

  /* Scroll Sections adjustments */
  .scroll-section {
    padding: 20px;
    margin: 10px 8px;
  }

  .scroll-section h4 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .intro-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 20px;
  }
  .section-title {
    font-size: 2.4rem;
  }
  .scrollspy-content {
    max-height: 350px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  p {
    font-size: 0.95rem;
  }
  .internal-nav .hamburger {
    width: 26px;
    height: 20px;
  }
  .scroll-section {
    padding: 15px;
    margin: 8px 5px;
  }
  .scroll-section h4 {
    font-size: 1.4rem;
  }
  .scrollspy-content {
    max-height: 300px;
  }
}
</style>