import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import CardAllMarcup from "./components/FriendList";
import Prof from "./Prof.json";
import friend from "./FriendsLI.json";
import transaction from "./Transaction.json";
import TranAllMarcuk from "./components/TransactionHistory";

function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = Prof;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        images={avatar}
        stats={{ Followers: followers, Views: views, Likes: likes }}
      ></Profile>

      <CardAllMarcup friends={friend}></CardAllMarcup>

      <TranAllMarcuk items={transaction} />
    </>
  );
}

export default App;
