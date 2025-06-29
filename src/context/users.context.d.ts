import type { OutUsers } from "@/services/Users/Models";
import type { OutRepos } from "@/services/Repos/Models";
import { type ReactNode } from "react";
interface UserContextData {
    user: OutUsers;
    handleLoggerUser: (value: OutUsers) => void;
    sort: "stars" | "updated" | "full_name";
    order: "asc" | "desc";
    page: number;
    per_page: number;
    totalPages: number;
    changePage: (direction: "next" | "prev") => void;
    handleSort: (column: "stars" | "updated" | "full_name") => void;
    sortedRepos: OutRepos[];
    isLoadingRepositories: boolean;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
export declare const UserProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useUsersContext: () => UserContextData;
export {};
