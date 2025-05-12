import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
    return ( <>
        <img className={clsx(css.image)} src={avatar} alt={name} width="48" />
  <p className={clsx(css.name)}>{name}</p>
  <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
</>)
}