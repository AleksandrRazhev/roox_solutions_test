import './sorting.scss';

const Sorting = (props) => {
  const { onSetSort, methodSort } = props;

  return (
    <div className='sorting'>
      <h2 className='sorting__title'>Сортировка</h2>
      <button
        onClick={() => onSetSort('city')}
        className={`sorting__button button ${methodSort === 'city' ? 'button_active' : null}`}
      >по городу</button>
      <button
        onClick={() => onSetSort('company')}
        className={`sorting__button button ${methodSort === 'company' ? 'button_active' : null}`}
      >по компании</button>
    </div>
  )
}

export default Sorting;
