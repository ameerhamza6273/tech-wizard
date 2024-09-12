<template>
  <div class="pt-20">
    <!-- hero section -->
    <heroSection />
    <!-- call To Action section is here -->
    <callToActionSection />
  </div>
</template>

<script>
import heroSection from "@/components/servicePageSections/ServiceHero.vue";
import callToActionSection from "@/components/CallToActionSection.vue";

export default {
  name: "servicePage",
  components: {
    heroSection,
    callToActionSection,
  },
  data() {
    return {
      //
    };
  },
};
</script>
