import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../state/ShopingCartSlice';

function PlantCard(props) {

    const plant = props.plant;
    const dispatch = useDispatch();
    const onBtnClick = (id) => dispatch(addToCart(id));
    
    const hasPlant = useSelector((state) => state.shopingCart
        .basket.findIndex(item => item.id === plant.id) !== -1);
    
    return (
        <li key={plant.id} className='relative bg-white text-black rounded space-y-4 shadow hover:shadow-lg p-4'>
            <span className="absolute block -top-2 -right-2 bg-red-700 text-white px-4 py-2 rounded-full shadow shadow-red-500/50">
                Sale
            </span>
            <header className='text-center text-md font-bold'>
                {plant.name}
            </header>
            <figure className='bg-slate-200 rounded overflow-hidden h-40'>
                <img src={plant.image} className="block h-full w-full object-cover" alt={plant.name} loading="lazy" />
            </figure>
            <section>
                <p className='text-center font-semibold text-lg mb-2'>$ {plant.cost.toLocaleString()}</p>
                <p className='text-center'>{plant.description}</p>
            </section>
            <footer>
                <button className='bg-green-600 hover:bg-green-700 disabled:bg-gray-800/20 text-white rounded px-4 py-2 w-full cursor-pointer' 
                    title='Add to cart' type='button' onClick={() => onBtnClick(plant.id)} disabled={hasPlant}>
                    <span>{ hasPlant ? 'In cart' : 'Add to cart' }</span>
                </button>
            </footer>
        </li>
    );
}

export default PlantCard;