import './sorting.scss';

const Sorting = (props) => {
  const { onSetSort, methodSort } = props;

  const btnClassName = 'sorting__button button';
  const btnActive = ' button_active';

  return (
    <div className='sorting'>
      <h2 className='sorting__title'>Сортировка</h2>
      <button
        onClick={() => onSetSort('city')}
        className={methodSort === 'city' ? btnClassName + btnActive : btnClassName}
      >по городу</button>
      <button
        onClick={() => onSetSort('company')}
        className={methodSort === 'company' ? btnClassName + btnActive : btnClassName}
      >по компании</button>
    </div>
  )
}

export default Sorting;
