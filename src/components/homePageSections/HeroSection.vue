<template>
  <div>
    <!-- hero section image -->
    <carousel :autoplay="true" :dots="true" :center="true" :slideBy="1" :items="1" :nav="false" :loop="true">
      <div class="main-img" v-for="(item, index) in carouselImages" :key="index">
        <img :src="item.img" alt="user" class="w-full md:h-[90vh] h-[300px]" />
      </div>
    </carousel>
    

    <p class="font-bevietnam text-center max-w-[1200px] mx-auto mt-4 px-2 pt-8 font-normal text-lg text-textcolor">
      "At Tech Wizard, we are dedicated to providing top-tier technology solutions for both government and private
      sectors. Our expertise spans across multiple key areas, ensuring that your organization is equipped with the most
      advanced and secure software solutions. Our business model is built on a foundation of robust development
      practices and comprehensive security measures. Here’s how Tech Wizard can support your organization:"
    </p>
   
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "heroSection",
  components: { carousel },
  data() {
    return {
      carouselImages: [
        { img: "banner-1.jfif" },
        { img: "banner-2.jfif" },
      ],
    
    };
  },
};
</script>
<style>
.owl-theme .owl-dots .owl-dot span {
  width: 35px !important;
  margin-top: -5px !important;
}

.owl-theme .owl-dots .owl-dot.active span {
  background-color: #1e6ef9 !important;
}
</style>
