<template>
  <v-card color="grey darken-4" dark class="mx-auto" :max-width="!detail ? '400' : ''">
    <v-card-title>{{ country.name }}</v-card-title>

    <v-card-text class="text--primary">
      <div class="white--text">Ofertas de trabajo ({{ country.jobs.length }})</div>
    </v-card-text>

    <v-card-text>
      <v-chip-group column>
        <v-chip color="accent" text-color="white" v-for="city in country.cities" :key="city.id">
          {{ city.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions v-if="!detail">
      <v-btn
          color="primary"
          text
          @click="$emit('toCountryDetail')"
      >
        Ver detalle
      </v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn
          color="primary"
          text
          @click="$router.push({ name: 'Countries' })"
      >
        Volver al listado
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "CountryItem",
    props: ["country", "detail"]
  }
</script>