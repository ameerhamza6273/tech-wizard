<template>
  <div class="pt-20">
    <!-- hero section -->
    <heroSection />
    <!-- call To Action section is here -->
    <ServiceCards />
  </div>
</template>

<script>
import heroSection from "@/components/servicePageSections/ServiceHero.vue";
import ServiceCards from "@/components/servicePageSections/ServiceCards.vue";

export default {
  name: "servicePage",
  components: {
    heroSection,
    ServiceCards,
  },
  data() {
    return {
      //
    };
  },
};
</script>
