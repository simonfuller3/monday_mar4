(() => {
	console.log('fired! ready to jam');

	function playDrumKitSound(event) {
		// debugger;
		// select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
			
			// debugging / error handling
			// if we dont have a matching audio eement then kill the function
			if (!audio) { return; } // return stops code execution
			

			console.log(audio);
			audio.currentTime = 0;
			audio.play();

			let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
			key.classList.add('playing');
	

	}


	function removePlayingClass(event) {
		debugger;
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitioned", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);





})();
