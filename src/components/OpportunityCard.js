import { Link } from "react-router-dom";

const OpportunityCard = ({ data, type }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-[350px] h-[450px] flex-shrink-0">
      {/* Image */}
      <img src={data.image} alt={data.title} className="w-full h-44 object-cover" />
  
      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Category Badge */}
        <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
          {data.category}
        </span>
  
        {/* Title */}
        <h4 className="text-lg font-semibold mt-1">{data.title}</h4>
  
        {/* Deadline */}
        <span className="text-sm text-red-500 font-semibold mt-1">{data.deadline}</span>
  
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-3">
          {data.description}
        </p>
  
        {/* Button at the Bottom */}
        <Link to={data.link}>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 w-full">
          {type === "job" ? "Apply Now" : "Register"}
        </button>
        </Link>
      </div>
    </div>
  );
  
  export default OpportunityCard;
  