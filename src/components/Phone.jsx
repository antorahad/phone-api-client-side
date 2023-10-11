import { useLoaderData } from "react-router-dom";
import Mobile from "./Mobile";

const Phone = () => {
    const phones = useLoaderData();

    return (
        <div>
            {
                phones.map(mobiles => <Mobile key={mobiles.id} mobiles={mobiles}></Mobile>)
            }
        </div>
    );
};

export default Phone;