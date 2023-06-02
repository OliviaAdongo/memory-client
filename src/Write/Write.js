import { useNavigate } from "react-router-dom";
import "./Write.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function Write() {
  let navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");
  const [newPost, setNewPost] = useState("");
  const postCollectionRef = collection(db, "diary");

  const createPost = async () => {
    await addDoc(postCollectionRef, {title: newTitle, post: newPost});
  };

  return (
    <div className="write">
      <div>
        <input
          placeholder="write title here.... "
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />

        <input
          placeholder="wriite content here....."
          onChange={(event) => {
            setNewPost(event.target.value);
          }}
        />
        <button onClick={createPost}> WRITE</button>
      </div>
      <img
        className="writeimage"
        src="https://i.pinimg.com/originals/60/89/9d/60899d37341bbd713759b282894a43bd.gif"
        alt="file added from the folder"
      />

      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            {/* <AddAPhotoTwoTone className="writeicon" /> */}
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Write content here"
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button
          className="writesubmit"
          onClick={() => {
            navigate("/read");
          }}
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
