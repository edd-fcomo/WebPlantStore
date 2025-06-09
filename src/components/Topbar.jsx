import { useSelector } from "react-redux";

function Topbar() {

    const cartCount = useSelector((state) => state.shopingCart.basket.reduce((acc, val)=> acc + val.count, 0));

    const showModal = () => {

        const dialog = document.getElementById('cartCheckoutDialog');
        
        if (dialog) {
            dialog.showModal();
        }
    }

    return (
        <header className='flex flex-row bg-green-600 text-white shadow-lg sticky top-0 z-10'>
            <a title="Landing Page" href="/WebPlantStore" className='flex flex-row flex-1 items-center justify-start pl-4'>
                <figure className="flex justify-center items-center bg-white rounded-full size-10 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-600 size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                    </svg>
                </figure>
                <p className="m-0">
                    <span className="block text-lg font-semibold">Paradise Nursery</span>
                    <small className="block">Where Green Meets Serenity</small>
                </p>
            </a>
            <section className='flex flex-1 items-center justify-center p-2'>
                <p className="font-semibold text-lg">Plants</p>
            </section>
            <section className='flex flex-1 items-center justify-end py-3 px-4 gap-2'>
                <button onClick={showModal} className="flex flex-row gap-2 px-4 py-2 items-center border rounded cursor-pointer hover:bg-white hover:text-green-600 hover:shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="will-change-contents">{cartCount}</span>
                </button>
            </section>
        </header>
    );
}

export default Topbar;