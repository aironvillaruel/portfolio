<script setup>
import { ref, onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import FooterBar from "./components/FooterBar.vue";
// Reactive variable to track dark mode state

// Function to scroll to the "about" section
// const about = () => {
//   console.log("hello");
//   const section = document.getElementById("about");
//   if (section) {
//     section.scrollIntoView({
//       behavior: "smooth", // This ensures smooth scrolling
//       block: "start", // Scroll to the top of the section
//     });
//   }
// };
const isDark = useDark("Dark");
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="h-screen flex flex-col dark:bg-zinc-900 bg-white">
    <header class="flex items-center w-full justify-center">
      <!-- mobile  -->
      <div
        class="md:hidden flex justify-center gap-10 items-center text-xl teko bg-gray-100 dark:bg-gradient-to-t from-slate-900 to-zinc-900 border border-zinc-700 w-full p-2 z-50 dark:text-white shadow-gray-400 dark:shadow-cyan-950 shadow-md"
      >
        <RouterLink
          to="/"
          :class="{
            'active-route': $route.path === '/',
          }"
        >
          <label class="cursor-pointer p-2">
            <font-awesome-icon icon="fa-solid fa-house" class="text-2xl" />
          </label>
        </RouterLink>
        <RouterLink
          to="/skill"
          :class="{
            'active-route': $route.path === '/skill',
          }"
        >
          <label class="hover: -300 cursor-pointer p-2">
            <font-awesome-icon
              icon="fa-solid fa-lightbulb"
              class="text-2xl"
            /> </label
        ></RouterLink>
        <div
          @click="toggleDark()"
          class="flex justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer dark:bg-zinc-900 rounded-full border border-zinc-900 w-10 h-10 dark:border-white"
        >
          <font-awesome-icon
            :icon="isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun'"
            :style="{ color: isDark ? '#fff' : '#18181b' }"
          />
        </div>
        <RouterLink
          to="/project"
          :class="{
            'active-route': $route.path === '/project',
          }"
          ><label class="hover: -300 cursor-pointer p-2">
            <font-awesome-icon
              icon="fa-solid fa-passport"
              class="text-2xl"
            /> </label
        ></RouterLink>
        <RouterLink
          to="/contact"
          :class="{
            'active-route': $route.path === '/contact',
          }"
          ><label class="hover: -300 cursor-pointer p-2"
            ><font-awesome-icon
              icon="fa-solid fa-phone"
              class="text-2xl" /></label
        ></RouterLink>
      </div>
      <!-- desktop  -->
      <div
        id="desktop"
        class="hidden md:flex sharp bg-gray-100 dark:bg-gradient-to-t from-slate-900 to-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md p-2 z-20 rounded-full w-1/2 justify-center items-center gap-10 teko text-2xl text-zinc-900 dark:text-white shadow-gray-700 dark:shadow-cyan-950"
      >
        <RouterLink
          to="/"
          :class="{
            'bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text':
              $route.path === '/',
          }"
          class="router-link"
        >
          <label class="icon-text hover:text-pink-600 cursor-pointer p-2">
            <span class="text-label">Home</span>
            <font-awesome-icon icon="fa-solid fa-house" class="icon" />
          </label>
        </RouterLink>
        <RouterLink
          to="/skill"
          :class="{
            'bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text':
              $route.path === '/skill',
          }"
          class="router-link"
        >
          <label class="icon-text hover:text-pink-600 cursor-pointer p-2">
            <span class="text-label">Skills</span>
            <font-awesome-icon
              icon="fa-solid fa-lightbulb"
              class="icon"
            /> </label
        ></RouterLink>

        <!-- <button></button> -->
        <div
          @click="toggleDark()"
          class="flex justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer dark:bg-zinc-900 rounded-full border border-zinc-900 w-10 h-10 dark:border-white"
        >
          <font-awesome-icon
            :icon="isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun'"
            :style="{ color: isDark ? '#fff' : '#18181b' }"
          />
        </div>
        <RouterLink
          to="/project"
          :class="{
            'bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text':
              $route.path === '/project',
          }"
          ><label class="icon-text hover:text-pink-600 cursor-pointer p-2">
            <span class="text-label">Projects</span>
            <font-awesome-icon
              icon="fa-solid fa-passport"
              class="icon" /></label
        ></RouterLink>
        <RouterLink
          to="/contact"
          :class="{
            'bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text':
              $route.path === '/contact',
          }"
          ><label class="icon-text hover:text-pink-600 cursor-pointer p-2">
            <span class="text-label">Contact</span>
            <font-awesome-icon icon="fa-solid fa-phone" class="icon" /></label
        ></RouterLink>
      </div>
    </header>

    <RouterView />
    <FooterBar />
  </div>
</template>

<style>
.icon {
  display: none;
}
/* .icon-text .icon {
  display: none;
} */

/* Show the icon when hovering over the label */
.icon-text:hover .icon {
  display: inline-block;
}

/* Hide the text label when hovering */
.icon-text:hover .text-label {
  display: none;
}

/* Ensure the text label is shown by default */
/* .icon-text .text-label {
  display: inline;
} */
.active-route {
  color: rgb(242, 0, 137);
}
.hide {
  display: none;
}
.show {
  display: block;
}
.dark {
  background-color: white;
}


</style>
