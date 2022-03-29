import { useState } from "react";
import './itemInput.scss';

const ItemInput = (props) => {
  const { data, readOnlyInput, getValue } = props;

  const [text, setText] = useState(data[2])

  const onChange = (e) => {
    setText(e.target.value);
    getValue(e.target.name, e.target.value);
  }

  const field = text ? null : 'form__input_not-filled';

  return (
    <label className='form__label'>
      <p>{data[1]}</p>
      <input
        className={`form__input ${readOnlyInput ? field : `form__input_edit ${field}`}`}
        name={data[0]} type="text" defaultValue={data[2]} onChange={(e) => onChange(e)} readOnly={readOnlyInput}
      />
    </label>
  )
}

export default ItemInput;
