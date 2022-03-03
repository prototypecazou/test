var containe = [document.getElementById('maquettePeinture'),document.getElementById('horizontalScroll')]
var firstsec = document.getElementById('fond');
var four = document.getElementById('horizontalScroll');
var three = document.getElementById('rutur');
/*var horizontal= document.querySelector(".horizontal-section")
horizontal.style.background="linear-gradient(#ffffff,#ffffff,#ffffff, #ffffff)"*/
if(parseInt(window.location.hash.charAt(1)) >= 1){
	window.location.replace("")
}




function scrollHorizontal(){
	var path = document.querySelector("path")
	path.style.stroke="none"

	document.onscroll = function(){
	
		var windowWidth = window.innerWidth;
	var horLength = document.querySelector(".element-wrapper").scrollWidth;

	 var distFromTop = document.querySelector(".horizontal-section").offsetTop;
	var scrollDistance = distFromTop + horLength - windowWidth ;
	var scrollTop = window.pageYOffset;
	
	var calcule = (scrollTop - distFromTop)




	if(scrollTop + 500 >= document.querySelector("#maquettePeinture").offsetTop){
		var imagePath = document.querySelector("#imagePath")
		var animePath = document.querySelector("#animePath")
		path.style.stroke=""
		imagePath.classList.add("imagePath")
		animePath.classList.add("animePath")
	}
		if (scrollTop >= distFromTop ) {
		
		document.querySelector(".element-wrapper").style.marginLeft = "-"+calcule+"px";
		
		
		}
		
	
	

	}

	
}



window.onload = function(){

/*	var distFromTop = document.querySelector(".horizontal-section").offsetTop;

	var scrollTop = window.pageYOffset;

	console.log((scrollTop - distFromTop))*/

	var sliderCreation = document.querySelectorAll("#sliderCreation")
	var imgCreation = document.querySelectorAll("#imgCreation")
	var numberCreation = document.querySelectorAll("#numberCreation")
	var upLong = document.querySelector("#upLong")
	var downLong = document.querySelector("#downLong")
	var counter = 1
	var tailleBox = [numberCreation[0].clientHeight,imgCreation[0].clientHeight]

	var sliderPortfolio = document.querySelector("#sliderPortfolio")
var boxPortfolio = document.querySelectorAll(".boxPortfolio")
var counterPortfolio = 1
var taillePortfolio = boxPortfolio[0].clientWidth
	
	let page = 0;
	let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
				document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


	
	window.onresize = function() {

	

		
		
		if(window.location.hash.charAt(1) >= 3 && window.location.hash.charAt(1) <= 6){
			window.location.hash = 3
			document.querySelector(".element-wrapper").style.marginLeft = "0px"
		
		}

		
		var elementResize = document.querySelector("section[data-resize=resize"+window.location.hash.charAt(1)+"]")
	
		elementResize.scrollIntoView({block:'start'});
		
		

		vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);



		
	
		
		 tailleBox = [numberCreation[0].clientHeight,imgCreation[0].clientHeight]

		 for (let index = 0; index < tailleBox.length; index++) {
			sliderCreation[index].style.transition = "none"
			sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
			
		}

		taillePortfolio = boxPortfolio[0].clientWidth
		sliderPortfolio.style.transition = "none"
		sliderPortfolio.style.transform = "translateX("+(-taillePortfolio * counterPortfolio)+"px)"
	
		 	
	}
	let done = 8  //Math.round(limit/vh)-1;
	let clock = 0;
	var elementWrapper = document.querySelector(".element-wrapper")
	

	function animationHorizontal(position,position2){
	
		elementWrapper.children[position].classList.add("animeHorizon")
		elementWrapper.children[position].children[1].classList.add("animeHorizon")
		setTimeout(() => {
	
			elementWrapper.children[position].children[position2].style.opacity="1"
			elementWrapper.children[position].children[1].classList.add("close")
		}, 1200);
	}

	
		
 
	function scrollWindow(){ window.onwheel = function () {

		

		if(clock == 0){
	  	clock = 1;
	  
	  	let pos = event.deltaY;
	  	let scroll=0;  
	  
		  let go = (event.deltaY < 0 ) ? -1 : +1;
		  var j = window.location.hash.charAt(1)
		
		  if(window.location.hash == "#NaN" || window.location.hash == "" ){
			  page = page + go
		  }
		  else{
			page = parseInt(j)+go
		  }
		 
		  //page = page + go;
		if(page < 0 )page = 0;
		if(page > done) page = done;
		
	
	
		window.location.hash = page
		

		
		var temps = 1500
		var time = 1000

	


		if(page <= 2 && event.deltaY < 0 ){
		
		
				document.querySelectorAll(".element").forEach(element => {
		
					element.classList.remove("animeHorizon")
					element.children[1].classList.remove("animeHorizon")
					element.children[1].classList.remove("close")
					
					setTimeout(() => {
						element.children[0].style.opacity="0"
					}, 800);
				});
		
		
		}

		if(page == 3 && event.deltaY > 0 ){
			
		 	animationHorizontal(1,0)

			setTimeout(() => {
				animationHorizontal(2,0)
			}, 800);
		}
	
	
	
		if(page >= 4 && page < 7 || page == 3 && event.deltaY < 0 ){
			temps = 800
			time = 800
			

			switch(true){

				
				case page == 4 : 
				setTimeout(() => {
					animationHorizontal(4,0)
				}, 800);
				
				animationHorizontal(3,0)
				break;
				case page == 5 : 
				setTimeout(() => {
					animationHorizontal(6,0)
				}, 800);
			
				animationHorizontal(5,0)
				break
			}
		} 

		if(page == 6  && event.deltaY < 0){
			temps = 1500
			time = 1000
		}
		
		$('html, body').animate({
			scrollTop: vh*page
	  	},{duration:temps});
		setTimeout(function(){clock = 0}, time);
	
			}
		}	
	}


 if(window.location.hash == "" || window.location.hash == "#0" ){
	 setTimeout(() => {
		scrollWindow()
	 }, 4500);
 }else{
	scrollWindow()
 }
	
	
