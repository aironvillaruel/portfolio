<script setup>
const facebookIcon = () => {
  console.log("fb");
  window.location.href = "https://www.facebook.com/aironvillaruel03";
};

const instagramIcon = () => {
  window.location.href = "https://www.instagram.com/mr.tobioo/";
};
const githubIcon = () => {
  window.location.href = "https://github.com/aironvillaruel";
};
const linkedIcon = () => {
  window.location.href = "https://linkedin.com/in/airon-villaruel-aa7563247";
};
</script>

<template>
  <div class="h-screen">
    <div class="absolute bg-pink-500 h-10 w-10 rounded-full blur-xl"></div>
    <div
      class="absolute bg-blue-500 right-5 h-40 w-40 rounded-full blur-xl"
    ></div>
    <div
      class="absolute bg-orange-500 right-50 bottom-40 h-40 w-40 rounded-full blur-3xl"
    ></div>

    <section class="flex justify-center items-center flex-col z-50">
      <div class="flex justify-center w-full p-5">
        <h1
          class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular"
        >
          <span
            class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
            >My</span
          >
          Contact
        </h1>
      </div>
      <!-- mobile -->
      <div
        class="md:hidden z-50 bg-gray-100 dark:bg-gradient-to-t from-slate-900 to-zinc-900 p-2 flex flex-col justify-between w-3/4 rounded-md shadow-md"
      >
        <div class="w-full p-4 flex flex-col gap-4">
          <div class="w-full flex justify-center">
            <h2 class="teko text-zinc-900 dark:text-white text-xl">
              Get in Touch
            </h2>
          </div>

          <div class="flex flex-col gap-4 items-center">
            <input
              type="text"
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Name:"
              name=""
              id=""
            />
            <input
              type="email"
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Email:"
              name=""
              id=""
            />
            <textarea
              name=""
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Your Message..."
              rows="5"
            ></textarea>
            <div id="btn-submit" class="flex">
              <button
                class="outfit text-zinc-900 dark:text-white text-md p-2 cursor-pointer bg-white dark:bg-zinc-900 w-full rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div
          class="p-2 flex flex-col justify-between gap-5 px-10 items-center w-full"
        >
          <label class="text-xl text-zinc-900 dark:text-white teko"
            >Information</label
          >
          <div class="flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-zinc-900 dark:text-white text-xl"
              />
              <span class="text-zinc-900 dark:text-white"> | </span>
              <p class="text-zinc-900 dark:text-white text-md outfit">
                aironvillaruel123@gmail.com
              </p>
            </div>

            <div class="flex items-center gap-4">
              <font-awesome-icon
                icon="fa-solid fa-phone"
                class="text-zinc-900 dark:text-white text-xl"
              />
              <span class="text-zinc-900 dark:text-white"> | </span>
              <p class="text-zinc-900 dark:text-white text-md outfit">
                09610890864
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center w-full">
            <label class="text-xl text-zinc-900 dark:text-white teko"
              >Socials</label
            >
            <div class="flex flex-row gap-5">
              <font-awesome-icon
                icon="fa-brands fa-square-facebook"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-blue-600"
              />

              <font-awesome-icon
                icon="fa-brands fa-square-instagram"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-orange-300"
              />

              <font-awesome-icon
                icon="fa-brands fa-square-github"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-gray-500"
              />
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-cyan-500"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- desktop -->
      <div
        class="hidden bg-gray-100 dark:bg-gradient-to-t from-slate-900 to-zinc-900 p-2 md:flex justify-between w-3/4 rounded-md shadow-md z-50"
      >
        <div class="w-1/2 p-4 flex flex-col gap-4">
          <div>
            <h2 class="teko text-zinc-900 dark:text-white text-xl">
              Get in Touch
            </h2>
          </div>

          <div class="flex flex-col gap-4">
            <input
              type="text"
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Name:"
              name=""
              id=""
            />
            <input
              type="email"
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Email:"
              name=""
              id=""
            />
            <textarea
              name=""
              class="outfit p-1 w-full border-b-2 border-gray-800 dark:border-gray-300 placeholder:text-zinc-900 dark:placeholder:text-white text-zinc-900 dark:text-white"
              placeholder="Your Message..."
              rows="5"
            ></textarea>
            <div id="btn-submit">
              <button
                class="outfit text-zinc-900 dark:text-white text-md p-2 cursor-pointer bg-white dark:bg-zinc-900 w-full rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="w-1/2 p-2 flex flex-col justify-between gap-5 px-10">
          <label class="text-xl text-zinc-900 dark:text-white teko"
            >Information</label
          >
          <div class="flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-zinc-900 dark:text-white text-xl"
              />
              <span class="text-zinc-900 dark:text-white"> | </span>
              <p class="text-zinc-900 dark:text-white text-md outfit">
                aironvillaruel123@gmail.com
              </p>
            </div>

            <div class="flex items-center gap-4">
              <font-awesome-icon
                icon="fa-solid fa-phone"
                class="text-zinc-900 dark:text-white text-xl"
              />
              <span class="text-zinc-900 dark:text-white"> | </span>
              <p class="text-zinc-900 dark:text-white text-md outfit">
                09610890864
              </p>
            </div>
          </div>
          <div class="flex flex-col">
            <label class="text-xl text-zinc-900 dark:text-white teko"
              >Socials</label
            >
            <div class="flex flex-row gap-5">
              <font-awesome-icon
                icon="fa-brands fa-square-facebook"
                @click="facebookIcon"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-blue-600"
              />

              <font-awesome-icon
                icon="fa-brands fa-square-instagram"
                @click="instagramIcon"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-pink-600"
              />

              <font-awesome-icon
                icon="fa-brands fa-square-github"
                @click="githubIcon"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-gray-500"
              />
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                @click="linkedIcon"
                class="text-zinc-900 dark:text-white text-3xl hover:scale-125 transition-all duration-300 cursor-pointer hover:text-cyan-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#btn-submit {
  width: 114px;
  position: relative;
  padding: 3px;
  background: linear-gradient(90deg, rgb(85, 25, 150), #4141f4);
  border-radius: 0.9em;
  transition: all 0.4s ease;
}

#btn-submit::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

#btn-submit:hover::before {
  background: linear-gradient(90deg, rgb(85, 25, 150), #4141f4);
  filter: blur(1.2em);
}
#btn-submit:active::before {
  filter: blur(0.2em);
}
</style>
