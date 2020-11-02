<template>
  <v-card class="mx-auto" :max-width="!detail ? '400' : ''">
    <v-card-title>{{ job.title }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ job.postedAt }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ job.company.name }}</div>
      <div class="grey--text font-weight-medium" v-if="detail">
        {{ job.description }}
      </div>
    </v-card-text>

    <v-card-text>
      <v-chip-group column>
        <v-chip color="accent" text-color="white" v-for="tag in job.tags" :key="tag.id">
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions v-if="!detail">
      <v-btn
          color="primary"
          text
          @click="$emit('toJobDetail')"
      >
        Más información
      </v-btn>
    </v-card-actions>
    <v-card-actions v-else>
      <v-btn
          color="primary"
          text
          @click="$router.push({ name: 'Jobs' })"
      >
        Ver más trabajos
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "JobItem",
    props: ["job", "detail"],
  }
</script>