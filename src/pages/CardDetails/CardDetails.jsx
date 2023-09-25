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
    const {img, description,title,price,text_color} = detail;
    return (
        <div className=" mt-5">
           <div>
            <img className=" w-[98%] mx-auto lg:w-[100%] h-[40vh] lg:h-[60vh]" src={img} alt="" />
            <div className="bg-black  bg-opacity-50 relative bottom-20 p-4">
                <button style={{backgroundColor:text_color}} className="btn text-white  text-base">Donate ${price}</button>
            </div>
           </div>
           <div className=" w-[98%] mx-auto space-y-2 -mt-10">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="">{description}</p>
           </div>
        </div>
    );
};

export default CardDetails;