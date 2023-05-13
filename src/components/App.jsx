import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import data from "../dataJson/data";
import friends from "../dataJson/friends";
import transactions from "../dataJson/transactions";
import user from "../dataJson/user";

export const App = () => {
	return (
		<div className="container">
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>

			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
			<TransactionHistory transactions={transactions} />
		</div>
	);
};
