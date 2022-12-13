import { Edit, MenuBookTwoTone, Person } from "@material-ui/icons";
import "./Topbar.css";

function Topbar() {
  return(
    <div className="top">
      <div className="topleft">
      AUDREY KAWIRE
        {/* <img src="https://i.pinimg.com/564x/41/b2/2b/41b22b8557d191e4f77b9023f4d6160b.jpg" alt="KAWIRE" className="picture"/> */}
      </div>
      <div className="topcenter"><MenuBookTwoTone  style={{marginRight:"60px"}}/> <Edit/></div>
      <div className="topright"><Person/></div>
    </div>
  )
}

export default Topbar;
