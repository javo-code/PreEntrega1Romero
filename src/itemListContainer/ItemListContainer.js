import './itemListContainer.css';

function ItemListContainer({greeting}) {
  return (
    <div>
      <h1 className='titulo bounce-in-bck'>{greeting}
      </h1>
    </div>
    )
}

export default ItemListContainer;