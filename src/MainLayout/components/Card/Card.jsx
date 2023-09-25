import { Link, NavLink } from "react-router-dom";


const Card = ({card}) => {
    const {id,card_bg,category, category_bg, text_color,img, title} = card||{};
    return (
        <div>
           <NavLink to={`/cardDetails/${id}`}>
           <div style={{backgroundColor:card_bg}} className="card card-compact  shadow-xl">
  <figure><img src={img} alt={category} /></figure>
  <div className="card-body">
  <p  className="text-xl font-bold"><span style={{backgroundColor:category_bg, color:text_color} } className="p-1 rounded">{category}</span></p>
    <h2 style={{color:text_color}} className="card-title">{title}</h2>
  </div>
</div>
           </NavLink>
        </div>
    );
};

export default Card;