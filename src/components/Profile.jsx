import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
<div className={clsx(css.container)}>
  <div className={clsx(css.imgContainer)}>
    <img className={clsx(css.image)}
      src={image}
      alt={name}
    />
    <p className={clsx(css.name)}>{name}</p>
    <p className={clsx(css.text)}>@{tag}</p>
    <p className={clsx(css.text)}>{location}</p>
  </div>

  <ul className={clsx(css.list)}>
    <li className={clsx(css.item)}>
      <span className={clsx(css.itemText)}>Followers</span>
      <span className={clsx(css.itemNumber)}>{stats.followers}</span>
    </li>
    <li className={clsx(css.item)}>
      <span className={clsx(css.itemText)}>Views</span>
      <span className={clsx(css.itemNumber)}>{stats.views}</span>
    </li>
    <li className={clsx(css.item)}>
      <span className={clsx(css.itemText)}>Likes</span>
      <span className={clsx(css.itemNumber)}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}