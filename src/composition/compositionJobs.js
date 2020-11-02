export default function compositionJobs ($router) {
    const toJobDetail = (job) => {
      return $router.push({
        name: "Job",
        params: {
          slug: job.slug,
          companySlug: job.company.slug
        }
      })
    };
    return { toJobDetail };
  }