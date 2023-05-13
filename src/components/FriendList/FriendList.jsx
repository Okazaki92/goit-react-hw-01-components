import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
	return (
		<section className={styles.friends}>
			<ul className={styles.friend_list}>
				{friends.map(({ id, avatar, name, isOnline }) => (
					<FriendListItem
						key={id}
						name={name}
						isOnline={isOnline}
						avatar={avatar}
					/>
				))}
			</ul>
		</section>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
		}),
	),
};
