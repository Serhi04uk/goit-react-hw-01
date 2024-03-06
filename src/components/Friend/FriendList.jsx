import cssFr from "./friendList.module.css";
import FriendListItem from "./FriendListItem";

function Some(prop) {
  return prop.else.map((boys) => {
    return (
      <li key={boys.id}>
        <FriendListItem friends={boys} />
      </li>
    );
  });
}

export default function FriendItem({ friends }) {
  return (
    <ul className={cssFr.disp}>
      <Some else={friends} />
    </ul>
  );
}
