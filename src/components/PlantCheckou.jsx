import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addItem, removeItem } from '../state/ShopingCartSlice';
import { useEffect, useState } from "react";

function PlantCheckout(prop) {

    const plant = prop.plant;
    const [total, setTotal] = useState(plant.cost);
    
    const dispatch = useDispatch();
    const onBtnRemoveClick = (id) => dispatch(removeFromCart(id));

    // TODO: Get the total coun from de store.
    const basket = useSelector((state) => state.shopingCart.basket);
    const basketplant = basket.find(item => item.id === plant.id);
    const basketCount = basketplant?.count || 1;

    const btnAddItem = () => {
        if (basketCount >= 9) return;
        dispatch(addItem(plant.id));
    }

    const btnRemoveItem = () => {
        if (basketCount <= 1) return
        dispatch(removeItem(plant.id));
    }

    return (
        <li className="flex flex-row border-b border-slate-200 gap-4 py-2 m-0">
            <figure className="flex-init size-25 rounded overflow-hidden">
                <img src={plant.image} alt={plant.name} className="block h-full w-full object-cover" loading="lazy" />
            </figure>
            <div className="flex-auto space-y-2">
                <p className="font-semibold">{plant.name} - $ {plant.cost}</p>
                <div className="flex flex-row rounded border border-slate-100">
                    <button type="button" className="bg-slate-100 rounded hover:bg-slate-200 cursor-pointer py-2 px-4"
                        onClick={btnRemoveItem}>-</button>
                    <input type="number" min='0' max='9' value={basketCount} className="w-full text-center" required />
                    <button type="button" className="bg-slate-100 rounded cursor-pointer hover:bg-slate-200 py-2 px-4"
                        onClick={btnAddItem}>+</button>
                </div>
                <p><bold className="font-semibold">Total:</bold> $ {total}</p>
                <button type="button" className="bg-red-600 rounded hover:bg-red-700 shadow px-4 py-2 text-white hover:bg-red- cursor-pointer"
                    onClick={() => onBtnRemoveClick(plant.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default PlantCheckout;