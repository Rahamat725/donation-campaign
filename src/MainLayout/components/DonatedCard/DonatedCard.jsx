import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const DonatedCard = ({donatedDetails}) => {
    const {id,img,title,category,price,card_bg,category_bg,text_color} = donatedDetails;
                const navigate= useNavigate();
                // {`/cardDetails/${id}`}
              

  
    return (
        <div>
           
           <Card style={{backgroundColor:card_bg}} className="w-full max-w-[48rem] flex-row gap-4  rounded-md">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </CardHeader>
      <CardBody>
        <Typography  variant="h6" color="gray" className="mb-4 mt-4 uppercase ">
         <span style={{backgroundColor:category_bg, color:text_color}} className="p-2  rounded"> {category}</span>
        </Typography>
        <Typography style={{color:text_color}} variant="h4" color="blue-gray" className="mb-2 text-xl">
          {title}
        </Typography>
        <Typography  color="gray" className="mb-8 font-normal">
            <span style={{backgroundColor:category_bg}} className="p-1 rounded-lg">${price}</span>
        </Typography>
        <a href="#" className="inline-block">
          <Link to={`/cardDetails/${id}`}  style={{backgroundColor:text_color }} variant="text" className="flex mb-2 items-center btn btn-info text-white">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </a>
      </CardBody>
      
    </Card>
           
        </div>
    );
};

export default DonatedCard;