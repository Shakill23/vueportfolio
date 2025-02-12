<template>
  <div id="contactBg" class="wrapper container-fluid">
    <div class="box">
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
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
      <div></div> <!-- New div -->
    </div>
    <div class="row justify-content-center">
      <h2 id="contactIndex" class="section-title text-center">Contact</h2>
      <div class="card contact-card col-md-8">
        <div class="info text-center">
          <span><i class="bi bi-envelope-at"></i>shakeeldvd23@gmail.com</span>
          <span><i class="bi bi-whatsapp"></i>+27 60 966 0770</span>
          <span><i class="bi bi-geo-alt"></i>South Africa, Cape Town, Strandfontein</span>
        </div>

        <form class="form" ref="formRef" action="https://formspree.io/f/xnnaqvzg" method="POST">
          <div class="group">
            <input placeholder="‎" type="text" required v-model="name">
            <label for="name">Name</label>
          </div>
          <div class="group">
            <input placeholder="‎" type="email" id="email" name="email" required v-model="email">
            <label for="email">Email</label>
          </div>
          <div class="group">
            <textarea placeholder="‎" id="comment" name="message" rows="5" required v-model="message"></textarea>
            <label for="comment">Message</label>
          </div>
          <button class="form-btn" type="submit">Send</button>
          <button class="form-btn" type="button" @click="clearForm">Clear</button>
        </form>

        <div class="social-card">
          <a class="social-link" href="https://github.com/Shakill23" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a class="social-link" href="https://www.linkedin.com/in/shakeel-davids-55b11a2b1/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    clearForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

/* Contact section */
#contactBg {
  padding: 50px 20px;
  background: rgb(224, 209, 209);
}

.section-title {
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
letter-spacing: 1px;
font-size: 2.8rem;
  font-weight: 700;
  color: #333;
}

.contact-card {
  background-color: #333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.info {
  margin-bottom: 20px;
}

.info span {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.group {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}

.group input,
.group textarea {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #212529;
  transition: border-color 0.3s ease;
}

.group input:focus,
.group textarea:focus {
  border-bottom-color: rgba(255, 56, 42, 0.8);
}

.group label {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #ccc;
  font-size: 16px;
  transition: all 0.3s ease;
}

.group input:focus~label,
.group input:valid~label,
.group textarea:focus~label,
.group textarea:valid~label {
  top: -20px;
  font-size: 14px;
  color: rgba(255, 56, 42, 0.8);
}

.form-btn {
  background-color: rgba(255, 56, 42, 0.8);
  color: #fff;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease, transform 0.2s;
}

.form-btn:hover {
  transform: scale(1.05);
}

.social-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 13px;
  color: #fff;
  font-size: 1.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.social-link:hover {
  background-color: rgba(255, 56, 42, 0.8);
  color: #fff;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 20px;
  }

  .form {
    width: 100%;
  }
}

.box div{
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 6px solid rgb(0, 0, 0);
    z-index: 0;
}

.box div:nth-child(1){
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(2){
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
}

.box div:nth-child(3){
    top: 17%;
    left: 6%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(4){
    top: 20%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.box div:nth-child(5){
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
}

.box div:nth-child(6){
    top: 80%;
    left: 70%;
    animation: animate 12s linear infinite;
}

.box div:nth-child(7){
    top: 60%;
    left: 80%;
    animation: animate 15s linear infinite;
}

.box div:nth-child(8){
    top: 32%;
    left: 25%;
    animation: animate 16s linear infinite;
}

.box div:nth-child(9){
    top: 90%;
    left: 25%;
    animation: animate 9s linear infinite;
}

.box div:nth-child(10){
    top: 20%;
    left: 80%;
    animation: animate 5s linear infinite;
}

/* New Floating Divs Positions */
.box div:nth-child(11) {
  top: 10%;
  right: 5%;
  animation: animate 8s linear infinite;
}

/* Closer to right edge */
.box div:nth-child(12) {
  bottom: 10%;
  right: 3%;
  animation: animate 6s linear infinite;
}

/* Closer to bottom right edge */
.box div:nth-child(13) {
  bottom: 20%;
  left: 5%;
  animation: animate 11s linear infinite;
}

/* Closer to left edge */
.box div:nth-child(14) {
  bottom: 30%;
  right: 10%;
  animation: animate 9s linear infinite;
}

/* Slightly closer to right edge */
.box div:nth-child(15) {
  top: 25%;
  left: 2%;
  animation: animate 13s linear infinite;
}

@keyframes animate{
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;

    }
}
</style>

