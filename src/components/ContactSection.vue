<template>
    <div>
        <h2>Contact</h2>
        <div class="card">
  <form class="form" action="https://formspree.io/f/xnnaqvzg"
  method="POST">
    <div class="group">
    <input placeholder="‎" type="text" required="">
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="‎" type="email" id="email" name="email" required="">
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
    <label for="comment">Message</label>
</div>
    <button type="submit">Send</button>
  </form>
</div>

    </div>
</template>

<script>
export default {
    name: 'ContactComp'
}
</script>

<style scoped></style>