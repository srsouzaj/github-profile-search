declare const apiRoutes: {
    users: {
        url: (usernameId: string) => string;
        repos: {
            url: (usernameId: string) => string;
            byName: {
                url: (usernameId: string, repoName: string) => string;
            };
        };
    };
    repo: {
        url: () => string;
    };
};
export default apiRoutes;
