<template>
  <v-container fluid v-if="company.id">
    <v-flex>
      <h1 class="text-center grey--text">
        Ofertas de trabajo de {{ company.name }}
      </h1>
      <v-divider />
      <company-item :company="company" :detail="true" />
      <v-row>
        <v-col cols="4" v-for="job in company.jobs" :key="job.id">
          <job-item :job="job" @toJobDetail="toJobDetail(job)" />
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
import CompanyItem from "../components/Companies/CompanyItem";
import JobItem from "../components/Jobs/JobItem";
import compositionJobs from "../composition/compositionJobs";

export default {
  name: "Country",
  components: { JobItem, CompanyItem },
  setup(props, context) {
    const company = context.root.$store.state.selectedCompany;

    if (company.length < 1) {
      context.root.$router.push({
        name: "Companies",
      });
    }

    return { company, ...compositionJobs(context.root.$router) };
  },
};
</script>