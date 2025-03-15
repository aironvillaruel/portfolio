<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

// Create a reference to the Modal component
const modalRef = ref(null);
const modalGraphic = ref(null);
const image = ref(null);

let project = ref("");
let title = ref("");
let description = ref("");
// Function to open the modal
const noctogramModal = () => {
  project = "noctogram";
  console.log(project);
  title.value = "Noctogram";
  description.value = `In today's digital world, cybercrime is a growing threat that affects individuals, businesses, and governments alike. Our mission at Noctogram is to educate, inform, and empower you with the knowledge you need to protect yourself online.

Through comprehensive resources, expert insights, and practical tips, we provide up-to-date information on the latest cyber threats, emerging trends, and how to safeguard your personal data. Whether you're a tech-savvy individual or someone new to the digital space, we aim to make cybersecurity accessible to all.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const letupassModal = () => {
  project = "letupass";
  console.log(project);
  title.value = "I Let U Pass";
  description.value = `Is an ultimate quiz-based game designed to help aspiring educators prepare for the Licensure Examination for Teachers (LET). This engaging and interactive app offers a fun and effective way to review essential topics, boost your knowledge, and test your readiness for the big day!

With a variety of questions, from educational theory to classroom management, TeacherPrep allows you to challenge yourself through gamified quizzes, unlocking achievements as you progress. Whether you're studying on the go or need a break from traditional review methods, I Let U Pass turns studying into a fun, rewarding experience.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const ciebotModal = () => {
  project = "ciebot";
  console.log(project);
  title.value = "CIEBOT";
  description.value = `CIEBOT is an intuitive chatbot designed to help students easily find information related to their school. Integrated with the power of OpenAI and Algolia search, CIEBOT provides fast, accurate, and personalized responses to students' questions. Whether it’s about upcoming events, course details, assignments, school policies, or any other educational resource, CIEBOT is here to guide students every step of the way.

With its seamless search functionality, powered by Algolia, students can quickly access information from a vast database of school-related content, while OpenAI ensures that the chatbot's responses are engaging, informative, and tailored to each individual’s needs.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const crosModal = () => {
  project = "cros";
  console.log(project);
  title.value = "Community Relations and Outreach Services System";
  description.value = `Community Relations and Outreach Services System, streamlines the process of requesting and managing outreach activities within the university. Designed for faculty, and organizations, it offers a simple and efficient way to submit requests for hosting or participating in outreach events. Whether it's for community engagement, educational workshops, or volunteer opportunities, our platform ensures that all outreach activities are organized, tracked, and approved in one central place.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const rgmModal = () => {
  project = "rgm";
  console.log(project);
  title.value = "RGM Manufacturing";
  description.value = `Our website is powered by a user-friendly Content Management System (CMS), making it easy for you to explore our product catalog, request custom solutions, and access valuable resources. Whether you're looking for rubber-like materials for industrial, automotive, medical, or other applications, our team is committed to delivering innovative solutions with reliability and precision.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const aklatanModal = () => {
  project = "aklatan";
  console.log(project);
  title.value = "E - Aklatan";
  description.value = `E - Aklatan is an online library management system which is a modern, efficient, and user-friendly platform designed to streamline the management of library resources. The system offers a seamless experience for both students and faculty, providing easy access to a wide range of digital and physical resources.`;
  modalRef.value.openModal(); // Calling openModal method through the reference
};

const graphicModal = () => {
  project = "graphic";
  console.log(project);
  title.value = "Graphic Design";
  description.value = `As a skilled graphic designer proficient in both Photoshop and Canva, I specialize in creating visually captivating designs that communicate messages effectively. From stunning social media graphics to professional branding materials, I combine creativity and technical expertise to bring your vision to life. Whether it's crafting eye-catching logos, posters, or digital ads, I bring attention to detail and a unique artistic touch to every project.`;
  modalGraphic.value.openModal(); // Calling openModal method through the reference
};
// Function to generate the video embed URL
const videoSrc = () => {
  if (project == "noctogram") {
    return "https://www.youtube.com/embed/jH4z72ZXL6k?si=ZrJhBb5GiCqVdtig";
  } else if (project == "ciebot") {
    return "https://www.youtube.com/embed/8hhElw9qZZo?si=h0IKgRuQd_xAtcoN";
  } else if (project == "letupass") {
    return "https://www.youtube.com/embed/TrXs8A5QCmY?si=Tnwpe92YQQ9ZNBkA";
  } else if (project == "cros") {
    return "https://www.youtube.com/embed/qtdMaxoTKgA?si=GxcZWKDDZnf5xO_-";
  }
  return null;
};
</script>

