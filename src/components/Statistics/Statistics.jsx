import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({
	title,
	stats = [
		{ id: "id-1", label: ".docx", percentage: 22 },
		{ id: "id-2", label: ".pdf", percentage: 4 },
		{ id: "id-3", label: ".mp3", percentage: 17 },
		{ id: "id-4", label: ".psd", percentage: 47 },
		{ id: "id-5", label: ".pdf", percentage: 10 },
	],
}) => {
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

export default Statistics;
