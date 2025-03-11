<script setup>
const laravel = () => {
  console.log("hallo");
  const laravelHidden = document.getElementById("laravel-hide");
  const laravelContainer = document.getElementById("laravel-div");

  laravelHidden.classList.remove("hidden");
  laravelContainer.classList.add("hidden");
};

const closeLaravel = () => {
  const laravelHidden = document.getElementById("laravel-hide");
  const laravelContainer = document.getElementById("laravel-div");

  laravelHidden.classList.add("hidden");
  laravelContainer.classList.remove("hidden");
};

const vue = () => {
  console.log("hallo");
  const vueHidden = document.getElementById("vue-hide");
  const vueContainer = document.getElementById("vue-div");

  vueHidden.classList.remove("hidden");
  vueContainer.classList.add("hidden");
};

const closeVue = () => {
  const vueHidden = document.getElementById("vue-hide");
  const vueContainer = document.getElementById("vue-div");

  vueHidden.classList.add("hidden");
  vueContainer.classList.remove("hidden");
};

const react = () => {
  console.log("hallo");
  const reactHidden = document.getElementById("react-hide");
  const reactContainer = document.getElementById("react-div");

  reactHidden.classList.remove("hidden");
  reactContainer.classList.add("hidden");
};

const closeReact = () => {
  const reactHidden = document.getElementById("react-hide");
  const reactContainer = document.getElementById("react-div");

  reactHidden.classList.add("hidden");
  reactContainer.classList.remove("hidden");
};

const html = () => {
  console.log("hallo");
  const htmlHidden = document.getElementById("html-hide");
  const htmlContainer = document.getElementById("html-div");

  htmlHidden.classList.remove("hidden");
  htmlContainer.classList.add("hidden");
};

const closeHtml = () => {
  const htmlHidden = document.getElementById("html-hide");
  const htmlContainer = document.getElementById("html-div");

  htmlHidden.classList.add("hidden");
  htmlContainer.classList.remove("hidden");
};

const css = () => {
  console.log("hallo");
  const cssHidden = document.getElementById("css-hide");
  const cssContainer = document.getElementById("css-div");

  cssHidden.classList.remove("hidden");
  cssContainer.classList.add("hidden");
};

const closeCss = () => {
  const cssHidden = document.getElementById("css-hide");
  const cssContainer = document.getElementById("css-div");

  cssHidden.classList.add("hidden");
  cssContainer.classList.remove("hidden");
};

const js = () => {
  console.log("hallo");
  const jsHidden = document.getElementById("js-hide");
  const jsContainer = document.getElementById("js-div");

  jsHidden.classList.remove("hidden");
  jsContainer.classList.add("hidden");
};

const closeJs = () => {
  const jsHidden = document.getElementById("js-hide");
  const jsContainer = document.getElementById("js-div");

  jsHidden.classList.add("hidden");
  jsContainer.classList.remove("hidden");
};

const php = () => {
  console.log("hallo");
  const phpHidden = document.getElementById("php-hide");
  const phpContainer = document.getElementById("php-div");

  phpHidden.classList.remove("hidden");
  phpContainer.classList.add("hidden");
};

const closePhp = () => {
  const phpHidden = document.getElementById("php-hide");
  const phpContainer = document.getElementById("php-div");

  phpHidden.classList.add("hidden");
  phpContainer.classList.remove("hidden");
};

const sql = () => {
  console.log("hallo");
  const sqlHidden = document.getElementById("sql-hide");
  const sqlContainer = document.getElementById("sql-div");

  sqlHidden.classList.remove("hidden");
  sqlContainer.classList.add("hidden");
};

const closeSql = () => {
  const sqlHidden = document.getElementById("sql-hide");
  const sqlContainer = document.getElementById("sql-div");

  sqlHidden.classList.add("hidden");
  sqlContainer.classList.remove("hidden");
};
</script>

