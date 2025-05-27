import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlantCheckout from "./PlantCheckout";

function CartCheckout() {

    const plantsSource = useSelector((state) => state.shopingCart.plants);
    const plants = plantsSource.flatMap(e => e.plants);
    
    const basket = useSelector((state) => state.shopingCart.basket);
    const basketIds = basket.map(item => item.id);
    const [list, setList] = useState([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        const current = plants.filter((plant)=> basketIds.includes(plant.id));
        setList(current);

        if (current) {

            let sum = 0;
            
            for (let item of current){
                const basketCount = basket.find(b => b.id === item.id)?.count || 0;
                sum += item.cost * basketCount;
            }
            
            setTotal(sum);
        }
        else{
            setTotal(0);
        }

    }, [basket]);

    return (
        <dialog id="cartCheckoutDialog" className="bg-white rounded shadow-lg w-100 m-auto">
            <h2 className="text-center text-2xl pt-4">Total: ${total.toLocaleString()}</h2>
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