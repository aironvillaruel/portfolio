<script setup>
import { ref, defineExpose } from "vue";

// Define isVisible as a reactive reference
const isVisible = ref(false);

// Method to open the modal
const openModal = () => {
  isVisible.value = true;
};

// Method to close the modal
const closeModal = () => {
  isVisible.value = false;
};

// Expose the openModal method so it's accessible from the parent component
defineExpose({
  openModal,
});
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-zinc-900/60 p-4 md:p-0 z-50"
  >
    <div
      class="bg-white dark:bg-zinc-950 border-2 border-zinc-900 dark:border-white shadow-2xl p-6 rounded-lg relative scale-up-center md:w-1/2 flex justify-center flex-col items-center gap-5"
    >
      <!-- Modal content goes here -->
      <slot></slot>

      <!-- Close Button -->
      <p
        class="absolute top-2 right-2 text-xl p-2 hover:scale-125 transition-all duration-300 cursor-pointer text-zinc-900 dark:text-white"
        @click="closeModal"
      >
        <i class="fa-solid fa-circle-xmark"></i>
      </p>
    </div>
  </div>
</template>

<style></style>
