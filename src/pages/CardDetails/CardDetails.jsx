import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const [detail, setDetails] = useState({});
    const details = useLoaderData();
    const {id} = useParams();
   const intId = parseInt(id)
    useEffect(()=>{
     const findData = details.find(find => find.id===intId);
     setDetails(findData)
    },[intId, details])
 
    console.log(detail);
    
    return (
        <div>
           
        </div>
    );
};

export default CardDetails;