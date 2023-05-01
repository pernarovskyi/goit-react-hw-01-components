import { Section } from 'components/Section';
import { Profile } from 'components/Profile';
import { Statistic } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { Transaction } from 'components/Transactions';

import user from './data/user.json';
import uploadData from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import './index.css';

export const App = () => {
  return (
    <div className="container">
      <Section title={'Profile Card'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={'Statistic Section'}>
        <Statistic title="Upload stats" stats={uploadData} />
      </Section>

      <Section title={'Friend List'}>
        <FriendList friends={friends} />
      </Section>

      <Section title={'Transactions'}>
        <Transaction transactions={transactions} />
      </Section>
    </div>
  );
};
