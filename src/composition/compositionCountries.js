export default function compositionJobs($router) {
  const toCountryDetail = (country) => {
    return $router.push({
      name: "Country",
      params: {
        slug: country.slug
      },
    });
  };
  return { toCountryDetail };
}