<template>
  <div class="flex-1 w-full">
    <section class="bg-white dark:bg-zinc-900 flex flex-col gap-5">
      <div class="flex justify-center w-full p-5">
        <h1
          class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular"
        >
          <span
            class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
            >My</span
          >
          Skills
        </h1>
      </div>

      <div class="flex justify-between items-center p-2 gap-4 slide-right">
        <div class="w-full md:w-3/4 p-4">
          <div class="p-0.5 rounded-3xl shadow-gradient">
            <div
              class="bg-white dark:bg-zinc-800 hover:bg-transparent p-2 rounded-3xl hover:scale-125 transition-all duration-300"
            >
              <div class="flex justify-between items-center">
                <h2 class="teko text-xl text-zinc-900 dark:text-white my-5">
                  Programming Skills
                </h2>
                <div class="flex flex-row gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <p class="text-zinc-900 dark:text-white outfit text-md">
                As a passionate developer, I continuously strive to learn and
                improve in various technologies. The tech industry is
                ever-evolving, and I am dedicated to continuously learning and
                adapting. I stay up-to-date with the latest trends and best
                practices to ensure that the solutions I build are efficient,
                scalable, and secure. Experience working in Agile environments,
                participating in sprints, and collaborating in a
                cross-functional team.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-1/4 md:flex justify-center items-center hidden ">
          <img src="/public/code.svg" class="w-1/2">
        </div>
      </div>

      <div class="flex justify-between items-center p-2 gap-4 slide-left">
        <div class="w-1/2 h-1/4 md:flex justify-center items-center hidden"> 
          <img src="/public/designer.svg" class="w-1/3">
        </div>
        <div class="w-full md:w-3/4 p-4">
          <div class="p-0.5 rounded-3xl shadow-gradient">
            <div
              class="bg-white dark:bg-zinc-800 hover:bg-transparent p-2 rounded-3xl hover:scale-125 transition-all duration-300"
            >
              <div class="flex justify-between items-center">
                <h2 class="teko text-xl text-zinc-900 dark:text-white my-5">
                  Graphic Designing
                </h2>
                <div class="flex flex-row gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <p class="text-zinc-900 dark:text-white outfit text-md">
                I also bring a creative edge to my projects through graphic
                design. I use a combination of tools and techniques to design
                visually appealing assets, which enhance the user experience of
                web and mobile applications.Skilled in creating clean,
                professional, and engaging designs for social media graphics,
                marketing materials, and presentations. Proficient in using
                templates, brand kits, and custom designs to craft visually
                cohesive projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center p-2 gap-4 second-slide-right">
        <div class="w-full md:w-3/4 p-4">
          <div class="p-0.5 rounded-3xl shadow-gradient">
            <div
              class="bg-white dark:bg-zinc-800 hover:bg-transparent p-2 rounded-3xl hover:scale-125 transition-all duration-300"
            >
              <div class="flex justify-between items-center">
                <h2 class="teko text-xl text-zinc-900 dark:text-white my-5">
                  Project management Skills
                </h2>
                <div class="flex flex-row gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <p class="text-zinc-900 dark:text-white outfit text-md">
                In addition to technical and design expertise, I also excel at
                managing projects from start to finish, ensuring that teams are
                aligned and deadlines are met. Ability to define project scope,
                objectives, and deliverables to ensure clear expectations and
                project alignment. Skilled in prioritizing tasks, managing
                schedules, and maintaining productivity under tight deadlines.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-1/4 md:flex justify-center items-center hidden">
          <img src="/public/management.svg" class="w-1/2" alt="">
        </div>
      </div>

      <div class="flex justify-between items-center p-2 gap-4 second-slide-left">
        <div class="w-1/2 h-1/4 md:flex justify-center items-center hidden">
          <img src="/public/test.svg" class="w-1/2" alt="">
        </div>
        <div class="w-full md:w-3/4 p-4">
          <div class="p-0.5 rounded-3xl shadow-gradient">
            <div
              class="bg-white dark:bg-zinc-800 hover:bg-transparent p-2 rounded-3xl hover:scale-125 transition-all duration-300"
            >
              <div class="flex justify-between items-center">
                <h2 class="teko text-xl text-zinc-900 dark:text-white my-5">
                  Testing Skills
                </h2>
                <div class="flex flex-row gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <p class="text-zinc-900 dark:text-white outfit text-md">
                Quality assurance is integral to delivering reliable, bug-free
                software. I have hands-on experience with both manual and
                automated testing practices to ensure the functionality,
                performance, and security of applications. Experience testing
                and documenting APIs, ensuring endpoints behave as expected.
                Ensuring that the user interface and experience meet the design
                standards and provide a seamless experience for end-users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="skill"
      class="h-screen flex md:flex-row flex-col justify-center bg-white dark:bg-zinc-900"
    >
      <div class="flex justify-center w-full p-5">
        <h1
          class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular"
        >
          <span
            class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
            >Technical</span
          >
          Stacks
        </h1>
      </div>
      <div
        class="flex flex-row justify-center gap-10 md:flex-col p-5 z-20 md:gap-40 h-3/4"
      >
        <div
          class="flex flex-col justify-between md:flex-row gap-4 md:justify-evenly z-20"
        >
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="laravel-div"
            >
              <!-- <p class="heading text-white">Popular this month</p> -->
              <font-awesome-icon
                icon="fa-brands fa-laravel"
                style="color: #dc2626"
                class="md:text-7xl text-5xl"
              />
              <p
                class="text-red-600 teko hover:text-red-400 hover:scale-125 transition-all duration-300"
                @click="laravel"
              >
                LARAVEL
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="laravel-hide"
            >
              <p
                id="laravel-text"
                class="text-zinc-900 dark:text-white outfit md:text-xs w-full text-center"
              >
                Laravel is a popular, open-source PHP web application framework
                designed for building robust and scalable web applications.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeLaravel"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="vue-div"
            >
              <font-awesome-icon
                icon="fa-brands fa-vuejs"
                style="color: #4ebd3d"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="vue"
                class="text-green-500 teko hover:text-green-400 hover:scale-125 transition-all duration-300"
              >
                VUE JS
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="vue-hide"
            >
              <p
                id="vue-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                Vue.js is a progressive, open-source JavaScript framework used
                for building user interfaces and single-page applications
                (SPAs).
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeVue"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="react-div"
            >
              <font-awesome-icon
                :icon="['fab', 'react']"
                style="color: #93c5fd"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="react"
                class="text-blue-300 teko hover:text-blue-100 hover:scale-125 transition-all duration-300"
              >
                REACT JS
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="react-hide"
            >
              <p
                id="react-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                React is an open-source JavaScript library used for building
                user interfaces, particularly for single-page applications
                (SPAs).
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeReact"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="html-div"
            >
              <font-awesome-icon
                :icon="['fab', 'html5']"
                style="color: #f97316"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="html"
                class="text-orange-500 hover:text-orange-300 teko hover:scale-125 transition-all duration-300"
              >
                HTML 5
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="html-hide"
            >
              <p
                id="html-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                HTML5 is the fifth and latest major version of the HTML, the
                standard language used to structure and present content on the
                web.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeHtml"
              >
                CLOSE
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-between md:flex-row gap-4 md:justify-evenly z-20"
        >
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="css-div"
            >
              <font-awesome-icon
                :icon="['fab', 'css3-alt']"
                style="color: #3b82f6"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="css"
                class="text-blue-500 teko hover:text-blue-300 hover:scale-125 transition-all duration-300"
              >
                CSS 3
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="css-hide"
            >
              <p
                id="css-text"
                class="text-zinc-900 dark:text-white outfit md:text-xs w-full text-center"
              >
                CSS3 is the latest version of the CSS. CSS3 focuses on styling
                web pages with advanced design techniques, animations, and
                responsiveness.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeCss"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="js-div"
            >
              <font-awesome-icon
                :icon="['fab', 'js']"
                style="color: #eab308"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="js"
                class="text-yellow-500 teko hover:text-yellow-300 hover:scale-125 transition-all duration-300"
              >
                JAVASCRIPT
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="js-hide"
            >
              <p
                id="js-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                JavaScript ES6 is a major update to the JavaScript, a wide range
                of new features and enhancements, concise, and easier to work
                with.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeJs"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="php-div"
            >
              <font-awesome-icon
                :icon="['fab', 'php']"
                style="color: #6366f1"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="php"
                class="text-indigo-500 teko hover:text-indigo-300 hover:scale-125 transition-all duration-300"
              >
                PHP
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="php-hide"
            >
              <p
                id="php-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                PHP introduces a variety of new features, optimizations, and
                improvements to enhance performance, security, and developer
                experience.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closePhp"
              >
                CLOSE
              </p>
            </div>
          </div>
          <div class="card flex items-center bg-white dark:bg-zinc-900">
            <div
              class="p-2 w-full h-full flex justify-center items-center flex-col gap-5"
              id="sql-div"
            >
              <font-awesome-icon
                :icon="['fas', 'database']"
                style="color: #ec4899"
                class="md:text-7xl text-5xl"
              />
              <p
                @click="sql"
                class="text-pink-500 teko hover:text-pink-300 hover:scale-125 transition-all duration-300"
              >
                MYSQL
              </p>
            </div>
            <div
              class="p-2 w-full h-full flex justify-between items-center flex-col hidden"
              id="sql-hide"
            >
              <p
                id="sql-text"
                class="text-zinc-900 dark:text-white outfit text-xs w-full text-center"
              >
                MySQL is one of the most popular open-source relational database
                management systems (RDBMS) in the world.
              </p>
              <p
                class="text-zinc-900 dark:text-white teko hover:text-gray-200 hover:scale-125 transition-all duration-300"
                @click="closeSql"
              >
                CLOSE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#skill {
  font: 5vmin/1.3 Serif;
  overflow: hidden;
  display: block;
  font-size: 52px;
  color: transparent;
}

