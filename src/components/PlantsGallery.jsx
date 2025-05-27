import PlantCard from './PlantCard';

function PlantsGallery(prop) {

    const section = prop.section;
    const plants = section.plants;

    return (
        <section className='flex-init'>
            <h2 className='text-center py-1 mb-7 mt-4'>
                <span className="py-1 px-4 border-y">{section.category}</span>
            </h2>
            <ul className='grid grid-cols-4 gap-4 will-change-contents'>
                {plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
            </ul>
        </section>
    );
}

export default PlantsGallery;