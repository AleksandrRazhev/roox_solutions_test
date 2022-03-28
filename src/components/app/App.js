import { useState } from 'react';

import UserList from '../userList/UserList';
import Sorting from '../sorting/Sorting';
import User from '../user/User';

import './app.scss';

const App = () => {

  const [serverData, setServerData] = useState(null)
  const [sorting, setSorting] = useState(null);
  const [user, setUser] = useState(null);

  const onSetSort = (method) => {
    setSorting(method);
  }

  const showUser = (id) => {
    setUser(id);
  }

  const getUser = () => {
    return serverData.filter(item => item.id === user)[0];
  }

  const setData = (data) => setServerData(data);

  const componentUser = <User showUser={showUser} getUser={getUser} />;
  const componentUserList = <UserList sorting={sorting} showUser={showUser} setData={setData} />;

  return (
    <div className='app'>
      <aside className='aside'>
        <Sorting onSetSort={onSetSort} methodSort={sorting} />
      </aside>
      <main className='main'>
        {user ? componentUser : componentUserList}
      </main>
    </div>
  )
}

export default App;
