<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="#333" dark>
      <!-- Mobile Navigation Icon -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-flex">Runard Ramos</v-toolbar-title>
      <v-spacer class="d-none d-sm-flex"></v-spacer>

      <!-- Desktop Links -->
      <v-btn text class="d-none d-sm-flex" @click="scrollToSection('about')">About</v-btn>
      <v-btn text class="d-none d-sm-flex" @click="scrollToSection('projects')">Projects</v-btn>
      <v-btn text class="d-none d-sm-flex" @click="scrollToSection('skills')">Skills</v-btn>
      <v-btn text class="d-none d-sm-flex" @click="scrollToSection('contact')">Contact</v-btn>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">
      <v-list>
        <v-list-item @click="scrollToSection('about'); drawer = false">About</v-list-item>
        <v-list-item @click="scrollToSection('projects'); drawer = false">Projects</v-list-item>
        <v-list-item @click="scrollToSection('skills'); drawer = false">Skills</v-list-item>
        <v-list-item @click="scrollToSection('contact'); drawer = false">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <!-- Hero Section -->
      <v-container fill-height fluid class="d-flex align-center justify-center hero-section">
        <v-row>
          <v-col class="text-left ms-8">
            <h1 class="display-1 text-white">A Journey to the Crown</h1>
            <h2 class="text-h5 text-white">Mr. CSU 4th runner-up</h2>
            <v-btn class="mt-5" color="primary" large @click="scrollToSection('about')">Learn More</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- About Section -->
      <v-container id="about" class="py-10 about-section">
        <v-row justify="center">
          <v-col xs="12" md="8">
            <h2 class="text-center mb-4 text-primary">About Me</h2>
            <p class="text-center">
              As the proud recipient of the Mr. CSU title and a driven advocate for meaningful change, my journey is defined by passion, resilience, and a commitment to shaping a better future. This portfolio is not just a showcase of my skills and projects; it is a reflection of my purpose to use my platform, talents, and voice for the greater good. Every line of code, every design, and every initiative I pursue is driven by three powerful advocacies that I hold close to my heart: Cultural Dance Awareness and Preservation, Mental Health Advocacy, and Environmental Sustainability.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <!-- Projects Section -->
      <v-container id="projects" class="py-10 projects-section">
        <h2 class="text-center mb-6 text-primary">Mission</h2>
        <v-row dense>
          <v-col cols="12" md="6" lg="4" v-for="project in projects" :key="project.title">
            <v-card class="project-card" elevation="3">
              <v-img :src="project.image" height="200px" @click="openGallery(project.images)"></v-img>
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-subtitle>{{ project.description }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text color="primary" :to="project.link">View Project</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Image Gallery Modal -->
      <v-dialog v-model="galleryVisible" max-width="80%" persistent>
        <v-card>
          <v-card-title class="headline">Project Gallery</v-card-title>
          <v-card-text>
            <v-carousel v-if="currentImages.length > 0" v-model="currentIndex" hide-delimiters>
              <v-carousel-item v-for="(image, index) in currentImages" :key="index">
                <v-img :src="image" aspect-ratio="1.5"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="galleryVisible = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Skills Section -->
      <v-container id="skills" class="py-10 skills-section">
        <h2 class="text-center mb-6 text-primary">Skills</h2>
        <v-row justify="center">
          <v-chip v-for="skill in skills" :key="skill" class="ma-2" color="primary" text-color="white">{{ skill }}</v-chip>
        </v-row>
      </v-container>

      <!-- Contact Section -->
      <v-container id="contact" class="py-10 contact-section">
        <h2 class="text-center mb-6 text-primary">Contact Me</h2>
        <v-row justify="center">
          <v-col xs="12" md="8">
            <v-form @submit.prevent="sendMessage">
              <v-text-field
                v-model="contactEmail"
                label="Your Email"
                prepend-inner-icon="mdi-email-outline"
                outlined
                required
                class="mb-4"
              ></v-text-field>
              <v-textarea
                v-model="contactMessage"
                label="Message"
                outlined
                rows="4"
                required
                class="mb-4"
              ></v-textarea>
              <v-btn color="primary" large block type="submit">Send Message</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer Section -->
    <v-footer app dark>
      <v-col class="text-center white--text" cols="12">
        <span>&copy; 2024 Runard Ramos. All rights reserved.</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const drawer = ref(false);
    const galleryVisible = ref(false);
    const currentImages = ref([]);
    const currentIndex = ref(0);

    const projects = ref([
      {
        title: 'Rhythm Of Culture',
        description: 'A sleek weather app built with Vue.js and Vuetify.',
        longDescription: 'This project is a weather app designed with Vue.js and Vuetify, focusing on providing users with an intuitive experience for tracking the weather. It includes real-time updates and sleek design, with a focus on cultural heritage integration through visuals and content.',   
        link: '/src/views/Culture.vue',
        image: require('@/assets/culturepic.webp'),
        images: [
          require('@/assets/culturepic.webp'),
          require('@/assets/culturepic.webp'),
          require('@/assets/culturepic.webp'),
        ]
      },
      {
        title: 'Seen & Heard',
        description: 'My personal portfolio website built with Vue and Vuetify.',
        link: '/src/views/Culture.vue',
        image: require('@/assets/mentalhealth.avif'),
        images: [
          require('@/assets/mentalhealth.avif'),
          require('@/assets/mentalhealth.avif'),
          require('@/assets/mentalhealth.avif'),
        ]
      },
      {
        title: 'Greener Future',
        description: 'An online store using Vue, Vuetify, and Firebase.',
        link: '#',
        image: require('@/assets/greener.jpg'),
        images: [
          require('@/assets/greener.jpg'),
          require('@/assets/greener.jpg'),
          require('@/assets/greener.jpg'),
        ]
      }
    ]);

    const skills = ref(['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Vuetify', 'Firebase', 'SQL']);
    const contactEmail = ref('');
    const contactMessage = ref('');

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    };

    const sendMessage = () => {
      if (contactEmail.value && contactMessage.value) {
        alert(`Message sent from: ${contactEmail.value}`);
        contactEmail.value = '';
        contactMessage.value = '';
      } else {
        alert('Please fill in both fields.');
      }
    };

    const openGallery = (images) => {
      currentImages.value = images;
      currentIndex.value = 0;
      galleryVisible.value = true;
    };

    return { drawer, projects, skills, contactEmail, contactMessage, sendMessage, scrollToSection, galleryVisible, currentImages, currentIndex, openGallery };
  },
};
</script>

<style scoped>
.hero-section {
  background: url('@/assets/bg.jpg') no-repeat center center/cover;
  height: 100vh;
  position: relative;
}

.project-card {
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.v-footer {
  background-color: #121212;
  padding: 10px 0;
}

.white--text {
  color: white !important;
}
</style>
