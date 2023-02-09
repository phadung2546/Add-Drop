<template>
  <nav></nav>

  <v-app>
    <v-app-bar color="teal-darken-6" image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="grey--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-icon size="large" color="green-darken-2"> mdi-domain </v-icon>
      <v-btn><RouterLink to="/news">ข่าว</RouterLink></v-btn> <br />
      <v-icon size="large" color="green-darken-2"> mdi-message-text </v-icon>
      <v-btn> <RouterLink to="/plan">แผนการเรียน</RouterLink></v-btn
      ><br />
      <v-icon size="large" color="black-darken-2"> mdi-dialpad </v-icon>
      <v-btn><RouterLink to="/adddrop">เพิ่มถอนรายวิชา</RouterLink></v-btn
      ><br />
      <v-icon size="large" color="orange-darken-2">
        mdi-arrow-up-bold-box-outline
      </v-icon>
      <v-btn><RouterLink to="/about">ผลการลงทะเบียน</RouterLink></v-btn>
    </v-navigation-drawer>

    <v-main><RouterView /></v-main>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const drawer = ref(false);
</script>
