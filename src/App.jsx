import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import PlantsGallery from './components/PlantsGallery';
import CartCheckout from './components/CartCheckout';
import Topbar from './components/Topbar';

function App() {

  const [plantsSections, setPlantsSections] = useState([]);
  const plantsSourceCollection = useSelector((state) => state.shopingCart.plants);

  useEffect(() => setPlantsSections(plantsSourceCollection), []);

  return (
    <>
      <Topbar />
      <main className='flex flex-col gap-4 p-4'>
        {plantsSections.map((section)=> <PlantsGallery key={section.group} section={section} />)}
      </main>
      <CartCheckout />
    </>
  )
}

export default App;