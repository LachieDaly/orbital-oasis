/**
 * script.js
 * 
 * Author: Lachlan Daly
 * Date: 09-Jun-2021
 */

 document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		// Adding a "JavaScript is Enabled" Body Class

		document.querySelector("body").classList.add("js");

        // This is a Javascript Plugin beware!
        // This is not my original code
		AOS.init();

        // This is for tiny-slider - A JavaScript Plugin
        // This is not my original code
        // Reading up on the documentation, I found that
        // many sliders can be made
        var slider1 = tns({
			container: ".slider1",
			controlsPosition: "bottom",
			nav: false,
			autoplayButtonOutput: false,
			items: 1,
			slideBy: "page",
			autoplay: true
		});

        var slider2 = tns({
			container: ".slider2",
			controlsPosition: "bottom",
			nav: false,
			autoplayButtonOutput: false,
			items: 1,
			slideBy: "page",
			autoplay: true
		});

        var slider3 = tns({
			container: ".slider3",
			controlsPosition: "bottom",
			nav: false,
			autoplayButtonOutput: false,
			items: 1,
			slideBy: "page",
			autoplay: true
		});

        function validateForm() {
            window.location.replace("thank-you.html")
        }


    }
});