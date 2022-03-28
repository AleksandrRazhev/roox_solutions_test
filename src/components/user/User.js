import { useState, useEffect } from 'react';

import ItemInput from '../itemInput/ItemInput';

import './user.scss';

const User = (props) => {
  const user = props.getUser();

  const arrInputs = [['name', 'Name', user.name], ['username', 'User name', user.username], ['email', 'E-mail', user.email], ['street', 'Street', user.address.street], ['city', 'City', user.address.city], ['zipcode', 'Zip code', user.address.zipcode], ['phone', 'Phone', user.phone], ['website', 'Website', user.website]]

  const [edit, setEdit] = useState(false);

  const obj = {};

  useEffect(() => {
    obj.id = user.id;
    arrInputs.forEach(item => obj[item[0]] = item[2]);
    obj.comment = null;
  }, [arrInputs])

  const submit = () => {
    if (!edit) return;
    for (let i in obj) {
      if (i !== 'comment' && !obj[i]) return;
    };
    console.log(JSON.stringify(obj));
  }

  const getValue = (name, value) => {
    obj[name] = value;
  }

  const submitClassName = () => edit ? 'user__submit button button_open' : 'user__submit button button_close';
  const readOnlyInput = () => edit ? false : true;

  const inputs = arrInputs.map((item) => {
    return <ItemInput key={item[0]} data={item} readOnlyInput={readOnlyInput()} getValue={getValue} />
  });

  const editBtnClassName = edit ? 'user__edit button button_active' : 'user__edit button';

  return (
    <div className='user'>
      <div className='user__title-block'>
        <h2 className='user__title'>Профиль пользователя</h2>
        <button className={editBtnClassName} onClick={() => setEdit(true)}>Редактировать</button>
      </div>
      <form className='user__form form'>

        {inputs}

        <label className='form__label'>
          <p>Comment</p>
          <textarea className={edit ? 'form__input textarea textarea_active' : 'form__input textarea'} name="comment"
            onChange={(e) => getValue(e.target.name, e.target.value)} readOnly={readOnlyInput()}
          ></textarea>
        </label>
      </form>
      <button onClick={submit} className={submitClassName()}>Отправить</button>
      <button className='user__back button' onClick={() => props.showUser(null)}>Назад к списку пользователей</button>
    </div>
  )
}

export default User;
