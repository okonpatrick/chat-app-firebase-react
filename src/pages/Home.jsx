import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat';
import SmallSidebar from "../components/SmallSidebar";

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
      <SmallSidebar/>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home