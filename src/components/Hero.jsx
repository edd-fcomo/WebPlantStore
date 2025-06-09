function Hero() {
    return (
        <main className="flex gap-4 p-4 text-white bg-black/80">
            <section className="flex flex-col flex-3 gap-4 justify-center items-center">
                <h1 className="font-semibold text-3xl text-center">Welcome to Paradise Nursery</h1>
                <p className="text-center">Where Green Meets Serenity</p>
                <hr className="w-24" />
                <a title="Shop" role="button" href="/shop" className="bg-green-600 hover:bg-green-700 rounded shadow px-4 py-2">
                    Get Started
                </a>
            </section>
            <section className="flex flex-col flex-5 gap-4 justify-center items-center">
                <p className="text-lg font-semibold">Welcome to Paradise Nursery, where green meets serenity!</p>
                <p className="leading-7">
                    At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of
                    high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and
                    more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every
                    plant enthusiast.
                </p>
                <p className="leading-7">
                    Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care.
                    Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of
                    the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your
                    home or office.
                </p>
                <p className="leading-7">
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the
                    beauty of nature right at your doorstep.
                </p>
            </section>
        </main>
    );
}

export default Hero;