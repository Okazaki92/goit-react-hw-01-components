import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
	return (
		<section className={styles.statistics}>
			<h2 className={styles.title}>{title}</h2>

			<ul className={styles.stat_list}>
				{stats.map((stat) => {
					return (
						<li className={styles.item} key={stat.id}>
							<span className="label">{stat.label}</span>
							<span className="percentage">{stat.percentage}%</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};
