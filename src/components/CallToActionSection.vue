<template>
  <div class="max-w-[1200px] mx-auto my-16">
    <div class="bg-themebgcolor md:p-12 p-6 mx-4">
      <h1 class="text-[#005C9A] text-4xl font-bold font-bevietnam text-center">
        Call to Action
      </h1>
      <p class="font-bevietnam text-center max-w-[1010px] mx-auto mt-4 font-normal text-lg text-[#005C9A]">
        "For a fast and affordable tech solution, just give us your project details, and we'll provide you with a clear
        and budget-friendly quote for a stress-free tech experience. Count on Tech Wizard for all your tech needs."
      </p>
      <button
        class="bg-navbgcolor font-bevietnam rounded px-4 py-2 flex text-white mx-auto mt-8 font-bold text-sm items-center hover:opacity-85"
        @click="$router.push('/contact')">
        Contact Us
      </button>
    </div>
  </div>
</template>
