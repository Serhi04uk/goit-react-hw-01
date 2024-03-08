import css from "./friendListItem.module.css";

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <div className="status">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={isOnline ? css.online : css.offline}
        // style={{
        //   color: getBgColor(friends.isOnline),
        // }}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}
// function getBgColor(col) {
//   if (col) {
//     return "green";
//   } else {
//     return "red";
//   }
// }
