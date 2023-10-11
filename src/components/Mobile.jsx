import { Link } from "react-router-dom";

const Mobile = ({mobiles}) => {

    const {id, name} = mobiles

    return (
        <div>
            <h1>{name}</h1>
            <Link to={`/mobiles/${id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default Mobile;