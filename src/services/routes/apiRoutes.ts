const apiRoutes = {
  users: {
    url: (usernameId: string) => `/users/${usernameId}`,
    repos: {
      url: (usernameId: string) => `/users/${usernameId}/repos`,
    },
  },
};

export default apiRoutes;
