
//친구파트
	var  astate = "off";
	fri1.onclick = function(){
			talk.style.display = "block";
			frisound.play();
			frisound.currentTime = 0;
	}



	Y1.onclick = function(){
			if (astate == "off") {
				talk.style.display = "none";
				nextyes1.style.display = "block";
				nextbutton1.style.display = "block";
				astate = "on";
			}
			else if (astate == "on") {
				nextyes1.style.display = "none";
				nextbutton1.style.display = "none";
				astate = "off";
			}
					
	}

			
	N1.onclick = function(){
		if (astate == "off") {
			talk.style.display = "none";
			nextno1.style.display = "block";
			outn1.style.display = "block";
			astate = "on";
		}
		else if (astate == "on") {
				nextno1.style.display = "none";
				outn1.style.display = "none";
				astate = "off";
			}
	}
		
		
	nextbutton1.onclick = function(){
		nextyes1.style.display = "none";
		nextnextyes1.style.display = "block";
	}


	NN1.onclick = function(){
		nextnextyes1.style.display = "none";
		frisound.pause();
	}
	outn1.onclick = function(){
		nextno1.style.display = "none";
		frisound.pause();
	}

//교수님 파트
var  bstate = "off";
	pro.onclick = function(){
			talk2.style.display = "block";
			prosound.play();
			prosound.currentTime = 2;
	}



	Y2.onclick = function(){
			if (bstate == "off") {
				talk2.style.display = "none";
				outy2.style.display = "block";
				bstate = "on";
			}
			else if (bstate == "on") {
				outy2.style.display = "none";
				bstate = "off";
			}
					
	}

	M2.onclick = function(){
			if (bstate == "off") {
				talk2.style.display = "none";
				nextmid2.style.display = "block";
				outm2.style.display = "block";
				bstate = "on";
			}
			else if (bstate == "on") {
				nextmid2.style.display = "none";
				outm2.style.display = "none";
				bstate = "off";
			}
					
	}
	
	outm2.onclick = function(){
		nextmid2.style.display = "none";
		pro.style.display = "none";
		prosound.pause();
	}