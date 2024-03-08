import cssFr from "./friendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

// function Some(prop) {
//   return prop.else.map((boys) => {
//     return (
//       <li key={boys.id}>
//         <FriendListItem friends={boys} />
//       </li>
//     );
//   });
// }

export default function FriendList({ friends }) {
  return (
    <ul className={cssFr.disp}>
      {/* <Some else={friends} /> */}
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}
