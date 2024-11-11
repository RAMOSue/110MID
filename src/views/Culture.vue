<template>
    <v-app>
      <!-- Navbar -->
      <v-app-bar app color="transparent" dark>
        <v-toolbar-title>Rhythm of Culture</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="scrollToSection('education')">Education</v-btn>
        <v-btn text @click="scrollToSection('cultural-groups')">Cultural Groups</v-btn>
        <v-btn text @click="scrollToSection('contact')">Contact</v-btn>
        <v-btn text @click="goBackToHome">Back to Home</v-btn>

      </v-app-bar>
  
      <!-- Hero Section -->
      <v-container fill-height class="d-flex align-center justify-center hero-section">
        <v-row>
          <v-col class="text-center">
            <h1 class="display-1 text-white">Celebrating the Rhythm of Culture</h1>
            <p class="text-h5 text-white">Embrace the diverse cultural heritage that shapes our world.</p>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Education Section -->
      <v-container id="education" class="py-10 education-section">
        <v-row justify="center">
          <v-col xs="12" md="8">
            <h2 class="text-center mb-4 text-primary">Cultural Education</h2>
            <p class="text-center">
              We believe in the power of cultural education to preserve traditions and celebrate diverse ways of life. Our programs offer a deep dive into the history, art, and rituals of cultures from all over the world.
            </p>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Cultural Groups Section -->
      <v-container id="cultural-groups" class="py-10 cultural-groups-section">
        <h2 class="text-center mb-6 text-primary">Cultural Groups</h2>
        <v-row dense>
          <v-col cols="12" md="6" lg="4" v-for="group in culturalGroups" :key="group.name">
            <v-card class="group-card" elevation="3">
              <v-img :src="group.image" height="200px"></v-img>
              <v-card-title>{{ group.name }}</v-card-title>
              <v-card-subtitle>{{ group.description }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Contact Section -->
      <v-container id="contact" class="py-10 contact-section">
        <h2 class="text-center mb-6 text-primary">Contact Us</h2>
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
  
      <!-- Footer Section -->
      <v-footer app dark>
        <v-col class="text-center white--text" cols="12">
          <span>&copy; 2024 Rhythm of Culture. All rights reserved.</span>
        </v-col>
      </v-footer>
  
    </v-app>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const contactEmail = ref('');
      const contactMessage = ref('');
  
      const culturalGroups = ref([
        {
          name: 'African Drumming',
          description: 'Learn the rhythm and culture of traditional African drumming.',
          image: 'https://via.placeholder.com/400x200',
        },
        {
          name: 'Indian Dance',
          description: 'Explore the graceful movements and deep history of Indian classical dance.',
          image: 'https://via.placeholder.com/400x200',
        },
        {
          name: 'Latin Music & Dance',
          description: 'Experience the vibrant music and passionate dances of Latin America.',
          image: 'https://via.placeholder.com/400x200',
        },
      ]);
  
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
  
      return { culturalGroups, contactEmail, contactMessage, sendMessage, scrollToSection };
    },
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: url('@/assets/bg.jpg') no-repeat center center/cover;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
  }
  
  .education-section, .cultural-groups-section, .contact-section {
    background: #f5f5f5;
    border-radius: 20px;
  }
  
  .group-card {
    transition: transform 0.3s;
  }
  
  .group-card:hover {
    transform: translateY(-5px);
  }
  
  .text-primary {
    color: #1e3a8a !important;
  }
  
  .v-app-bar, .v-btn, .v-toolbar-title {
    color: white !important;
  }
  
  .v-footer {
    background-color: #121212;
    padding: 10px 0;
  }
  
  .white--text {
    color: white !important;
  }
  </style>
  