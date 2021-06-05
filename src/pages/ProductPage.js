import Product from "../components/Product";
import { Link } from 'react-router-dom';

const ProductPage = props => {
    return (
        <>
            <div>Strona produktu</div>
            <Product product={props.match.params.id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </>
    );
}
 
export default ProductPage;