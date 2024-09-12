<template>
  <div class="pt-20">
    <!-- hero section & about section -->
    <heroSection />
    
    <!-- servise section is here -->
    <serviseSection />
 
    <!-- call To Action section is here -->
    <callToActionSection />
  </div>
</template>

<script>
import heroSection from "@/components/homePageSections/HeroSection.vue";
import serviseSection from "@/components/homePageSections/ServiseSection.vue";
import callToActionSection from "@/components/CallToActionSection.vue";
export default {
  name: "homePage",
  components: {
    heroSection,
    serviseSection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
