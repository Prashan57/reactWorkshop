import { useUsers } from "../hooks/useUsers";
import Layout from "../layout/layout";
import { contentAlignment } from "../styles/styles";

const UsersPage = () => {
  const { users } = useUsers();
  return (
    <Layout>
      <div style={contentAlignment}>
        Users List from backend:
        <ul>
          {users.map(({ name, age }) => (
            <li>
              <div>{name}</div>
              <div>{age}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default UsersPage;
