export declare const mockUsersContext: ({ user, page, totalPages, sortedRepos, isLoadingRepositories, hasNextPage, hasPrevPage, changePage, sort, order, handleSort, }?: {
    user?: {
        public_repos: number;
    } | undefined;
    page?: number | undefined;
    totalPages?: number | undefined;
    sortedRepos?: never[] | undefined;
    isLoadingRepositories?: boolean | undefined;
    hasNextPage?: boolean | undefined;
    hasPrevPage?: boolean | undefined;
    changePage?: import("vitest").Mock<(...args: any[]) => any> | undefined;
    sort?: string | undefined;
    order?: string | undefined;
    handleSort?: import("vitest").Mock<(...args: any[]) => any> | undefined;
}) => {
    user: {
        public_repos: number;
    };
    page: number;
    totalPages: number;
    sortedRepos: never[];
    isLoadingRepositories: boolean;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    changePage: import("vitest").Mock<(...args: any[]) => any>;
    sort: string;
    order: string;
    handleSort: import("vitest").Mock<(...args: any[]) => any>;
};
