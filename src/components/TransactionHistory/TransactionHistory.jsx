import PropTypes from "prop-types";
import { TransactionHistoryTable } from "./TransactionHistoryTable/TransactionHistoryTable";
import "./TransactionHistory.css";

export const TransactionHistory = ({ transactions }) => {
	return (
		<section className="transaction">
			<table className="transaction-history">
				<thead>
					<tr>
						<th>Type</th>
						<th>Amount</th>
						<th>Currency</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map(({ id, type, amount, currency }) => (
						<TransactionHistoryTable
							key={id}
							type={type}
							amount={amount}
							currency={currency}
						/>
					))}
				</tbody>
			</table>
		</section>
	);
};

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}),
	),
};
