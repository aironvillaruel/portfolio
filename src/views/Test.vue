<script setup>
import Swal from "sweetalert2";
import { ref, onMounted, onBeforeUnmount } from "vue";

// For the scroll effect (slide-in)
const isVisible = ref(false); // Track visibility state
const slideInDiv = ref(null); // Reference to the div for scrolling effect
const isScrolledDown = ref(false);
// Success toast notification
function successDownload(message) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    iconColor: "lightgreen",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: message,
  });
}

// Download function
const download = () => {
  console.log("download");
  const link = document.createElement("a");
  link.href = "/public/Resume(Villaruel).pdf"; // Your PDF path
  link.download = "CV-Villaruel.pdf"; // The file name for download
  link.click();
  successDownload("CV downloaded successfully");
};

// Hire function (example for demonstration)
const hire = () => {
  console.log("test");
 window.location.href = "/contact";
};

const handleScroll = () => {
  // Check the scroll position
  if (window.scrollY > 100) {
    // You can adjust the scroll position threshold
    isScrolledDown.value = true;
  } else {
    isScrolledDown.value = false;
  }
};
// Method to check if the div is in the viewport
const checkVisibility = () => {
  const rect = slideInDiv.value.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    isVisible.value = true; // Make the div visible (add class)
  }
};
const goUp = () => {
  console.log("up");
  const section = document.getElementById("landing");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // This ensures smooth scrolling
      block: "start", // Scroll to the top of the section
    });
  }
};
// Lifecycle hooks to handle scroll and visibility check
onMounted(() => {
  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Initial check when component is mounted

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check when component is mounted
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkVisibility); // Clean up event listener
  window.removeEventListener("scroll", handleScroll); // Clean up event listener
});


</script>

