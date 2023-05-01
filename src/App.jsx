import { Section } from "./components/Section";
import { Profile } from "./components/Profile";
import user from "./data/user.json";
import './index.css';

export const App = () => {
  return (
    <div className="container">  
      <Section title={"Profile Card"}>   
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section> 
    </div>
  );
};