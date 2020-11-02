export default function compositionCompanies($router, $store) {
    const toCompanyDetail = (company) => {
      return [$router.push({
        name: "Company",
        params: {
          slug: company.slug
        },
      }),
      $store.dispatch('getCompany', {
        company: company
      })
    ]
    };
    return { toCompanyDetail };
  }  