<template>
  <div class="w-full flex flex-row flex-1 bg-white dark:bg-zinc-900">
    <div
      class="min-h-screen absolute z-10 items-start justify-center px-16 py-24"
    >
      <div class="relative w-full max-w-lg">
        <!-- Blobs  -->
        <div
          class="absolute top-96 left-40 md:top-0 md:-left-4 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-b from-pink-600 via-pink-700 to-pink-900 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"
        ></div>
        <div
          class="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-b from-sky-600 via-sky-700 to-sky-900 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        ></div>
        <div
          class="hidden md:absolute -bottom-8 left-28 w-72 h-72 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
        ></div>
      </div>
    </div>

    <!-- <div
      class="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 w-64 h-64 rounded-full absolute blur-3xl text-white"
    ></div> -->

    <div
      class="hidden md:block z-20 bottom-0 right-0 bg-gradient-to-b from-cyan-600 via-cyan-700 to-cyan-900 w-96 h-96 rounded-full absolute blur-3xl text-white dark:text-white"
    ></div>
    <div class="w-full">
      <div
        @click="goUp"
        v-if="isScrolledDown"
        class="bg-white dark:bg-zinc-900 border grad-border h-14 w-14 fixed bottom-3 left-3 rounded-full z-50 p-2 flex justify-center items-center"
      >
        <div
          class="bg-white dark:bg-zinc-900 h-10 w-10 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-caret-up"
            class="text-zinc-900 dark:text-white text-3xl"
          />
        </div>
      </div>
      <section
        id="landing"
        class="flex items-center flex-col justify-center h-screen"
      >
        <div
          class="flex items-center typewriter w-full md:w-1/2 flex-col p-4 z-10"
        >
          <h1 class="text-3xl md:text-6xl font-bold anton-regular">
            <span class="hover:text-blue-500 text-zinc-900 dark:text-white">I'M </span>
            <span
              class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text dark:hover:text-white hover:text-zinc-900"
            >
              A WEB</span
            >
            <span class="hover:text-blue-500 text-zinc-900 dark:text-white"> DEVELOPER </span>
          </h1>
          <h2
            class="md:text-xl mb-10 text-zinc-900 dark:text-white text-justify w-full text-focus-in outfit"
          >
            I am Airon Villaruel a full-stack web developer focused on crafting
            innovative and engaging digital experiences. With a keen eye for
            detail and a commitment to delivering high-quality projects,
            dedicated to bringing ideas to life on the web. Driven by curiosity
            and an eagerness to learn, I thrives in building solutions that meet
            both user needs and business goals.
          </h2>
        </div>
        <div id="me" class="w-full mt-5 flex gap-5 justify-center scale-up-center z-20">
          <div class="container" id="btn-hire">
            <button class="button bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" @click="hire">Hire Me</button>
          </div>
          <div class="container" id="btn-hover">
            <button class="button bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" @click="download">Download CV</button>
          </div>
        </div>
      </section>

      <section
        id="about"
        class="dark:bg-zinc-900 bg-white flex flex-row item-center justify-between"
      >
        <div class="w-full flex justify-center items-center">
          <div class="flex gap-5 p-2 w-3/4 ml-20 flex-col">
            <div
              class="rounded-br-full rounded w-full p-2 md:text-left text-center"
            >
              <h1 class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular">
                <span
                  class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
                  >About</span
                >
                Me
              </h1>
            </div>

            <div
              class="flex-col flex items-center md:items-start"
              ref="slideInDiv"
              :class="['slide-in-left', { visible: isVisible }]"
            >
              <h2
                class="text-md md:text-xl text-zinc-900 dark:text-white text-justify w-full md:w-3/4 text-focus-in outfit"
              >
                Hello! I'm <span class="font-semibold">Ai</span>, a passionate
                web developer with a strong foundation in front-end and back-end
                development. I specialize in creating dynamic, user-friendly
                websites and web applications that not only look great but also
                perform seamlessly. My journey into web development began with a
                curiosity about how websites are built and a desire to create
                things that people can interact with online.
              </h2>
              <br />
              <h2
                class="text-md md:text-xl text-zinc-900 dark:text-white text-justify w-full md:w-3/4 text-focus-in outfit"
              >
                When I'm not coding, you can find me watching anime, drawing,
                playing musical instruments and even playing games, which helps
                me stay creative and inspired. I'm always open to collaborating
                on exciting projects, so feel free to reach out if you have a
                web development need or just want to chat about tech! Let's
                build something amazing together.
              </h2>
            </div>
          </div>
        </div>

        <div class="w-1/2 items-center slide-fwd-center md:flex hidden">
          <img src="/public/me.png" class="shadow-blue" />
        </div>
      </section>

      <section class="bg-white dark:bg-zinc-900 md:h-screen z-10 flex flex-col p-4">
        <div class="flex justify-center md:justify-end w-full md:px-40">
          <div
            class="md:pt-10 h-14 flex justify-center md:block rounded md:w-3/5 w-full p-2 md:mr-5"
          >
            <h1 class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular text-end">
              My
              <span
                class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
                >Experiences</span
              >
            </h1>
          </div>
        </div>

        <!-- Mobile -->
        <div
          class="w-full items-center justify-center flex flex-col p-2 md:hidden"
        >
          <div
            class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-pink-500 shadow-md shadow-pink-500 p-2 flex justify-center flex-col items-center"
          >
            <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2018</h2>
            <div class="border-b border-gray-400 h-1 w-full"></div>
            <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
              >Data Encoder</label
            >
            <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
              I played a critical role in ensuring the efficient and accurate
              processing of large datasets to support the organization’s
              decision-making and operations. My main responsibilities involved
              entering, verifying, and updating information into various
              databases. We used MS Excel for managing the data of the company.
            </p>
          </div>
          <div
            class="h-8 w-1 bg-zinc-900 border-2 hover:shadow-xl hover:bg-pink-500 shadow-xl shadow-pink-500 hover:shadow-pink-500 cursor-pointer border-pink-500 rounded-full"
          ></div>
          <div
            class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-blue-500 shadow-md shadow-blue-500 p-2 flex justify-center flex-col items-center"
          >
            <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2022</h2>
            <div class="border-b border-gray-400 h-1 w-full"></div>
            <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
              >End User Support</label
            >
            <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
              I was responsible for providing technical assistance and support
              to internal users and customers. My role was vital in ensuring
              smooth operations by troubleshooting software, hardware, and
              network issues, while also offering guidance on system usage and
              maintenance.
            </p>
          </div>
          <div
            class="h-8 w-1 bg-zinc-900 border-2 hover:shadow-xl hover:bg-blue-500 shadow-xl shadow-blue-500 hover:shadow-blue-500 cursor-pointer border-blue-500 rounded-full"
          ></div>
          <div
            class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-rose-500 shadow-md shadow-rose-500 p-2 flex justify-center flex-col items-center"
          >
            <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2023</h2>
            <div class="border-b border-gray-400 h-1 w-full"></div>
            <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
              >System Developer</label
            >
            <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
              As a System Developer, I was responsible for designing,
              developing, and maintaining web applications using modern
              technologies such as Laravel, Vue.js, React, Tailwind CSS, MySQL,
              GitHub, and Postman. My role involved building both front-end and
              back-end systems, ensuring smooth data flow, user experience, and
              functionality across multiple applications.
            </p>
          </div>
          <div
            class="h-8 w-1 bg-zinc-900 border-2 hover:shadow-xl hover:bg-rose-500 shadow-xl shadow-rose-500 hover:shadow-rose-500 cursor-pointer border-rose-500 rounded-full"
          ></div>
          <div
            class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-cyan-300 shadow-md shadow-cyan-300 p-2 flex justify-center flex-col items-center"
          >
            <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2024</h2>
            <div class="border-b border-gray-400 h-1 w-full"></div>
            <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
              >Freelance System Developer</label
            >
            <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
              As a developer and Project Manager at
              <span class="text-blue-500 cursor-pointer hover:text-blue-200"
                >Tridev</span
              >, I took on a dual role of managing and developing web
              applications, providing students with the systems they needed for
              their academic and professional growth. I successfully built a
              team of skilled developers to create custom systems, while also
              overseeing the planning, execution, and its deliverables. We
              utilized web technologies such as Vue.js, Laravel, and integrated
              powerful app like Algolia-powered search and OpenAI to enhance
              functionality.
            </p>
          </div>
        </div>

        <!-- Desktop -->
        <div
          class="flex-col items-center justify-center gap-5 pt-20 px-5 md:flex hidden"
        >
          <div class="w-full p-2 flex justify-between gap-96">
            <div
              class="left-96 relative bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-blue-500 shadow-md shadow-blue-500 p-2 w-1/4 flex justify-center flex-col items-center h-3/3"
            >
              <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2022</h2>
              <div class="border-b border-gray-400 h-1 w-full"></div>
              <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
                >End User Support</label
              >
              <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
                I was responsible for providing technical assistance and support
                to internal users and customers. My role was vital in ensuring
                smooth operations by troubleshooting software, hardware, and
                network issues, while also offering guidance on system usage and
                maintenance.
              </p>
            </div>

            <div
              class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-cyan-300 shadow-md shadow-cyan-300 p-2 w-1/3 flex justify-center flex-col items-center h-3/3"
            >
              <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2024</h2>
              <div class="border-b border-gray-400 h-1 w-full"></div>
              <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
                >Freelance System Developer</label
              >
              <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
                As a developer and Project Manager at
                <span class="text-blue-500 cursor-pointer hover:text-blue-200"
                  >Tridev</span
                >, I took on a dual role of managing and developing web
                applications, providing students with the systems they needed
                for their academic and professional growth. I successfully built
                a team of skilled developers to create custom systems, while
                also overseeing the planning, execution, and its deliverables.
                We utilized web technologies such as Vue.js, Laravel, and
                integrated powerful app like Algolia-powered search and OpenAI
                to enhance functionality.
              </p>
            </div>
          </div>

          <div class="flex flex-row items-center justify-center w-full px-18">
            <div
              class="h-8 w-8 bg-white dark:bg-zinc-900 border-2 hover:shadow-xl hover:bg-pink-500 shadow-xl shadow-pink-500 hover:shadow-pink-500 cursor-pointer border-pink-500 rounded-full"
            ></div>
            <div
              class="w-1/4 h-1 bg-gradient-to-r from-blue-600 via-fuchsia-700 to-pink-600"
            ></div>

            <div
              class="h-8 w-8 bg-white dark:bg-zinc-900 border-2 hover:shadow-xl hover:bg-blue-500 shadow-xl shadow-blue-500 hover:shadow-blue-500 cursor-pointer border-blue-500 rounded-full"
            ></div>
            <div
              class="w-1/4 h-1 bg-gradient-to-r from-blue-600 via-fuchsia-700 to-pink-600"
            ></div>
            <div
              class="h-8 w-8 bg-white dark:bg-zinc-900 border-2 hover:shadow-xl hover:bg-rose-500 shadow-xl shadow-rose-500 hover:shadow-rose-500 cursor-pointer border-rose-500 rounded-full"
            ></div>
            <div
              class="w-1/4 h-1 bg-gradient-to-r from-blue-600 via-fuchsia-700 to-pink-600"
            ></div>
            <div
              class="h-8 w-8 bg-white dark:bg-zinc-900 border-2 hover:shadow-xl hover:bg-cyan-300 shadow-xl shadow-cyan-300 hover:shadow-cyan-300 cursor-pointer border-cyan-300 rounded-full"
            ></div>
          </div>

          <div class="w-full p-2 flex flex-row gap-96">
            <div
              class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-pink-500 shadow-md shadow-pink-500 p-2 w-1/4 flex justify-center flex-col items-center h-3/3"
            >
              <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2018</h2>
              <div class="border-b border-gray-400 h-1 w-full"></div>
              <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
                >Data Encoder</label
              >
              <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
                I played a critical role in ensuring the efficient and accurate
                processing of large datasets to support the organization’s
                decision-making and operations. My main responsibilities
                involved entering, verifying, and updating information into
                various databases. We used MS Excel for managing the data of the
                company.
              </p>
            </div>

            
            <div
              class="bg-white dark:bg-gradient-to-t from-slate-900 to-zinc-900 rounded border border-rose-500 shadow-md shadow-rose-500 p-2 w-1/4 flex justify-center flex-col items-center h-3/3"
            >
              <h2 class="text-zinc-900 dark:text-white text-lg font-semibold teko">2023</h2>
              <div class="border-b border-gray-400 h-1 w-full"></div>
              <label class="text-zinc-900 dark:text-white outfit font-semibold mt-2"
                >System Developer</label
              >
              <p class="text-zinc-900 dark:text-white outfit text-sm text-justify">
                As a System Developer, I was responsible for designing,
                developing, and maintaining web applications using modern
                technologies such as Laravel, Vue.js, React, Tailwind CSS,
                MySQL, GitHub, and Postman. My role involved building both
                front-end and back-end systems, ensuring smooth data flow, user
                experience, and functionality across multiple applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
