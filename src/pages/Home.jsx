import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white font-sans h-[91vh] w-auto flex items-end justify-center"
      style={{ backgroundImage: "url(https://i0.wp.com/play3r.net/wp-content/uploads/2018/09/ZBR05528.jpg?fit=2500%2C1668&ssl=1)" }}
    >
      <button
        onClick={() => navigate("/Intro")}
        className="bg-yellow-500 text-blue-900 px-7 py-3 rounded hover:bg-yellow-600 mb-10"
      >
        Join Us
      </button>
    </div>
  );
};

export default Home;
