import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { saveDonationDataTolocalStorage } from "../../utility/localstorage";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CardDetails = () => {
    const [detail, setDetails] = useState({});
    const details = useLoaderData();
    const {id} = useParams();
   const intId = parseInt(id)
   const navigate = useNavigate();
    useEffect(()=>{
     const findData = details.find(find => find.id===intId);
     setDetails(findData)
    },[intId, details])
 
    console.log(detail);
    const {img, description,title,price,text_color} = detail;


    const handleStoredData = () =>{
        saveDonationDataTolocalStorage(intId);
        toast.success('You have Successfully Donated')
    }
     const handleToBacPage = () =>{
        navigate(-1)
     }

    return (
        <div className=" mt-5">
           <div>
            <div className="text-center"><button className="btn btn-secondary mb-4" onClick={handleToBacPage}>Go To Back</button></div>
            <img className=" w-[98%] mx-auto lg:w-[100%] h-[40vh] lg:h-[60vh]" src={img} alt="" />
            <div className="bg-black  bg-opacity-50 relative bottom-20 p-4">
                <button onClick={handleStoredData} 
                style={{backgroundColor:text_color}} className="btn text-white  text-base">Donate ${price}</button>
            </div>
            <ToastContainer
              position='top-right'
              autoClose={3000}
              pauseOnHover={false}
              transition={Slide}
              hideProgressBar={false}
              closeOnClick={true}
              limit={5}
              theme='colored'/>
           </div>
           <div className=" w-[98%] mx-auto space-y-2 -mt-10">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="">{description}</p>
           </div>
        </div>
    );
};

export default CardDetails;