import css from "./ProfileCSS.module.css";

export default function Profile(props) {
  return (
    <div className={css.prof}>
      <div className={css.divvv}>
        <img src={props.images} alt="User avatar" width={200} />
        <p>{props.name}</p>
        <p>{props.tag}</p>
        <p>{props.location}</p>
        <ul className={css.ulList}>
          <li>
            <span>Followers</span>
            <span>{props.stats.Followers}</span>
          </li>

          <li className={css.secondChild}>
            <span>Views</span>
            <span>{props.stats.Views}</span>
          </li>

          <li>
            <span>Likes</span>
            <span>{props.stats.Likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