<template>
  <div class="flex-1 w-full">
    <Modal ref="modalRef">
      <h3
        class="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white teko"
      >
        {{ title }}
      </h3>
      <iframe
        class="hidden md:block w-full h-auto"
        style="max-width: 100%; aspect-ratio: 16 / 9"
        :src="videoSrc()"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        class="md:hidden block"
        width="300"
        height="205"
        :src="videoSrc()"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p
        class="text-zinc-900 dark:text-white outfit text-md font-semibold text-justify"
      >
        {{ description }}
      </p>
    </Modal>
    <Modal ref="modalGraphic">
      <h3
        class="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white teko"
      >
        {{ title }}
      </h3>
      <div class="flex justify-between">
        <img src="/public/techno.jpeg" class="w-1/4 shadow-xl" alt="" />
        <img src="/public/pancake.jpeg" class="w-1/4 shadow-xl" alt="" />
        <img src="/public/bondee.jpeg" class="w-1/4 shadow-xl" alt="" />
      </div>
      <p
        class="text-zinc-900 dark:text-white outfit text-md font-semibold text-justify"
      >
        {{ description }}
      </p>
    </Modal>
    <section
      class="bg-white dark:bg-zinc-900 p-4 flex justify-center flex-col items-center"
    >
      <div class="flex justify-center w-full p-5 ">
        <h1
          class="text-3xl text-zinc-900 dark:text-white font-bold anton-regular"
        >
          <span
            class="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 inline-block text-transparent bg-clip-text"
            >My</span
          >
          Projects
        </h1>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-4 h-[90%] flex-1 w-[80%] slide-top"
      >
        <div
          @click="ciebotModal"
          class="shadow-gradient rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-1 md:row-span-1 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div
            id="ciebot"
            class="col-span-2 row-span-1 md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-950 rounded-3xl text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-md teko text-2xl">
              CIEBOT
            </h2>
            <img src="/public/ciebot.png" class="w-1/3 md:w-40" />
          </div>
        </div>

        <div
          @click="crosModal"
          class="shadow-gradient-two rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-2 md:row-span-2 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div
            id="cros"
            class="col-span-2 row-span-1 md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-950 p-2 md:p-0 rounded-3xl text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-2xl teko">CROSS</h2>
            <img
              src="/public/cros.jpg"
              class="rounded-full w-1/3 md:w-40"
              alt=""
            />
          </div>
        </div>

        <div
          @click="rgmModal"
          class="shadow-gradient-three rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-1 md:row-span-1 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div
            id="rgm"
            class="col-span-1 row-span-1 p-4 bg-white dark:bg-zinc-950 rounded-3xl text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-2xl teko">RGM CMS</h2>
            <img
              src="/public/rgm.png"
              class="w-1/3 md:w-40"
              style="filter: drop-shadow(0 0 1px white)"
            />
          </div>
        </div>

        <div
          @click="aklatanModal"
          class="shadow-gradient-three rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-1 md:row-span-1 hover:scale-105 transition-all duration-300"
        >
          <div
            id="aklatan"
            class="col-span-2 row-span-1 md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-950 rounded-3xl md:p-0 text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-2xl teko">
              E-AKLATAN
            </h2>
            <img src="/public/aklatan.png" class="w-1/3 md:w-40" />
          </div>
        </div>

        <div
          @click="noctogramModal"
          class="shadow-gradient rounded-3xl p-0.5 col-span-2 row-span-1 hover:scale-105 cursor-pointer transition-all duration-300 md:col-span-1 md:row-span-2"
        >
          <div
            id="noctogram"
            class="col-span-2 row-span-1 md:col-span-1 md:row-span-2 bg-white dark:bg-zinc-950 rounded-3xl text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-2xl teko">
              NOCTOGRAM
            </h2>
            <img src="/public/noctogram.png" class="w-1/3 md:40" />
          </div>
        </div>

        <div
          @click="letupassModal"
          class="shadow-gradient-two rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-2 md:row-span-1 hover:scale-105 cursor-pointer transition-all duration-300"
        >
          <div
            id="letupass"
            class="col-span-2 row-span-1 md:col-span-2 md:row-span-1 bg-white dark:bg-zinc-950 rounded-3xl p-4 text-center flex flex-col items-center justify-between h-full"
          >
            <h2 class="text-zinc-900 dark:text-white teko text-2xl md:text-xl">
              I LET U PASS
            </h2>
            <img src="/public/letupass.png" class="w-1/3 md:w-16" />
          </div>
        </div>

        <div
          @click="graphicModal"
          class="shadow-gradient-three rounded-3xl p-0.5 col-span-2 row-span-1 md:col-span-1 md:row-span-1 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div
            id="graphic"
            class="col-span-2 row-span-1 md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-950 rounded-3xl p-4 text-center flex flex-col justify-center items-center h-full"
          >
            <h2 class="text-zinc-900 dark:text-white text-xl teko">
              GRAPHIC DESIGNS
            </h2>
            <img src="/public/graphic.png" class="w-1/3 md:w-20" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#rgm {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3cpath d='M1521.4 227.35C1395.7 238.98 1317.94 504.11 1097.53 501.75 877.12 499.39 832.08 38.14 673.66-14.93' stroke='rgba(232%2c 52%2c 18%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1465.65 425.25C1319.27 417.99 1227.4 171.85 941.81 162.05 656.21 152.25 557.57-28.71 417.96-31.79' stroke='rgba(232%2c 52%2c 18%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1587.5 265.83C1428.88 266.81 1287.4 413.47 969.93 411.43 652.45 409.39 540.78-7.54 352.35-29.37' stroke='rgba(232%2c 52%2c 18%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1629.92 71.3C1453.3 74.98 1217.39 312.49 965.59 312.1 713.78 311.71 755.25-37.43 633.42-75.23' stroke='rgba(232%2c 52%2c 18%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1718.47 134.35C1614.89 134.1 1514.3 64.35 1310.12 64.35 1105.95 64.35 1108.28 134.7 901.78 134.35 695.28 134 606.31-54.47 493.43-59.29' stroke='rgba(232%2c 52%2c 18%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#noctogram {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M804.01 573.93C941.46 557.43 994.38 266.81 1252.31 248.87 1510.24 230.93 1578.91 62.36 1700.61 58.47' stroke='rgba(87%2c 9%2c 159%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M335.85 609.35C497.2 602.15 608 335.41 917.79 328.78 1227.58 322.15 1349.76 184.28 1499.73 183.18' stroke='rgba(87%2c 9%2c 159%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M605.34 594.59C736.02 581.65 786.02 324.8 1042.43 303.26 1298.84 281.72 1353.7 60.07 1479.52 51.26' stroke='rgba(87%2c 9%2c 159%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M361.94 570.71C520.79 556.86 628.6 230.65 901.25 230.2 1173.9 229.75 1298.5 407.07 1440.56 409.4' stroke='rgba(87%2c 9%2c 159%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M218.47 593.55C352.06 583.18 442.4 318.58 677.76 317.32 913.12 316.06 907.4 387.32 1137.05 387.32 1366.7 387.32 1480.19 317.52 1596.34 317.32' stroke='rgba(87%2c 9%2c 159%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#aklatan {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1012%26quot%3b)' fill='none'%3e%3cpath d='M -356.7537863550706%2c327 C -212.75%2c281 75.25%2c99.6 363.2462136449294%2c97 C 651.25%2c94.4 795.25%2c316 1083.2462136449294%2c314 C 1371.25%2c312 1731.9%2c58.4 1803.2462136449294%2c87 C 1874.6%2c115.6 1512.65%2c383 1440%2c457' stroke='rgba(255%2c 20%2c 20%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -554.1082881518923%2c293 C -410.11%2c235.6 -122.11%2c-19.2 165.89171184810772%2c6 C 453.89%2c31.2 597.89%2c376.2 885.8917118481077%2c419 C 1173.89%2c461.8 1495.07%2c246.2 1605.8917118481077%2c220 C 1716.71%2c193.8 1473.18%2c274.4 1440%2c288' stroke='rgba(255%2c 20%2c 20%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -750.2606647906357%2c395 C -606.26%2c369.4 -318.26%2c271.4 -30.26066479063566%2c267 C 257.74%2c262.6 401.74%2c380 689.7393352093643%2c373 C 977.74%2c366 1259.69%2c201.2 1409.7393352093643%2c232 C 1559.79%2c262.8 1433.95%2c468 1440%2c527' stroke='rgba(255%2c 20%2c 20%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -249.9398138349494%2c384 C -105.94%2c317.4 182.06%2c29.8 470.0601861650506%2c51 C 758.06%2c72.2 902.06%2c488.6 1190.0601861650507%2c490 C 1478.06%2c491.4 1860.07%2c68 1910.0601861650507%2c58 C 1960.05%2c48 1534.01%2c363.6 1440%2c440' stroke='rgba(255%2c 20%2c 20%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1012'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#ciebot {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3cpath d='M-201.94 480.53C-95.08 480.77 8.91 550.53 219.75 550.53 430.6 550.53 429.62 480.44 641.44 480.53 853.26 480.62 951.16 629.46 1063.13 631.72' stroke='rgba(141%2c 7%2c 196%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-205.38 370.35C-38.48 369.89 119.06 252.1 451.79 252.75 784.51 253.4 925.67 570.75 1108.95 579.61' stroke='rgba(141%2c 7%2c 196%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-182.79 381.6C-7.41 380.6 240.08 223.96 501.01 224.8 761.94 225.64 724.12 545.6 842.91 574.66' stroke='rgba(141%2c 7%2c 196%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-36.27 163.5C134.02 168.4 261.81 415.44 594.63 421.1 927.44 426.76 1062.34 587.14 1225.52 588.56' stroke='rgba(141%2c 7%2c 196%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-59.48 82.01C42.77 82.27 142 152.01 343.49 152.01 544.97 152.01 515.61 66.68 746.45 82.01 977.3 97.34 994.5 548.83 1149.42 606.81' stroke='rgba(141%2c 7%2c 196%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#letupass {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3cpath d='M415.02 656.24C553.49 624.56 601.1 263.16 819.24 256.92 1037.39 250.68 1021.35 326.92 1223.47 326.92 1425.58 326.92 1525.13 257.18 1627.69 256.92' stroke='rgba(216%2c 45%2c 146%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M704.71 632.18C802.97 590.73 758.35 287.24 952.3 284.82 1146.25 282.4 1319.92 407.1 1447.49 408.02' stroke='rgba(216%2c 45%2c 146%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M768.97 641.35C888.69 638.28 970.41 476.16 1215.12 466.89 1459.83 457.62 1536 243.89 1661.27 237.29' stroke='rgba(216%2c 45%2c 146%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M574.15 652.77C712.62 585.5 640.16 143.13 909.84 136.52 1179.52 129.91 1410.32 264.74 1581.23 265.32' stroke='rgba(216%2c 45%2c 146%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M352.34 648.34C463.76 637.95 426.56 411.65 727.69 404.48 1028.83 397.31 1285.13 221.03 1478.4 219.68' stroke='rgba(216%2c 45%2c 146%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#cros {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3cpath d='M0 41.41C9.45 13.98 19.57 8.47 48.2 0C89.57 -12.24 94.1 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C490 0 490 0 560 0C630 0 630 0 700 0C770 0 770 0 840 0C852.5 0 854.75 -6.55 865 0C924.75 38.17 934.71 89.44 980 89.44C1009.9 89.44 981.85 21.42 1015.38 0C1051.85 -23.3 1067.69 0 1120 0C1177.35 0 1181.27 -9.54 1234.7 0C1251.27 2.96 1244.58 25 1260 25C1292.23 25 1293.95 6.44 1330 0C1363.95 -6.06 1365 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 350 1540 350 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1371.57 560 1346.43 579.82 1343.13 560C1334.77 509.82 1398.76 470.49 1376.67 420C1357.19 375.49 1309.39 370 1260 370C1238.09 370 1242.22 393.23 1234.07 420C1213.3 488.23 1238.45 515.48 1202.17 560C1181.41 585.48 1161.09 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 49.64 580.36 0 560C-20.36 551.64 -20.18 514.09 0 502.56C49.82 474.09 72.97 500.81 140 480C205.97 459.53 266 451.98 266 420C266 386.98 206.42 358.55 140 350C73.42 341.42 40.42 405.95 0 385.74C-29.58 370.95 0 332.87 0 280C0 210 0 210 0 140C0 90.7 -14.65 83.98 0 41.41' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 104.1C258.85 104.1 236.92 122.18 236.92 140C236.92 157.63 258.84 175 280 175C300.1 175 319.44 157.62 319.44 140C319.44 122.17 300.11 104.1 280 104.1' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 236.92C694.85 236.92 702.89 265.41 686.98 280C632.89 329.6 624.04 323.51 560 365.31C516.8 393.51 472.5 388.97 472.5 420C472.5 455.21 509.17 488.77 560 497.78C622.92 508.94 634.83 487.88 700 460.34C726.87 448.99 743.01 446.34 744.07 420C746.64 356.17 724.2 350.32 707.27 280C702.16 258.78 705 236.92 700 236.92' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 198.71C950.81 199.08 952.31 240.91 952.31 280C952.31 304.05 957.73 324.59 980 325C1041.58 326.14 1050.14 304.44 1120 283.11C1123.82 281.94 1127.37 281.34 1127.37 280C1127.37 278.72 1123.35 279.73 1120 277.88C1049.67 239.08 1034.66 198.02 980 198.71' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 90.7C38.98 39.01 49.45 36.36 105.57 0C119.45 -8.99 122.78 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C490 0 539.07 -33.81 560 0C582.4 36.19 506.67 73.44 506.67 140C506.67 180.77 533.53 177.2 560 214.67C582.98 247.2 605.58 251.6 605.58 280C605.58 299.58 583.97 310.63 560 310.63C528.51 310.63 525.48 298.48 494.67 280C455.48 256.5 450.02 260.04 420 226.67C387.05 190.04 400.67 178.2 368.73 140C330.67 94.48 325.25 59.23 280 59.23C232.42 59.23 224.14 93.5 183.08 140C154.14 172.77 161.89 179.09 140 217.78C122.29 249.09 129.52 256.05 103.87 280C59.52 321.42 33.49 348.51 0 348.51C-18.44 348.51 0 314.25 0 280C0 210 0 210 0 140C0 115.35 -13.81 109.01 0 90.7' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M736.72 140C758.59 80.62 787.54 43.08 840 43.08C894.45 43.08 931.92 80.31 950.53 140C968.85 198.77 905.98 213.9 913.85 280C920.71 337.65 931.59 368.5 980 387.5C1034.66 408.95 1058.55 350.34 1120 360.89C1153.18 366.59 1168.21 385.72 1169.26 420C1171.26 485.27 1149.74 492.79 1126.09 560C1125.11 562.79 1123.05 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C645.91 560 591.82 569.76 591.82 560C591.82 549.59 652.37 550.38 700 519.66C760.9 480.38 795.85 479.27 808.89 420C822.22 359.44 771.39 352.38 752.73 280C735.3 212.38 714.96 199.08 736.72 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1012.31 140C995.25 82.01 1016.79 48.18 1053.85 0C1070.64 -21.82 1086.93 0 1120 0C1156.26 0 1162.2 -14.44 1192.53 0C1232.2 18.89 1221.89 39.05 1260 66.67C1318.48 109.05 1385.71 95.84 1385.71 140C1385.71 192.9 1332.63 237.59 1260 260.78C1199.78 280.01 1183.56 255.84 1120 224.85C1059.71 195.45 1028.33 194.44 1012.31 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1540 94.29C1507.63 94.29 1432.56 26.92 1432.56 0C1432.56 -20.23 1511.39 -25.11 1540 0C1565.11 22.04 1561.35 94.29 1540 94.29' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M183.92 280C183.92 245.88 231.96 218.75 280 218.75C328.04 218.75 376.08 245.88 376.08 280C376.08 318.03 328.04 363.05 280 363.05C231.96 363.05 183.92 318.03 183.92 280' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M175.69 560C175.69 535.79 222.79 479.65 280 474.19C344.94 467.99 350.88 503.72 420 536.67C440.88 546.62 460 553.74 460 560C460 565.41 440 560 420 560C350 560 350 560 280 560C227.85 560 175.69 578.7 175.69 560' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1498.82 560C1498.82 541.5 1528.67 501.67 1540 501.67C1549.26 501.67 1552.07 542.9 1540 560C1531.48 572.07 1498.82 570.67 1498.82 560' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 14.36C249.11 14.36 217.78 3.64 217.78 0C217.78 -3.54 248.89 0 280 0C304.35 0 328.7 -3.52 328.7 0C328.7 3.66 304.57 14.36 280 14.36' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M418.03 140C418.03 135.78 418.7 131.25 420 131.25C421.35 131.25 423.33 135.98 423.33 140C423.33 142.02 421.45 143.33 420 143.33C418.8 143.33 418.03 141.82 418.03 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M794.1 140C800.58 111.61 816.69 96.92 840 96.92C864.2 96.92 883.51 110.97 889.12 140C901.2 202.51 889.97 211.87 875.38 280C865.41 326.59 859.05 369.44 840 369.44C820.45 369.44 807.67 327.43 798.18 280C784.72 212.71 779.67 203.15 794.1 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1079.62 140C1069.48 77.1 1075.44 58.48 1092.31 0C1095.63 -11.52 1106.15 0 1120 0C1135.18 0 1138.84 -8.91 1150.36 0C1208.84 45.25 1201.78 58.61 1260 108.33C1283.74 128.61 1314.29 120.93 1314.29 140C1314.29 162.84 1293.74 186.63 1260 192.16C1196.6 202.54 1186.15 190.95 1120 171.82C1095.96 164.87 1083.33 163.01 1079.62 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1540 22.86C1532.15 22.86 1513.95 6.53 1513.95 0C1513.95 -4.9 1533.06 -6.09 1540 0C1546.09 5.34 1545.18 22.86 1540 22.86' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 140C12.18 140 47.42 218.14 47.42 280C47.42 303.78 15.29 311.28 0 311.28C-8.42 311.28 0 295.64 0 280C0 210 -11.53 140 0 140' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M252.55 280C252.55 270.25 266.27 262.5 280 262.5C293.73 262.5 307.45 270.25 307.45 280C307.45 290.87 293.73 303.73 280 303.73C266.27 303.73 252.55 290.87 252.55 280' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M244.31 560C244.31 551.72 260.96 530.65 280 530.65C304.09 530.65 330.56 552.13 330.56 560C330.56 566.81 305.28 560 280 560C262.16 560 244.31 566.4 244.31 560' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3cpath d='M737.33 560C737.33 534.99 792.36 472 840 472C880.36 472 913.33 533.17 913.33 560C913.33 577.17 876.66 560 840 560C788.66 560 737.33 578.99 737.33 560' stroke='rgba(10%2c 154%2c 230%2c 0.96)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#graphic {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M795.02-97.64C698.88-69.22 760.08 186.17 529.88 203.18 299.68 220.19 138.65 369.19-0.4 371.18' stroke='rgba(230%2c 10%2c 130%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M939.21-13.04C840.21-1.17 879.46 212.51 616.29 221.02 353.12 229.53 138 398.57-29.55 400.22' stroke='rgba(230%2c 10%2c 130%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M946.65-59.17C789.56-58.07 655.16 87.07 336.48 91.06 17.8 95.05-111.7 306.2-273.69 309.46' stroke='rgba(230%2c 10%2c 130%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1084.35-82.81C891.83-46.07 810.38 436.2 501.94 442.01 193.51 447.82 68.08 325-80.46 324.41' stroke='rgba(230%2c 10%2c 130%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M602.1-43.39C497.97-6.52 570.73 280.98 327.35 302.67 83.97 324.36-77.66 479.63-222.14 481.87' stroke='rgba(230%2c 10%2c 130%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover; /* Ensure background covers the div */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Avoid repeating the background */
}

#project {
  font: 5vmin/1.3 sans-serif;
  overflow: hidden;
}

#project {
  color: transparent;
}

#project::before,
#project::after,
#project::before,
#project::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: ".";
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

#project::before {
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

#project::after {
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

#project::before {
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

#project::after {
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

.shadow-gradient {
  background: linear-gradient(-45deg, #8608d4 0%, #0d3a83 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  border-radius: 25px; /* Optional: Adds rounded corners */

  /* Adding multiple shadows for a more pronounced effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.15),
    0 15px 20px rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
}

.shadow-gradient-two {
  background: linear-gradient(-45deg, #fc128e 0%, #07cdff 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  border-radius: 25px; /* Optional: Adds rounded corners */

  /* Adding multiple shadows for a more pronounced effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.15),
    0 15px 20px rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
}

.shadow-gradient-three {
  background: linear-gradient(-45deg, #ff2410 0%, #680d83 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  border-radius: 25px; /* Optional: Adds rounded corners */

  /* Adding multiple shadows for a more pronounced effect */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.15),
    0 15px 20px rgba(0, 0, 0, 0.2);

  transition: all 0.3s ease;
}
</style>
