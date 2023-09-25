import Card from "../Card/Card";


const DonationCards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {
            cards?.map(card => <Card key={card.id} card={card}></Card>)
           }
        </div>
    );
};

export default DonationCards;