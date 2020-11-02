<template>
  <v-container fluid>
    <v-progress-linear
      height="10"
      v-if="loading"
      indeterminate
      rounded
      color="primary darken-2"
    />
    <v-flex v-else>
      <h1 class="text-center grey--text">Listado de trabajos</h1>
      <v-divider />
      <v-row>
        <v-col cols="4" v-for="job in allJobs" :key="job.id">
          <job-item :job="job" @toJobDetail="toJobDetail(job)" />
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
  import allJobsQuery from "../graphql/allJobs.query.gql";
  import { useQuery, useResult } from "@vue/apollo-composable";
  import compositionJobs from "../composition/compositionJobs";
  import JobItem  from "../components/Jobs/JobItem"
  export default {
    name: "Jobs",
    components: { JobItem },
    setup(props, context) {
      const { result, loading } = useQuery(allJobsQuery);
      const allJobs = useResult(result);

      return { allJobs, loading, ...compositionJobs(context.root.$router) }
    }
  }
</script>

<style>

</style>