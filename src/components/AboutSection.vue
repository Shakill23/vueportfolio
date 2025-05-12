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
            data-bs-spy="scroll"
            data-bs-target="#internalScrollspy"
            data-bs-offset="60"
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
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#intro" @click="closeInternalMenu">Intro</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#journey" @click="closeInternalMenu">My Journey</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#conclusion" @click="closeInternalMenu">Conclusion</a>
                  </li>
                </ul>
              </div>
            </nav>

           <!-- Scrollable Sections -->
<section id="intro" class="scroll-section">
  <h4>Intro</h4>
  <p class="intro-text">
    Hello! I'm <strong>Shakeel Davids</strong> – a passionate and inventive software developer who loves a good challenge. 
    Whether I'm strategizing like a chess master or brainstorming innovative ideas, I thrive on thinking several steps ahead and adapting to any situation. 
    I'm equally comfortable working independently or as part of a collaborative team, and I'm always eager to explore new perspectives.
  </p>
</section>

<section id="journey" class="scroll-section">
  <h4>My Journey</h4>
  <p>
    My journey in tech has been as dynamic as a strategic game—every challenge is an opportunity to innovate. I specialize in building efficient, responsive, and user-centered applications using a diverse toolkit including 
    <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">JavaScript</span>, <span class="highlight">Node.js</span>, <span class="highlight">MySQL</span>, and <span class="highlight">Vue.js</span>. My hands-on training at 
    <strong>Life Choices Academy</strong> not only sharpened my technical skills but also instilled in me a passion for creative problem-solving.
  </p>
  <p>
    I am equally adept at both frontend design and backend development. Whether it's crafting a visually engaging interface or architecting robust server-side solutions, I thrive on merging creativity with technical precision. My experience spans remote collaboration through tools like Google Meet as well as onsite teamwork, proving my ability to adapt and deliver in any setting.
  </p>
  <p>
    Currently, as an intern at <strong>Life Choices Studios</strong>, I’m expanding my full-stack expertise. I’m self-learning <span class="highlight">Python</span> and <span class="highlight">React.js</span> while also pursuing my passion for game development and backend programming. I’m not afraid of new challenges—if there’s a gap in my knowledge, I commit to bridging it, ensuring I can work with any technology to create impactful solutions.
  </p>
</section>


<section id="conclusion" class="scroll-section" style="padding-bottom: 100px">
  <h4>Conclusion</h4>
  <p class="closing-text">
    I'm excited to continue growing as a developer, embracing new challenges, and bringing creative solutions to the table. 
    Whether I'm working solo or with a team, I look forward to making a real impact and driving innovation in every project.
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
  },
  mounted() {
    document.querySelectorAll('.internal-nav .nav-link').forEach((link) => {
      link.addEventListener('click', this.handleInternalNavClick);
    });
  },
  beforeUnmount() {
    document.querySelectorAll('.internal-nav .nav-link').forEach((link) => {
      link.removeEventListener('click', this.handleInternalNavClick);
    });
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 0;
  overflow: hidden;
}

/* Scrollspy Content */
.scrollspy-content {
  max-height: 300px;
  overflow-y: auto;
  position: relative;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.internal-nav .navbar-collapse {
  flex-grow: 0;
  max-height: none; /* Ensures no default bootstrap limiting */
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
  padding: 10px;
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
  padding: 30px 40px;
  text-align: left;
  background: rgba(255, 255, 255, 0.95);
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.scroll-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.scroll-section h4 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 0.5rem;
}

.scroll-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #ff4757;
  border-radius: 2px;
}

/* Enhanced Text Styles */
p {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1.8rem;
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
  margin-top: 30px;
  border-left: 3px solid #ff4757;
  padding-left: 1.5rem;
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  }

  .internal-nav .navbar-collapse.show .nav-link {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease 0.15s, transform 0.3s ease 0.15s;
  }

  /* Scroll Sections adjustments */
  .scroll-section {
    padding: 25px;
    margin: 15px 10px;
  }

  .scroll-section h4 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
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
  .content-card section {
    padding: 15px;
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
    padding: 20px 15px;
  }
  .scroll-section h4 {
    font-size: 1.4rem;
  }
}
</style>
