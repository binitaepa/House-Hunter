import img from '../../assets/2150761168-removebg-preview.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img}className="max-w-screen-md " />
    <div>
      <h1 className="text-5xl font-bold text-green-400">Welcome! Search your perfect house</h1>
      <p className="py-6 text-green-400">Discover Your Dream Home Today! Browse our extensive listings, explore neighborhoods, and find the perfect place to call yours. Your future home is just a click away.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;