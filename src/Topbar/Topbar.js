import { useNavigate } from 'react-router-dom';
import "./Topbar.css";

function Topbar() {
  let navigate = useNavigate();
  return(
    <div className="top">
      <div className="topleft" onClick={()=>{ navigate('/')}}>
      AUDREY KAWIRE
        {/* <img src="https://i.pinimg.com/564x/41/b2/2b/41b22b8557d191e4f77b9023f4d6160b.jpg" alt="KAWIRE" className="picture"/> */}
      </div>
      <div className="topcenter"><h4 className="navwords" style={{marginRight:"60px"}} onClick={()=>{ navigate('/read')}}>Read </h4> 
      <h4 onClick={()=>{ navigate('/write')}} className="navwords"> Write</h4></div>
      <div className="topright"><h3 onClick={()=>{ navigate('/profile')}} className="navwords"> profile</h3></div>
    </div>
  )
}

export default Topbar;
