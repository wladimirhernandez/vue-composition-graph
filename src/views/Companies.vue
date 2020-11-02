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
      <h1 class="text-center grey--text">Listado de Compañias</h1>
      <v-divider />
      <v-row>
        <v-col cols="4" v-for="company in allCompanies" :key="company.id">
          <company-item
            :company="company"
            @toCompanyDetail="toCompanyDetail(company)"
          />
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
  import allCompaniesQuery from "../graphql/allCompanies.query.gql";
  import { useQuery, useResult } from "@vue/apollo-composable";
  import CompanyItem from "../components/Companies/CompanyItem";
  import compositionCompanies from "../composition/compositionCompanies";

  export default {
    name: "Countries",
    components: {CompanyItem},
    setup(props, context) {
      const { result, loading } = useQuery(allCompaniesQuery);
      const allCompanies = useResult(result);

      return { allCompanies, loading, ...compositionCompanies(context.root.$router, context.root.$store) }
    }
  }
</script>