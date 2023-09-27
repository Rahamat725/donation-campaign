

const Banner = ({handleSearch}) => {

    // const handleLocal=(e)=>{
    //     e.preventDefault();
    //     console.log('its clicked')
    // }
    return (
        <div >
            
            <div className="hero h-[70vh] mt-5" style={{backgroundImage: 'url(https://i.ibb.co/TRSH0MT/Health.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-3xl font-bold">I Grow By Helping People In Need</h1>
        <form onSubmit={handleSearch}>
        <input className="w-[50%] border-0 lg:w-[80%] p-2 rounded-xl text-center text-black text-base" type="text" name="name" id="" placeholder="Search here..."/>
                    {/* <button onClick={handleSearch} className="px-4 py-2 rounded-r-full -ml-5 rounded-lg bg-red-700 text-white text-base">Search</button> */}
                 <input type="submit" value="Search" className="bg-red-600 p-2 font-bold text-base  rounded-lg -ml-2 rounded-r-full"/>
        </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;


{/* <div className="">
                <h2 className="text-3xl text-white mb-10">
                I Grow By Helping People In Need
                </h2>
                    <input className="w-[30%] md:w-[50%] border-0 lg:w-[80%] p-2 rounded-xl text-center" type="text" name="" id="" placeholder="Search here..."/>
                    <button className="px-4 py-2 rounded-r-full -ml-5 rounded-lg bg-red-700 text-white text-base">Search</button>
                </div> */}