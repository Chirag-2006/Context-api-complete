import userContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";

function Profile() {
  const { user } = UserContextProvider(userContext);

  if (!user) {
    return <div>Login first</div>;
  }

  return <div>Profile {user.username}</div>;
}

export default Profile;
