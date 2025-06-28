import { useRepos } from "./Repos/useRepos";
import { useUsers } from "./Users/useUsers";

const Services = () => {
  const users = new useUsers();
  const repos = new useRepos();
  return { users, repos };
};

export default Services;
