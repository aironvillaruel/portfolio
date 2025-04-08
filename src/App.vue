<script setup>
import { ref, onMounted, onUpdated, nextTick } from 'vue';
import { useDark, useToggle } from "@vueuse/core";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define reactive properties
const input = ref("");
const response = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const conversation = ref([]);
const messagesContainer = ref(null);
onMounted(() => {
  // First message from Gemini AI: welcoming message
  conversation.value.push({
    text: "Hello I'm Airon, how may I help you?",
    isUser: false,
  });
});
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

onMounted(scrollToBottom);
onUpdated(scrollToBottom);


// Initialize GoogleGenerativeAI with API Key (consider using env variables in production)
const apiKey = "AIzaSyA4SMzxlWdi5I3eovZZpbw1aEcAOxXPbWs"; // Do not expose the API key directly in production
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // The model you're using
});

const handleSubmit = async () => {
  if (!input.value) {
    errorMessage.value = "Please enter a query";
    return;
  }

  // isLoading.value = true;
  // errorMessage.value = "";

  try {
    // Store the user message
    conversation.value.push({ text: input.value, isUser: true });

    // Call the generateContent method with the user input as the prompt
    const result = await model.generateContent(input.value);

    // Add the AI response to the conversation
    const aiResponse = result.response.text();
    conversation.value.push({ text: aiResponse, isUser: false });

    // Clear the input field
    input.value = "";
  } catch (error) {
    errorMessage.value = `Error: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};

// Handle dark mode
const isDark = useDark("Dark");
const toggleDark = useToggle(isDark);

const chatMe = () => {
  console.log("hello");
  const chat = document.getElementById("chat");
  const chatMe = document.getElementById("chatMe");

  chat.classList.remove("hidden");
  chatMe.classList.add("hidden");
};
const closeChat = () => {
  const chat = document.getElementById("chat");
  const chatMe = document.getElementById("chatMe");

  chat.classList.add("hidden");
  chatMe.classList.remove("hidden");
};
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
    <div
      @click="chatMe"
      id="chatMe"
      class="z-50 bg-gradient-to-br  from-blue-900 via-fuchsia-800 to-pink-800 text-white teko cursor-pointer fixed bottom-2 right-2 p-2 w-40 flex justify-center items-center rounded-xl border shadow-md hover:scale-105 transition-all duration-300 hover:border-white"
    >
      Chat Me
    </div>
    <div
      id="chat"
      class="fixed z-50 bottom-2 right-2 bg-white dark:bg-zinc-900 w-2/3 md:w-1/4 h-1/2 md:h-2/3 shadow-xl border border-zinc-900 rounded-xl hidden dark:border-white"
    >
      <div class="flex flex-col justify-between w-full h-full">
        <!-- Header -->
        <div
          class="pl-4 z-10 bg-gradient-to-br gap-2 from-blue-900 via-fuchsia-800 to-pink-800 p-1 rounded-t-xl flex items-center justify-between"
        >
          <div class="flex flex-row items-center gap-2">
            <div
              class="bg-gray-300 rounded-full flex items-center justify-center w-10 h-10"
            >
              <img
                src="/public/me.png"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 class="text-white font-semibold outfit">Airon Villaruel</h2>
          </div>
          <p
            class="absolute top-0 right-2 text-xl p-2 hover:scale-125 transition-all duration-300 cursor-pointer text-white"
            @click="closeChat"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </p>
        </div>

        <!-- Display Loading or Messages -->
        <div class="flex flex-col p-2 space-y-4 overflow-y-auto " ref="messagesContainer">
          <div
            v-for="(message, index) in conversation"
            :key="index"
            :class="message.isUser ? 'user-message' : 'ai-message'"
          >
            <div class="message-container">
              <p class="message-text outfit">{{ message.text }}</p>
            </div>
          </div>
        </div>

        <!-- Input Section -->
        <div class="bg-white dark:bg-zinc-800 border border-zinc-600 p-1 flex rounded-b-xl">
          <input
            v-model="input"
            @keydown.enter = "handleSubmit"
            placeholder="Ask something..."
            class="w-full p-1 dark:placeholder:text-white dark:text-white"
          />
          <button
            @click="handleSubmit"
            :disabled="isLoading"
            class="bg-gradient-to-br from-blue-900 via-fuchsia-800 to-pink-800 w-10 h-10 rounded-full"
          >
            <font-awesome-icon
              icon="fa-solid fa-paper-plane"
              class="text-white"
            />
          </button>
        </div>
      </div>
    </div>
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
.user-message {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.user-message .message-container {
  background: linear-gradient(to bottom right, #1e3a8a, #9d1c8c, #9b2c20);
  color: white;
  border-radius: 10px;
  max-width: 75%;
  text-align: left;
  padding: 2%;
  margin-top: 5%;
}

.ai-message {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.ai-message .message-container {
  background-color: #f1f1f1;
  color: #333;
  border-radius: 10px;
  max-width: 75%;
  text-align: left;
  padding: 2%;
  margin-top: 5%;
}
</style>
