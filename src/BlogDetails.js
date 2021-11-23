// Import Firestore database
import db from './firebase';
import { useState } from 'react';

const BlogDetails = () => {

	const [info , setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchdata();
	});

	// Fetch the required data using the get() method
	const Fetchdata = ()=>{
		db.collection("Technology Blogs").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = element.data();
				setInfo(arr => [...arr , data]);
				
			});
		})
	}
	
	// Display the result on the page
	return (
		<div>
			<center>
			<h2>Blogs Details</h2>
			</center>
		
		{
			info.map((data) => (
			<Frame title={data.Title}
				body={data.Body}
				author={data.Author}/>
			))
		}
		</div>

	);
}

// Define how each display entry will be structured
const Frame = ({title, body, author}) => {
	// console.log(course + " " + name + " " + age);
	return (
		<center>
			<div className="div">
				
<p>Title : {title}</p>

				
<p>Body : {body}</p>

				
<p>Author : {author}</p>

			</div>
		</center>
	);
}

export default BlogDetails;
