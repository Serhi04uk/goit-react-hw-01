export default function FriendListItem({ friends }) {
  return (
    <div>
      <img src={friends.avatar} alt="Avatar" width="48" />
      <p>{friends.name}</p>
      <p
        style={{
          color: getBgColor(friends.isOnline),
        }}
      >
        {getBgColor(friends.isOnline) === "green" ? "online" : "offline"}
      </p>
    </div>
  );
}
function getBgColor(col) {
  if (col) {
    return "green";
  } else {
    return "red";
  }
}
