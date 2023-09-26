import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utility/localstorage";
import DonatedCard from "../../MainLayout/components/DonatedCard/DonatedCard";


const Donation = () => {
    const [detail, setDetail] =useState([]);
    const donations = useLoaderData();

    useEffect(()=>{
        const storedId = getStoredDonationData();
       const storedInfo = []
        for(const id of storedId){
            const data = donations.find(findInfo => findInfo.id === id)
                if(data){
                 storedInfo.push(data);
                }

        }
        setDetail(storedInfo);


    },[])
    return (
        <div>
            <h2>This is donation page: {detail.length}</h2>
            <div>
                  { 
                  detail.map(donatedDetails => <DonatedCard key={donatedDetails.id} donatedDetails={donatedDetails} >

                  </DonatedCard>)
                  }
            </div>
            
        </div>
    );
};

export default Donation;
