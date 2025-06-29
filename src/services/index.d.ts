import { useRepos } from "./Repos/useRepos";
import { useUsers } from "./Users/useUsers";
declare const Services: () => {
    users: useUsers;
    repos: useRepos;
};
export default Services;
