import { KeyboardArrowLeft } from '@material-ui/icons'
import './Single.css'
import { useNavigate } from 'react-router-dom';

function Single() {
  let navigate = useNavigate();
  return (
    <div id='singleposter'>
    <div className='pinksingle'>
          <img
          className='singlepostbroadimage'
            src="https://i.pinimg.com/564x/7e/f1/c4/7ef1c436dba86d5a078e7883b7d4e3f1.jpg"
            alt="I am a lovely plant"
          />
          <div >
            <div className='singlepostbody'>
              <span className='sub'>Stories </span>
              <span className='sub'> Life</span>
            </div>
            <span className='singlepostheading'>Lorem Ipsum</span>
            <hr />
            <span className='timepost'> 1 hour ago</span>
          </div>
          <p className='content'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
          <KeyboardArrowLeft onClick={()=>{ navigate('/read')}}/> Back
         
        </div>
    </div>
  )
}

export default Single