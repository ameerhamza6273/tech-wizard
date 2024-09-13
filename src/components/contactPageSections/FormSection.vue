<template>
  <div class="bg-themebgcolor px-3 pb-16">
    <div class="grid grid-cols-7 gap-14 max-w-[1200px] mx-auto">
      <div class="bg-white md:col-span-5 col-span-7 px-6 py-10">
        <form @submit.prevent="CotactForm">

          <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="font-bevietnam text-[#333] font-light text-lg">Full Name*</label><br />
              <input type="text" placeholder="Enter Your Full Name" class="bg-themebgcolor px-4 py-3 mt-2 mb-6 w-full"
                required />
            </div>
            <div>
              <label class="font-bevietnam text-[#333] font-light text-lg">Email*</label><br />
              <input type="email" placeholder="Enter Your Email" class="bg-themebgcolor px-4 py-3 mt-2 mb-6 w-full"
                required />
            </div>
          </div>

          <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="font-bevietnam text-[#333] font-light text-lg">Phone Number*</label><br />
              <input type="number" placeholder="Enter Your Phone Number"
                class="bg-themebgcolor px-4 py-3 mt-2 mb-6 w-full" required />
            </div>
            <div>
              <label class="font-bevietnam text-[#333] font-light text-lg">Subject*</label><br />
              <input type="text" placeholder="Subject" class="bg-themebgcolor px-4 py-3 mt-2 mb-6 w-full"
                required />
            </div>
          </div>

          <label class="font-bevietnam text-[#333] font-light text-lg">Message*</label><br />
          <textarea type="text" placeholder="Type Message Here" class="bg-themebgcolor px-4 py-3 mt-2 w-full h-40"
            required></textarea>
          <button
            class="bg-navbgcolor font-bevietnam rounded px-4 py-2 text-white mt-4 font-bold text-sm hover:bg-black">
            Send Message
          </button>
        </form>
      </div>
      <div class="bg-white md:col-span-2 col-span-7 flex flex-col px-6 divide-y">
        <div class="py-6">
          <img src="music.png" alt="user" class="mx-auto" />
          <h3 class="font-bevietnam text-center text-headingclr font-bold text-2xl mt-2">
            Our Contact
          </h3>
          <P class="font-bevietnam text-center text-[#333] font-light text-lg mt-2">0333 303 4870</P>
        </div>
        <div class="py-6">
          <img src="Group 9156.png" alt="user" class="mx-auto" />
          <h3 class="font-bevietnam text-center text-headingclr font-bold text-2xl mt-2">
            Mail Us
          </h3>
          <P class="font-bevietnam text-center text-[#333] font-light text-lg mt-2">info@privatahealthcare.co.uk</P>
        </div>
        <div class="py-6">
          <img src="Group 9023.png" alt="user" class="mx-auto" />
          <h3 class="font-bevietnam text-center text-headingclr font-bold text-2xl mt-2">
            Our Location
          </h3>
          <P class="font-bevietnam text-center text-[#333] font-light text-lg mt-2">Brighter Spaces, 7 Hawthorn Lane,
            Wilmslow, SK9 1AA</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contactFormSection",
  data() {
    return {
      //
    };
  },
  methods: {
    async CotactForm() {
      try {
        const response = await axios.post("/api/contact", {
          name: "Hamza",
        });

        // Log the entire response for inspection
        console.log("Response:", response);

        // Check if response is defined before accessing data
        if (response) {
          console.log("Login successful:", response.data);
        } else {
          console.error("Login failed: No response received");
        }
      } catch (error) {
        // Log the entire error for inspection
        console.error("Login failed:", error);

        // Check if error.response is defined before accessing data
        if (error.response) {
          console.error("Error response data:", error.response.data);
        }
      }
    },
  },
};
</script>