#me button {
  font-size: 1.4em;
  padding: 0.6em 0.8em;
  border-radius: 0.5em;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 3px #000000b4;
}

#btn-hover {
  width: 166px;
  position: relative;
  padding: 3px;
  background: linear-gradient(90deg, rgb(85, 25, 150), #f441a5);
  border-radius: 0.9em;
  transition: all 0.4s ease;
}

.grad-border {
  background: linear-gradient(90deg, rgb(85, 25, 150), #f441a5);
}

.grad-border::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}
.grad-border:hover::before {
  background: linear-gradient(90deg, rgb(85, 25, 150), #f441a5);
  filter: blur(1.2em);
}
.grad-border:active::before {
  filter: blur(0.2em);
}

#btn-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

#btn-hover:hover::before {
  background: linear-gradient(90deg, rgb(85, 25, 150), #f441a5);
  filter: blur(1.2em);
}
#btn-hover:active::before {
  filter: blur(0.2em);
}

#btn-hire {
  width: 114px;
  position: relative;
  padding: 3px;
  background: linear-gradient(90deg, rgb(85, 25, 150), #4141f4);
  border-radius: 0.9em;
  transition: all 0.4s ease;
}

#btn-hire::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

#btn-hire:hover::before {
  background: linear-gradient(90deg, rgb(85, 25, 150), #4141f4);
  filter: blur(1.2em);
}
#btn-hire:active::before {
  filter: blur(0.2em);
}

