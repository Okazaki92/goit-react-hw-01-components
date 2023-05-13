import PropTypes from "prop-types";
import "./TransactionHistory.css";

const TransactionHistory = ({ transactions }) => {
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
						<tr key={id}>
							<td>{type}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default TransactionHistory;
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
