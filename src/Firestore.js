import db from './firebase';
import {useState} from 'react';
  
const Firestore = () => {
    const [title  , SetTitle] = useState("");
    const [body , SetBody] = useState("");
    const [author , SetAuthor] = useState("");
    const sub = (e) => {
        e.preventDefault();
          
        // Add data to the store
        db.collection("Technology Blogs").add({
            Title: title,
            Body: body,
            Author: author
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
  
    return (
        <div>
            <center>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="your title"
                      onChange={(e)=>{SetTitle(e.target.value)}} />
                      <br/><br/>
                    <input type="text" placeholder="Body"
                      onChange={(e)=>{SetBody(e.target.value)}}/>
                      <br/><br/>
                    <input type="text" placeholder="Author"
                      onChange={(e)=>{SetAuthor(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
  
export default Firestore;