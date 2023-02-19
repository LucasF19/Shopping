import "./category-item.style.scss";

const CategoryItem = ({ list }) => {

  const { imageUrl, title } = list

  return (
    <div className="category-container" key={title}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Fazer pedido!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
