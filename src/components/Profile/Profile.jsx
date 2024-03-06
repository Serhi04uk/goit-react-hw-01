import css from "./profile.module.css";

export default function Profile({ name, images, tag, location, stats }) {
  return (
    <div className={css.prof}>
      <div className={css.divvv}>
        <img src={images} alt="User avatar" width={200} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
        <ul className={css.ulList}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>

          <li className={css.secondChild}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>

          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
