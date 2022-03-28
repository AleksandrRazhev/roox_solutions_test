import './userListItem.scss';

const UserListItem = (props) => {
  const { name, city, company } = props.item;

  return (
    <li className='user-list__item'>
      <ul className='user-list__card card'>
        <li className='card__text'>ФИО: <strong>{name}</strong></li>
        <li className='card__text'>город: <strong>{city}</strong></li>
        <li className='card__text'>компания: <strong>{company}</strong></li>
        <button onClick={() => props.showUser(props.userID)} className='card__link'>Подробнее</button>
      </ul>
    </li>
  )
}

export default UserListItem;