/*-------------------------------------------*/
	
	function animationDecompte(next,prev,content){
	
		prev.textContent = content
		
		next.animate([
		// keyframes
			{ transform: 'translateY(-100%)'},
			{ transform: 'translateY(0)'}
			
		],{
			// timing options
			duration:180,
			easing: "ease-in-out",
			
		});
	
		prev.animate([
			// keyframes
			{ transform: 'translateY(-100%)'},
			{ transform: 'translateY(0%)' }
		],{
			// timing options
			duration:180,
			easing: "ease-in-out"
		});
	
		setTimeout(() => {
			next.textContent = content
		}, 180);
	}
	
	var nombre = document.querySelector(".nombreNext")
	var number = document.querySelector(".nombrePrev")
	var liens = document.querySelectorAll(".lien")
	var motNext = document.querySelector(".motNext")
	var motPrev = document.querySelector(".motPrev")
	var delay2 
	
	liens.forEach(element => {
	
		element.onmouseover = function(){
			
			clearTimeout(delay2)
			var delay = setTimeout(function(){animationDecompte(motNext, motPrev,element.textContent.toUpperCase())
			animationDecompte(nombre, number,element.getAttribute("data-id"))},180)
	
			element.onmouseout = function(){
				clearTimeout(delay)
				delay2 = setTimeout(function(){animationDecompte(motNext,motPrev,"AGENCE")
				animationDecompte(nombre, number,"0")},180)
			}
		}
	})
	
	//var windowWidth = window.innerWidth;
