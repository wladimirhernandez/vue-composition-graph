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
      <h1 class="text-center grey--text">Información del trabajo {{ job.title }}</h1>
      <v-divider />
      <job-item :job="job" :detail="true" />
    </v-flex>
  </v-container>
</template>

<script>
  import findJob from "../graphql/findJob.query.gql";
  import { useQuery, useResult } from "@vue/apollo-composable";
  import JobItem from "../components/Jobs/JobItem";
  export default {
    name: "Job",
    components: {JobItem},
    setup(props, context) {
      const { params } = context.root.$route;
      const { result, loading } = useQuery(findJob, {
        input: {
          jobSlug: params.slug,
          companySlug: params.companySlug
        }
      });
      const job = useResult(result);
      return { job, loading };
    }
  }
</script>