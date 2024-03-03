import cssFr from "./friend.module.css";

function Card({ friends }) {
  return friends.map((boys) => {
    return (
      <li key={boys.id}>
        <div>
          <img src={boys.avatar} alt="Avatar" width="48" />
          <p>{boys.name}</p>
          <p
            style={{
              color: getBgColor(boys.isOnline),
            }}
          >
            {getBgColor(boys.isOnline) === "green" ? "online" : "offline"}
          </p>
        </div>
      </li>
    );
  });
}

export default function CardAllMarcup({ friends }) {
  return (
    <ul className={cssFr.disp}>
      <Card friends={friends} />
    </ul>
  );
}

function getBgColor(col) {
  if (col) {
    return "green";
  } else {
    return "red";
  }
}
