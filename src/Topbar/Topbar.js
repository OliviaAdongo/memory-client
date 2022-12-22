import { Edit, MenuBookTwoTone, Person } from "@material-ui/icons";
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
      <div className="topcenter"><MenuBookTwoTone  style={{marginRight:"60px"}} onClick={()=>{ navigate('/read')}}/> <Edit onClick={()=>{ navigate('/write')}}/></div>
      <div className="topright"><Person  onClick={()=>{ navigate('/profile')}}/></div>
    </div>
  )
}

export default Topbar;
