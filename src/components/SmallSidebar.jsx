import { Link } from 'react-router-dom';
import HomeImg from "../img/Budgie.png"
import MessageIcon from "../img/messageIcon.png"
import Gear from "../img/Gear.png"
import Users from "../img/Users.png"
import Phone from "../img/Phone.png"


const SmallSidebar = () => {
  return (
    <div className="ml-5 pb-60 mb-70">

      <div className="">
      <aside id="" className=" top-0 left-0 z-40 w-20">
        <div className=" bg-white dark:bg-white">
          
          <div className="flex flex-col items-center h-full text-white p-4">
      <Link to="/" className="mb-4">
        <img src={HomeImg} alt="Home" className="w-8 h-8" />
      </Link>
      <Link to="/" className="mb-4">
        <img src={MessageIcon} className="w-8 h-8 border border-black-500 rounded" />
      </Link>
      <Link to={Users} className="mb-4">
        <img src={Users} alt="Friends" className="w-8 h-8" />
      </Link>
      <Link to="/calls" className="mb-4">
        <img src={Phone} alt="Calls" className="w-8 h-8" />
      </Link>
      <Link to="/settings" className="mb-60">
            <img src={Gear} alt="Settings" className="w-8 h-8" />
      </Link>
    </div>
        </div>
      </aside>
      
    </div>





    </div>
  );
};

export default SmallSidebar;
