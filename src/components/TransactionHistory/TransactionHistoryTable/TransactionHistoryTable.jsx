import PropTypes from "prop-types";

export const TransactionHistoryTable = ({ id, type, amount, currency }) => {
	return (
		<tr key={id}>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
};

TransactionHistoryTable.propTypes = {
	transaction: PropTypes.shape({
		id: PropTypes.number.isRequired,
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}),
};
