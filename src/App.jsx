import "./App.css";

import Profile from "./components/Profile/Profile";
import FriendItem from "./components/Friend/FriendList";
import TranAllMarcuk from "./components/TransactionHistory/TransactionHistory";

import profile from "./Profile.json";
import friend from "./FriendList.json";
import transaction from "./TransactionHistory.json";

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = profile;

function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        images={avatar}
        stats={{ followers, views, likes }}
      ></Profile>

      <FriendItem friends={friend}></FriendItem>

      <TranAllMarcuk items={transaction} />
    </>
  );
}

export default App;
