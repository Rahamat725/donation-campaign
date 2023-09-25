import { useLoaderData } from "react-router-dom";
import DonationCards from "../../MainLayout/components/DonationCards/DonationCards";
import Banner from "../../MainLayout/components/Header/Banner/Banner";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <DonationCards cards={cards}></DonationCards>
        </div>
    );
};

export default Home;