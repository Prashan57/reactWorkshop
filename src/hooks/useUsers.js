import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersResponse) => setUsers(usersResponse));
  });

  const useFetchUsers = async () => {
    const usersResponse = await getUsers();
    setUsers(usersResponse);
  };

  return {
    users,
    useFetchUsers,
  };
};