#skill::before,
#skill::after,
#skill::before,
#skill::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: ".";
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

#skill::before {
  text-shadow: -0.5em -0.5em 7px hsla(359, 100%, 50%, 0.9),
    1.5em -1.5em 7px hsla(204, 100%, 50%, 0.9),
    -2em 2em 7px hsla(120, 100%, 50%, 0.9),
    1.2em -2.4em 7px hsla(34, 100%, 50%, 0.9),
    -1.1em 1.5em 7px hsla(250, 100%, 50%, 0.9),
    1em 1.8em 7px hsla(312, 100%, 50%, 0.9),
    -1.3em -1.1em 7px hsla(45, 100%, 50%, 0.9),
    0.8em 1.3em 7px hsla(122, 100%, 50%, 0.9),
    -0.5em -0.5em 7px hsla(75, 100%, 50%, 0.9),
    0.5em -1.5em 7px hsla(160, 100%, 50%, 0.9); /* example for the first 10 dots */
  animation-duration: 44s;
  animation-delay: -27s;
}

#skill::after {
  text-shadow: -0.5em -0.5em 7px hsla(143, 100%, 50%, 0.9),
    2.5em -2.2em 7px hsla(58, 100%, 50%, 0.9),
    -1.3em 1.7em 7px hsla(250, 100%, 50%, 0.9),
    1.8em -1.8em 7px hsla(204, 100%, 50%, 0.9),
    -2em 2.1em 7px hsla(333, 100%, 50%, 0.9),
    0.7em 0.5em 7px hsla(100, 100%, 50%, 0.9),
    1em -1em 7px hsla(278, 100%, 50%, 0.9),
    -0.7em 0.9em 7px hsla(35, 100%, 50%, 0.9),
    1.2em -0.3em 7px hsla(85, 100%, 50%, 0.9),
    -1.6em -0.9em 7px hsla(202, 100%, 50%, 0.9); /* example for the first 10 dots */
  animation-duration: 43s;
  animation-delay: -32s;
}

