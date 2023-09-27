import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utility/localstorage";
import DonatedCard from "../../MainLayout/components/DonatedCard/DonatedCard";


const Donation = () => {
    const [detail, setDetail] =useState([]);
    const donations = useLoaderData();
    const [dataLength, setDataLength] = useState(4);

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
            {/* <h2>This is donation page: {detail.length}</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 ">
                  { 
                  detail.slice(0,dataLength).map(donatedDetails => <DonatedCard key={donatedDetails.id} donatedDetails={donatedDetails} >

                  </DonatedCard>)
                  }
               
            </div>
            <div className={dataLength === detail.length? "hidden ": "text-center mt-4"}>
                    <button onClick={()=>setDataLength(detail.length)}  className="btn btn-primary">See All</button>
                  </div>
        </div>
    );
};

export default Donation;
