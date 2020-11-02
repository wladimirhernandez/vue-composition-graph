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
      <h1 class="text-center grey--text">Ofertas de trabajo para el país {{ country.name }}</h1>
      <v-divider />
      <country-item :country="country" :detail="true" />
      <v-row>
        <v-col cols="4" v-for="job in country.jobs" :key="job.id">
          <job-item :job="job" @toJobDetail="toJobDetail(job)" />
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
  import findCountryQuery from "../graphql/findCountry.query.gql";
  import {useQuery, useResult} from "@vue/apollo-composable";
  import CountryItem from "../components/Countries/CountryItem";
  import JobItem from "../components/Jobs/JobItem";
  import compositionJobs from "../composition/compositionJobs";
  export default {
    name: "Country",
    components: {JobItem, CountryItem},
    setup(props, context) {
      const { params } = context.root.$route;
      const { result, loading } = useQuery(findCountryQuery, {
        input: {
          slug: params.slug,
        }
      });

      const country = useResult(result);
      return { country, loading, ...compositionJobs(context.root.$router) };
    }
  }
</script>