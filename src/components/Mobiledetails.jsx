import { useLoaderData } from "react-router-dom";

const Mobiledetails = () => {
    const mobileDetails = useLoaderData();
    const {name, features, price, stock} = mobileDetails;
    return (
        <div>
            <h1>{name}</h1>
            <p>{features}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    );
};

export default Mobiledetails;