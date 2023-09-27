import Card from "../Card/Card";


const DonationCards = ({cards, searchcards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
                {
                    // if(searchcards){
                    //     searchcards?.map(card => <Card key={card.id} card={card}></Card>)
                    // }else{
                    //     cards?.map(card => <Card key={card.id} card={card}></Card>)
                    // }


                   searchcards.length>0 ? searchcards?.map(card => <Card key={card.id} card={card}></Card>)
                    : cards?.map(card => <Card key={card.id} card={card}></Card>)
                  
                    
                }
                   
                        
                 
                        
                    
                   
                  
            

         
        </div>
    );
};

export default DonationCards;