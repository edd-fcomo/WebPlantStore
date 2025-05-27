import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlantCheckout from "./PlantCheckou";

function CartCheckout() {

    const plants = useSelector((state) => state.shopingCart.plants.flatMap(e => e.plants));
    const basket = useSelector((state) => state.shopingCart.basket.map(item => item.id));
    const [list, setList] = useState([]);

    useEffect(() => {
        const current = plants.filter((plant)=> basket.includes(plant.id));
        setList(current);
    }, [basket]);

    return (
        <dialog id="cartCheckoutDialog" className="bg-white rounded shadow-lg w-100 m-auto">
            <form className='p-4' method="dialog">
                <ul className="mb-4">
                    {list.map((plant) => <PlantCheckout key={plant.id} plant={plant} />)}
                </ul>
                <button className="block w-full bg-white border border-green-600 rounded px-4 py-2 text-green-600 mb-4 cursor-pointer" type="submit">
                    Continue shopping
                </button>
                <button className="block w-full bg-green-600 hover:bg-green-700 rounded shadow px-4 py-2 text-white cursor-pointer" type="submit">
                    Checkout
                </button>
            </form>
        </dialog>
    );
}

export default CartCheckout;