#skill::before {
  text-shadow: 0.6em 1em 7px hsla(125, 100%, 50%, 0.9),
    -1.8em -1.1em 7px hsla(61, 100%, 50%, 0.9),
    1.4em 1em 7px hsla(220, 100%, 50%, 0.9),
    -0.7em 0.8em 7px hsla(14, 100%, 50%, 0.9),
    1.2em 1.5em 7px hsla(285, 100%, 50%, 0.9),
    -1em 0.5em 7px hsla(340, 100%, 50%, 0.9),
    2.3em -1.3em 7px hsla(300, 100%, 50%, 0.9),
    -0.5em 1.8em 7px hsla(80, 100%, 50%, 0.9),
    0.7em -1.5em 7px hsla(220, 100%, 50%, 0.9),
    -1em -0.9em 7px hsla(168, 100%, 50%, 0.9); /* example for the first 10 dots */
  animation-duration: 42s;
  animation-delay: -23s;
}

#skill::after {
  text-shadow: 0.4em 0.7em 7px hsla(360, 100%, 50%, 0.9),
    1.1em -1em 7px hsla(90, 100%, 50%, 0.9),
    -0.9em -0.5em 7px hsla(340, 100%, 50%, 0.9),
    0.8em -1.3em 7px hsla(211, 100%, 50%, 0.9),
    -1.7em 0.9em 7px hsla(199, 100%, 50%, 0.9),
    1em 0.6em 7px hsla(44, 100%, 50%, 0.9),
    -0.8em -0.3em 7px hsla(180, 100%, 50%, 0.9),
    1.5em 2em 7px hsla(260, 100%, 50%, 0.9),
    0.5em -1.1em 7px hsla(190, 100%, 50%, 0.9),
    -1em -0.4em 7px hsla(70, 100%, 50%, 0.9); /* example for the first 10 dots */
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

/* From Uiverse.io by gharsh11032000 */
.card {
  position: relative;
  width: 190px;
  height: 154px;
  /* background-color: #171717; */
  /* padding: 12px; */
  border-radius: 8px;
  cursor: pointer;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 200px;
  height: 164px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  font-weight: 600;
}

.card:hover::after {
  filter: blur(30px);
}

.card:hover::before {
  transform: rotate(-90deg) scaleX(0.83) scaleY(1.24);
}
.shadow-gradient {
  background: linear-gradient(-45deg, #8608d4 0%, #0d3a83 100%);
  transform: translate3d(0, 0, 0) scale(0.95);

  /* Adding multiple shadows for a more pronounced effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.15),
    0 15px 20px rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
}
@media (max-width: 768px) {
  .card {
    width: 150px; /* Adjust width */
    height: 120px; /* Adjust height */
  }

  .card::before {
    width: 160px; /* Adjust the pseudo-element size */
    height: 130px; /* Adjust the pseudo-element size */
  }
  #laravel-text {
    font-size: 10px;
  }
  #vue-text {
    font-size: 10px;
  }
  #react-text {
    font-size: 10px;
  }
  #html-text {
    font-size: 10px;
  }
  #css-text {
    font-size: 10px;
  }
  #js-text {
    font-size: 10px;
  }
  #php-text {
    font-size: 10px;
  }
  #sql-text {
    font-size: 10px;
  }
}
</style>
