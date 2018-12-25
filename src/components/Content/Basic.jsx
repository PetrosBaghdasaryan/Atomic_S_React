import React, {Component} from 'react'
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button }  from 'reactstrap';






class Basic extends React.Component {

	render (){

		return (

<div>


 <div>
<Link to='/Privacy'><Button className="primacy">Previous</Button></Link>
 </div>


 	 <div className="tab-content container w-75 m-auto" id="myTabContent">
		 <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

				 <h2 className="mt-5"> Privacy Policy & Terms </h2>

						<h5 className="mt-4"> Bestnet ("US", "WE", or "OUR") operates the website and the Bestnet mobile application (the "Service").</h5>

						<p className="mt-3"> This page informs you of our policies regarding the collection, use, and disclosure of
								personal data when you use our Service and the choices you have associated with that data. </p>

						<p> We use your data to provide and improve the Service. By using the Service, you agree to
								the collection and use of information in accordance with this policy. Unless otherwise defined
								in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>

				 <h3 className="mt-3">Information Collection And Use</h3>
				 <p className="mt-3">We collect several different types of information for various purposes to provide and improve our Service to you.</p>

				 <h3 className="mt-5">Types of Data Collected</h3>
				 <h5 className="mt-4">Personal Data</h5>
				 <p className="mt-3">While using our Service, we may ask you to provide us with certain personally identifiable
						 information that can be used to contact or identify you ("Personal Data"). Personally
						 identifiable information may include, but is not limited to:</p>

				 <ul className="ml-5">
						 <li> Cookies and Usage Data</li>
				 </ul>

				 <h5 className="mt-4"> Usage Data </h5>

				 <p className="mt-4">We may also collect information that your browser sends whenever you visit our Service or when you access the
						 Service by or through a mobile device ("Usage Data").</p>

				 <p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address),
						 browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on
						 those pages, unique device identifiers and other diagnostic data.</p>

				 <p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile
						 device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of
						 mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>

				 <h5 className="mt-5">Tracking & Cookies Data</h5>
				 <p className="mt-4">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>

				 <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser
						 from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track
						 information and to improve and analyze our Service.</p>

				 <p> You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
						 cookies, you may not be able to use some portions of our Service.</p>

				 <h5 className="mt-5"> Examples of Cookies we use:</h5>

				 <ul className="cookies ml-3 mt-5">
						 <li><span>Session Cookies.</span> We use Session Cookies to operate our Service. </li>
						 <li><span>Preference Cookies.</span> We use Preference Cookies to remember your preferences and various settings.</li>
						 <li><span>Security Cookies.</span> We use Security Cookies for security purposes.</li>

				 </ul>

		 </div>
</div>

</div>

    );
  }
}

export default Basic;
