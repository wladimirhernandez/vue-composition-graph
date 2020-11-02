<template>
  <v-card
    color="grey darken-4"
    dark
    class="mx-auto"
    :max-width="!detail ? '400' : ''"
  >
    <v-card-title
    style="display:block;"
      >{{ company.name }}
      <br>
      <small
        ><a :href="company.websiteUrl">{{ company.websiteUrl }}</a></small
      >
    </v-card-title>

    <v-card-text class="text--primary">
      <div class="white--text">
        Ofertas de trabajo ({{ company.jobs.length }})
      </div>
    </v-card-text>

    <v-card-text>
      <!--  <v-chip-group column>
        <v-chip color="accent" text-color="white" v-for="city in company.cities" :key="city.id">
          {{ city.name }}
        </v-chip>
      </v-chip-group>-->
    </v-card-text>
    <v-card-actions v-if="!detail">
      <v-btn color="primary" text @click="$emit('toCompanyDetail')">
        {{ company.jobs.length > 0 ? "Ver Ofertas" : "Ver Detalles" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CompanyItem",
  props: ["company", "detail"],
};
</script>