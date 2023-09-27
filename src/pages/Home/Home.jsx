import { useLoaderData } from "react-router-dom";
import DonationCards from "../../MainLayout/components/DonationCards/DonationCards";
import Banner from "../../MainLayout/components/Header/Banner/Banner";
import { useEffect, useState } from "react";


const Home = () => {
    const [searchcards, setCards] = useState([]);
 
    const cards = useLoaderData();
    // setCards(Allcards)
    // console.log(Allcards)

    const handleSearch = (e) =>{
       e.preventDefault();
        // console.log('search here',e.target.name.value)
        const inputValue = e.target.name.value;
        const newValue = cards.filter(findName => findName.category.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(newValue)
        setCards(newValue)
    }
    return (
        <div className="space-y-4">
            <Banner handleSearch={handleSearch}></Banner>
            <DonationCards cards={cards} searchcards={searchcards}></DonationCards>
        </div>
    );
};

export default Home;