import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const { currentUser, logOut } = useAuth();

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col items-center border-2 p-4 rounded-md gap-5 custom-shadow h-3/5 justify-between">
        <h2 className="uppercase font-bold tracking-wider p-2 border-b-2 w-full text-center border-gray-800 text-3xl">
          Profile
        </h2>
        {currentUser && (
          <div className="flex gap-3">
            <h3 className="uppercase font-semibold tracking-wide">Email:</h3>
            <h4>{currentUser.email}</h4>
          </div>
        )}
        {currentUser ? (
          <button
            className="w-full border-2 text-white bg-gray-800 p-2 px-4 rounded-lg uppercase hover:border-blue-600 hover:bg-white hover:text-black transition ease-out duration-300"
            onClick={logOut}
          >
            Log Out
          </button>
        ) : (
          <Link
            to="login"
            className="w-full border-2 text-white bg-gray-800 p-2 px-4 rounded-lg uppercase hover:border-blue-600 hover:bg-white hover:text-black transition ease-out duration-300 text-center"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
