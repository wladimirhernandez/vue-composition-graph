<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Aprendiendo en 🏠 Apollo con Vue 3</h1>
      </div>
      <v-spacer />

      <v-btn icon @click="$router.push('/')">
        <v-icon>mdi-home-map-marker</v-icon>
      </v-btn>

      <v-btn icon @click="$router.push({ name: 'Countries' })">
        <v-icon>mdi-wan</v-icon>
      </v-btn>

      <v-btn icon @click="$router.push({ name: 'Companies' })">
        <v-icon>mdi-sitemap</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
