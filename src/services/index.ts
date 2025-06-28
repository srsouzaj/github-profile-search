import { useUsers } from "./Users/useUsers";

const Services = () => {
  const users = new useUsers();
  return { users };
};

export default Services;
