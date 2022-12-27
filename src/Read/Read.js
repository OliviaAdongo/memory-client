import { DeleteOutline, Edit, KeyboardArrowRight } from "@material-ui/icons";
import React from "react";
import "./Read.css";
import { useNavigate } from 'react-router-dom';


function Read() {
  let navigate = useNavigate();
  return (
    <div className="postparentmain1">
      <section className="postheader">
        <h5 className="topic-post">
          Source of words. These words totaly don't make sense. And some more
          words to test the appearance.
        </h5>
      </section>
      <div className="postparent">
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/f4/12/00/f412009ed041d07dc943a7c17d77f51f.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/b0/d2/35/b0d2353c077f0dc2a1328aa0f34e62ae.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/ad/87/a4/ad87a4047871498fdcafd7cc491db482.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/61/0d/4f/610d4fbd522553538d962fa934788339.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/e7/3e/6c/e73e6c43868044b24b1768eff901b841.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/13/e1/7b/13e17bde4f48442918830a1e98ec971e.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/70/94/2a/70942a59ba3ed4bf21c6472f7cf9d328.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
        <div className="post">
          <img
            className="postImage"
            src="https://i.pinimg.com/564x/0b/34/78/0b3478e90a2fed02e8265a87622b84b4.jpg"
            alt="I am a lovely plant"
          />
          <div className="postInfo">
            <div className="postCategory">
              <span className="postcat">Stories </span>
              <span className="postcat"> Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            <hr />
            <span className="postdate"> 1 hour ago</span>
          </div>
          <p className="postdescription">
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
          <DeleteOutline/> <Edit/> <KeyboardArrowRight onClick={()=>{ navigate('/singlepost')}}/>
        </div>
      </div>
    </div>
  );
}

export default Read;