.colored-toast.swal2-icon-success {
  background-color: #1a1a1a !important;
  border: 2px solid lightgreen;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}
#about {
  position: relative;
  font: 5vmin/1.3 Serif;
  overflow: hidden;
}

#about::before,
#about::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: ".";
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

#about::before {
  text-shadow: 0.5em 0.5em 7px hsla(128, 100%, 50%, 0.9),
    -0.7em 1.2em 7px hsla(270, 100%, 50%, 0.9),
    1.4em -0.9em 7px hsla(50, 100%, 50%, 0.9),
    -0.3em -1.7em 7px hsla(190, 100%, 50%, 0.9),
    -1.5em 0.2em 7px hsla(350, 100%, 50%, 0.9);
  animation-duration: 44s;
  animation-delay: -27s;
}

#about::after {
  text-shadow: -0.2em -0.5em 7px hsla(100, 100%, 50%, 0.9),
    0.6em -0.8em 7px hsla(10, 100%, 50%, 0.9),
    -1.3em 0.4em 7px hsla(240, 100%, 50%, 0.9),
    0.9em 1.5em 7px hsla(60, 100%, 50%, 0.9),
    -1.8em -0.6em 7px hsla(180, 100%, 50%, 0.9);
  animation-duration: 43s;
  animation-delay: -32s;
}

#about::before {
  text-shadow: -0.4em 0.7em 7px hsla(60, 100%, 50%, 0.9),
    1.3em 0.6em 7px hsla(320, 100%, 50%, 0.9),
    -1.1em -1.4em 7px hsla(160, 100%, 50%, 0.9),
    -0.5em 1.2em 7px hsla(90, 100%, 50%, 0.9),
    0.2em -0.8em 7px hsla(210, 100%, 50%, 0.9);
  animation-duration: 42s;
  animation-delay: -23s;
}

#about::after {
  text-shadow: 1em -0.5em 7px hsla(220, 100%, 50%, 0.9),
    0.8em 1.2em 7px hsla(30, 100%, 50%, 0.9),
    -1.4em 0.7em 7px hsla(350, 100%, 50%, 0.9),
    -1em -1.2em 7px hsla(80, 100%, 50%, 0.9),
    1.6em 0.8em 7px hsla(270, 100%, 50%, 0.9);
  animation-duration: 41s;
  animation-delay: -19s;
}

@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}

.slide-in-left {
  transform: translateX(-100%); /* Start off the screen */
  opacity: 0;
  transition: transform 1s ease-out, opacity 1s ease-out;
}

/* Define the final state of the div (when it's in view) */
.slide-in-left.visible {
  transform: translateX(0); /* Slide into the normal position */
  opacity: 1;
}
</style>