//	var horLength = document.querySelector(".element-wrapper").scrollWidth;
	//var distFromTop = document.querySelector(".horizontal-section").offsetTop;
	//var scrollDistance = distFromTop + horLength - windowWidth;
	var secondsec = document.getElementById('maquettePeinture');
	document.querySelector(".horizontal-section").style.height = 400+ "vmin";
	var barrePenche = document.querySelectorAll(".barrePenche")
	var imagePath = document.querySelector("#imagePath")
	var animePath = document.querySelector("#animePath")
	
	var texteMaquette = document.querySelector("#texteMaquette")



	scrollHorizontal();
	
	var premiereSection = document.querySelector("#premiereSection")
	var fond = document.querySelector("#fond")
	var carreBlanc = document.querySelector("#carreBlanc")
	var premiereSectionDroite = document.querySelectorAll('.premiereSectionDroite')
	var animeOpac = document.querySelectorAll(".animeOpac")
	var titreChargement = document.querySelector(".titreChargement")
	var nav = document.querySelector(".navPc")
	var animeOpacBas = document.querySelectorAll(".animeOpacBas")
	
	titreChargement.animate([
		// keyframes
			{opacity:1,transform: 'translateY(0%)'},
			{opacity:0,transform: 'translateY(-125%)'}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			fill: "forwards"
		});

	premiereSection.animate([
		// keyframes
			
			{ opacity: 1},
			{ opacity: 0}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			easing: "ease-in-out",
			fill: "forwards"
		});

  	fond.animate([
		// keyframes
		{backgroundSize:"150% 170%"},
		{backgroundSize:"110% 130%"}
			
		],{
		// timing options
		duration:800,
		delay:1000,
		easing: "ease-in-out",
		fill: "forwards"
	});
	
	carreBlanc.animate([
			// keyframes
		{width: "115vmin"},
		{width: "0%"}
		],{
			duration:800,
			delay:1900,
			easing: "ease-in-out",
			fill: "forwards"
		});

	premiereSectionDroite.forEach(element => {
		element.animate([
			// keyframes
			{ transform: 'translateX(100%)'},
			{ transform: 'translateX(0)'}
			],{
				// timing options
				duration:800,
				delay:2610,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});

	var prums = document.querySelector(".prums")
	prums.animate([
		// keyframes
		{ opacity: '1'},
		{ opacity: '0'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

		
	var seconds = document.querySelector(".seconds")
				
	seconds.animate([
		// keyframes
		{ opacity: '0'},
		{ opacity: '1'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

	/* APPARITION DIAGONALE */

	animeOpac.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translate(5%, -5%)'},
			{ opacity: '1',transform: 'translate(0 , 0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	nav.animate([
	// keyframes
		{ opacity: '0',transform: 'translate(-5%, -5%)'},
		{ opacity: '1',transform: 'translate(0 , 0)'}
	],{
		// timing options
		duration:700,
		delay:4000,
		easing: "ease-in-out",
		fill:"forwards"
	});

	animeOpacBas.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translateY(20%)'},
			{ opacity: '1',transform: 'translateY(0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	setTimeout(() => {
		premiereSection.className="d-none"
	}, 4200);

	var h = 0
	document.querySelector('.burger').addEventListener('click', function() {
		document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
		this.classList.toggle('open');
		document.querySelector('#burgerSectionGauche').classList.toggle('open');
		document.querySelector('#burgerSectionDroite').classList.toggle('open');

		var unit = document.querySelectorAll(".unit")
		unit.forEach(element => {
			element.classList.toggle('apparition');
		});
		
		if(h%2 == 0){
			window.onwheel = null
		}else{
			setTimeout(() => {
				document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
			}, 1000);
			
			scrollWindow()
		}
	
		h++	
	})

	var reseauxAccueil = document.querySelectorAll(".reseauAccueil")
var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

	element.onmousemove = function(e){
		var left = e.movementX*5
		var top = e.movementY*5
		element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
		console.log("ok")
	}

	element.onmouseout = function(){
		element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
	}
});


var $body = $('body'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col'),
	$portfolio = $('#portfolio')
function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$portfolio.mousemove(function(e) {
		
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center ",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center ",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})

initTilt();



var tabTitre = ["Site vitrine","E-commerce","Graphique","Refonte","Optimisation"]
var tabTexte = ["texte 1","texte2","texte 3","texte 4","texte 5"]
var tabBackground =["#1A1A1A","#41443E","#f6bd60","#84a59d","#2C3A47"]
//88837C
var titreCreation = document.querySelector("#titreCreation")
var paraCreation = document.querySelector("#paraCreation")
var prestaDroite = document.querySelector("#prestaDroite")
var counterTitre = 1
var btnPresta = document.querySelectorAll(".btnPresta")

for (let index = 0; index < tailleBox.length; index++) {
	
	sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
}




//sliderCreation.style.transform="translateY("+(-tailleBox*counter)+"px)"

btnPresta.forEach(element => {
	element.onclick = function(){

		 counter = this.getAttribute("data-position")
		 counterTitre = this.getAttribute("data-position")
		 titreCreation.textContent = tabTitre[counterTitre-1]
		 paraCreation.textContent = tabTexte[counterTitre-1]
		 titreCreation.animate([
			 // keyframes
			 { opacity: '0' },
			 { opacity: '1' }
		   ], {
			 // timing options
			 duration: 1000
		 
		   });

		   paraCreation.animate([
			// keyframes
			{ opacity: '0' },
			{ opacity: '1' }
		  ], {
			// timing options
			duration: 1000
		
		  });
		   prestaDroite.style.backgroundColor = tabBackground[counterTitre-1]
		   prestaDroite.style.transition = "background 1s linear"
		   

		   btnPresta.forEach(element => {
			if(element.textContent.slice(4) == tabTitre[counterTitre-1]){
				element.style.color="white"
			}else{
				element.style.color="darkgrey"
			}
		});

for (let index = 0; index < tailleBox.length; index++) {

		
	sliderCreation[index].style.transition = "transform 1s ease-in-out"

	sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"


}

	}
});


downLong.onclick = function(){
	this.disabled = true
	setTimeout(() => {
		this.disabled = false
	}, 1000);
	if(counter >= imgCreation.length-1) return
	if(counterTitre >= tabTitre.length) counterTitre = 0
	titreCreation.textContent = tabTitre[counterTitre]
	paraCreation.textContent = tabTexte[counterTitre]
	titreCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	 paraCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	  prestaDroite.style.backgroundColor = tabBackground[counterTitre]
	  prestaDroite.style.transition = "background 1s linear"


	  btnPresta.forEach(element => {
		if(element.textContent.slice(4) == tabTitre[counterTitre]){
			element.style.color="white"
		}else{
			element.style.color="darkgrey"
		}
	});
	

counter++
for (let index = 0; index < tailleBox.length; index++) {

	sliderCreation[index].style.transition = "transform 1s ease-in-out"
	sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
}

counterTitre++

}

upLong.onclick = function(){
	this.disabled = true
	setTimeout(() => {
		this.disabled = false
	}, 1000);
	if(counter <= 0) return
	if(counterTitre <= 1) counterTitre = 6
	counterTitre--
	paraCreation.textContent = tabTexte[counterTitre-1]
	titreCreation.textContent = tabTitre[counterTitre-1]
	titreCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });

	  paraCreation.animate([
		// keyframes
		{ opacity: '0' },
		{ opacity: '1' }
	  ], {
		// timing options
		duration: 1000
	
	  });
	  prestaDroite.style.backgroundColor = tabBackground[counterTitre-1]
	  prestaDroite.style.transition = "background 1s linear"

	  btnPresta.forEach(element => {
		if(element.textContent.slice(4) == tabTitre[counterTitre-1]){
			element.style.color="white"
		}else{
			element.style.color="darkgrey"
		}
	});
	counter--
	for (let index = 0; index < tailleBox.length; index++) {
	
		sliderCreation[index].style.transition = "transform 1s ease-in-out"
		sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
	}
	//counterTitre--
}

sliderCreation.forEach(element => {
	element.addEventListener('transitionend', () => {
		if(imgCreation[counter].classList.contains("firstBox")){
			
			counter = imgCreation.length-2
	
			for (let index = 0; index < tailleBox.length; index++) {
		
				sliderCreation[index].style.transition = "none"
				sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
			}
		
		}
		if(imgCreation[counter].classList.contains("lastBox")){
			
			counter = 1
			
			for (let index = 0; index < tailleBox.length; index++) {
		
				sliderCreation[index].style.transition = "none"
				sliderCreation[index].style.transform="translateY("+(-tailleBox[index]*counter)+"px)"
			}
		}
	  });
	
	
	
	
});

imgCreation.forEach(element => {
	element.onmouseover = function(){
		this.style.transform = "scale("+1.2+")"
		this.style.transition = "transform 0.3s linear"
	}
	element.onmouseout = function(){
		this.style.transform = "scale("+1+")"
		
	}
});



var btnPrecPort = document.querySelector("#btnPrecPort")
var btnSuiPort = document.querySelector("#btnSuiPort")
sliderPortfolio.style.transform = "translateX("+(-taillePortfolio * counterPortfolio)+"px)"

btnSuiPort.onclick = function(){
	clearInterval(interne)
	if(counterPortfolio >= boxPortfolio.length-1)return
	counterPortfolio++
	sliderPortfolio.style.transform = "translateX("+(-taillePortfolio * counterPortfolio)+"px)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
}

btnPrecPort.onclick = function(){
	clearInterval(interne)
	if(counterPortfolio <= 0 )return
	counterPortfolio--
	sliderPortfolio.style.transform = "translateX("+(-taillePortfolio * counterPortfolio)+"px)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
}



	sliderPortfolio.addEventListener('transitionend', () => {
		
		if(boxPortfolio[counterPortfolio].classList.contains("first")){
			console.log("ok")
			counterPortfolio = boxPortfolio.length-2
	
		
				sliderPortfolio.style.transition = "none"
				sliderPortfolio.style.transform="translateX("+(-taillePortfolio*counterPortfolio)+"px)"
			
		
		}
		if(boxPortfolio[counterPortfolio].classList.contains("last")){
			
			counterPortfolio = 1
			
			
		
			sliderPortfolio.style.transition = "none"
			sliderPortfolio.style.transform="translateX("+(-taillePortfolio*counterPortfolio)+"px)"
			
		}
	  });
	

	var interne = setInterval(() => {
		if(counterPortfolio >= boxPortfolio.length-1)return
	counterPortfolio++
	sliderPortfolio.style.transform = "translateX("+(-taillePortfolio * counterPortfolio)+"px)"
	sliderPortfolio.style.transition = "transform 1s ease-in-out"
	}, 5000);
}



