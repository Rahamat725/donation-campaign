import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div  className="flex h-screen justify-center items-center">
           <div className="space-y-4">
           <h2 className="text-3xl">Oops!! Page Not Found</h2>
           <Link className="btn bg-green-700 text-white hover:text-black" to={'/'}>Go To Home</Link>
           </div>
         
        </div>
    );
};

export default ErrorPage;