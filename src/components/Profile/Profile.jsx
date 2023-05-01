import PropTypes from 'prop-types';
import css from "./Profile.module.css"

export const Profile = ({ 
    username, 
    tag, 
    location, 
    avatar, 
    stats: {
        followers, 
        likes, 
        views}
    }) => {
  return (
    <div className={ css.profile }>
      <div className={ css.description }>
        <img
          src={ avatar }
          alt="User avatar"
          className={ css.avatar }
        />
        <p className={ css.name }>{ username }</p>
        <p className={ [css.tag, css.text].join(' ') }>@{ tag }</p>
        <p className={ [css.location, css.text].join(' ') }>{ location }</p>
      </div>

      <ul className={ css.stats }>
        <li className= {css.stats_item}>
          <span className={ [css.label, css.text].join(' ') }>Followers</span>
          <span className={ css.quantity }>{ followers }</span>
        </li>
        <li className= {css.stats_item}>
          <span className={ [css.label, css.text].join(' ') }>Views</span>
          <span className={ css.quantity }>{ views }</span>
        </li>
        <li className= {css.stats_item}>
          <span className={ [css.label, css.text].join(' ') }>Likes</span>
          <span className={ css.quantity }>{ likes }</span>
        </li>
      </ul>
    </div>    
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
};