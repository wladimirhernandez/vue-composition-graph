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
      <h1 class="text-center grey--text">Listado de países</h1>
      <v-divider />
      <v-row>
        <v-col cols="4" v-for="country in allCountries" :key="country.id">
          <country-item :country="country" @toCountryDetail="toCountryDetail(country)" />
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
  import allCountriesQuery from "../graphql/allCountries.query.gql";
  import { useQuery, useResult } from "@vue/apollo-composable";
  import CountryItem from "../components/Countries/CountryItem";
  import compositionCountries from "../composition/compositionCountries";

  export default {
    name: "Countries",
    components: {CountryItem},
    setup(props, context) {
      const { result, loading } = useQuery(allCountriesQuery);
      const allCountries = useResult(result);

      return { allCountries, loading, ...compositionCountries(context.root.$router) }
    }
  }
</script>