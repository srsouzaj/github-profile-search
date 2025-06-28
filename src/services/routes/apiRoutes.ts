const apiRoutes = {
  users: {
    url: (usernameId: string) => `/users/${usernameId}`,
    repos: {
      url: (usernameId: string) => `/users/${usernameId}/repos`,
      byName: {
        url: (usernameId: string, repoName: string) =>
          `/repos/${usernameId}/${repoName}`,
      },
    },
  },
};

export default apiRoutes;
