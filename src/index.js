import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './suffolkpunch.ttf'
import background from'./background.mp4'
import placeholder from './placeholder.jpg'
import ScrollContainer from 'react-indiana-drag-scroll'

function Countdown() {

	let countDownDate = new Date("Oct 21, 2022 00:00:00").getTime();

	let x = setInterval(function() {

		let now = new Date().getTime();

		let distance = countDownDate - now;

		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  		let outNow = "OUT&nbsp;NOW"

  		document.getElementById("countdown").innerHTML = "<li className=`inner`>" + days +  "<a> days </a>" + "</li>" + "|" + "<li className=`inner`>" +  hours  +  "<a> hours </a>" + "</li>" + "|" + "<li className=`inner`>" +  minutes + "<a> minutes </a>" + "</li>" + "| " + "<li className=`inner`>" + seconds + "<a> seconds </a>" + "</li>";

  		if (distance < 0) {
  			clearInterval(x);
  			document.getElementById("countdown").innerHTML = outNow
  		}

	}, 1000 )

  return ;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  	<div className="font-face-gm menu"> 

  		<div className="menu-center">
  			<a href="#">Arctic <br/>Monkeys</a>
  		</div>

  			<a href="https://arcticmonkeys.ffm.to/store">Store</a>
	 		<a href="https://arcticmonkeys.com/live">Live</a>

  		<div className="menu-right">
  			<a href="https://arcticmonkeys.com/videos">Videos</a>
	 		<a href="https://arcticmonkeys.com/#newsletter">News</a>
	 	</div>

	 </div>

  <video autoPlay muted loop src={background} poster={placeholder} id="background" />

<div className="newAlbum">New Album <h1> The Car</h1></div>

  <div className="wrapper">
  	<ScrollContainer className="scroll-container">

	 <ul id="countdown">
	  root.render(<Countdown />);
	  </ul>

	</ScrollContainer>
	</div>

	<div className="button-wrapper">
		<a href="https://arcticmonkeys.ffm.to/store" className="button">Pre-Order Now</a>
	</div>




  </React.StrictMode>
);

