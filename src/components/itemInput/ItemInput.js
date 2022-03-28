import { useState } from "react";
import './itemInput.scss';

const ItemInput = (props) => {
  const { data, readOnlyInput, getValue } = props;

  const [blank, setBlank] = useState(false);

  const onChange = (e) => {
    if (!e.target.value) {
      setBlank(true);
    } else {
      setBlank(false);
    };
    getValue(e.target.name, e.target.value);
  }

  const field = blank ? ' form__input_not-filled' : '';

  return (
    <label className='form__label'>
      <p>{data[1]}</p>
      <input
        className={readOnlyInput ? 'form__input' + field : 'form__input form__input_edit' + field}
        name={data[0]} type="text" defaultValue={data[2]} onChange={(e) => onChange(e)} readOnly={readOnlyInput}
      />
    </label>
  )
}

export default ItemInput;
