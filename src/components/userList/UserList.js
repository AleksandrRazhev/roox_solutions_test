import { useState, useEffect } from 'react';

import UserListService from '../../services/UserListService';
import UserListItem from '../userListItem/UserListItem';
import Spinner from '../spinner/Spinner';
import Error from '../Error/Error';

import './userList.scss';

const UserList = (props) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userList, setUserList] = useState([]);

  const userListService = new UserListService();

  useEffect(() => {
    console.log('services effect');

    userListService
      .getResource()
      .then(data => {
        props.setData(data);
        return (data);
      })
      .then(data => setUserList(userListService.transformUserList(data)))
      .then(setLoading(false))
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [])

  useEffect(() => {
    console.log('sort effect');

    if (props.sorting === false) return;

    const arr = userList.map(item => {
      const objArr = []
      for (let key in item) {
        if (key === 'id') objArr.push(item[key]);
      };
      for (let key in item) {
        if (key === props.sorting) objArr.push(item[key]);
      };
      return objArr;
    })

    const sortList = arr.sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0
    });

    const newArr = sortList.map(item => userList.filter(i => i.id === item[0])[0])

    setUserList(newArr);
  }, [props.sorting])

  const items = userList.map(item => {
    return <UserListItem
      key={item.id}
      userID={item.id}
      item={item}
      showUser={props.showUser}
    />
  })
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <Error /> : null;
  const itemsRender = !(loading || error) ? items : null;

  return (
    <div className='user-list'>
      <h2 className='user-list__title'>Список пользователей</h2>
      {<ul className='user-list__list'>
        {errorMessage}
        {spinner}
        {itemsRender}
      </ul>}
      <p className='user-list__message'>Найдено {userList.length} пользователей</p>
    </div>
  )
}

export default UserList;
