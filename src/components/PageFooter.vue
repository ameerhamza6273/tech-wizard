<template>
  <div class="bg-black p-3">
    <div class="max-w-[1200px] mx-auto">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-14">
        <div class="md:col-span-2">
          <img src="Asset.svg" alt="user" class="w-28" />
          <p class="text-white text-base font-bevietnam opacity-[0.7] mt-4 md:pr-5">
            Tech Wizard - Building and Securing the Future of Technology.
          </p>
        </div>
        <div>
          <h2 class="text-lg font-bevietnam text-white font-semibold">
            Our Links
          </h2>
          <ul class="text-white text-sm font-bevietnam opacity-[0.7]">
            <li class="mt-2">
              <a>Home</a>
            </li>
            <li class="mt-2">
              <a>Our Services</a>
            </li>
            <li class="mt-2">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        
        <div >
          <h2 class="text-lg font-bevietnam text-white font-semibold">
            Get In Touch
          </h2>
          <ul class="text-white text-sm font-bevietnam opacity-[0.7]">
            <li class="mt-2 flex">
              <img src="icon.png" alt="user" class="h-4" />
              <a class="ml-3">...</a>
            </li>
            <li class="mt-3 flex">
              <img src="mail.png" alt="user" class="h-4" />
              <a class="ml-3">...</a>
            </li>
            <li class="mt-3 flex">
              <img src="map-marker.png" alt="user" class="h-4" />
              <a class="ml-3"
                >...</a
              >
            </li>
          </ul>
        </div>
      </div>
      <hr class="bg-white mt-7" />
      <p
        class="text-center text-white text-sm font-bevietnam opacity-[0.7] mt-5 mb-3"
      >
        Copyright © 2024 All rights reserved
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageFooter",
  data() {
    return {
      //
    };
  },
};
</script>
