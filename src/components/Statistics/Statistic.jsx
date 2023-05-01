import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import getRandomColor from '../../utils/getRandomColor'

export const Statistic = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        
        {stats.map(({id, label, percentage})=>{
            return(
                <li 
                    style={{ backgroundColor: getRandomColor()}}
                    key={id}
                    className={css.item} 
                >
                <span className={css.label}>{ label }</span>
                <span className={css.percentage}>{ percentage } %</span>
              </li>
            );
        })} 
      </ul>           
    </section>
  );
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })).isRequired
}
