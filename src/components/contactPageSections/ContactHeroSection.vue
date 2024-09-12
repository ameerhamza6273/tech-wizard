<!-- components/contact.vue -->
<template>
  <div class="bg-themebgcolor pb-20">
    <!-- service section -->
    <div class="contact-main md:py-48 py-24">
      <h1
        class="font-bevietnam text-center font-bold md:text-5xl text-xl text-white"
      >
        Contact Us
      </h1>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "contactHeroSection",
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>

<style scoped>
/* Add any additional styling here */
.contact-main {
  background-image:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url("/public/Rectangle 4821 (1).png");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
