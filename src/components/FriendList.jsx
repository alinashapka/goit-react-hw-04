import FriendListItem from "./FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({friends}) {
    return (<ul className={clsx(css.list)}>
        {friends.map(friend => (<li key={friend.id} className={clsx(css.item)}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>))}
</ul>)
}