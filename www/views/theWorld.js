// JavaScript Document
var beta;
function init()
{
	var angleCont= document.getElementById('angleDisp');
	
	if(window.DeviceOrientationEvent)
	{
		//alert('Supported')
		window.addEventListener('deviceorientation',
		function(event)
		{
			 beta = Math.round(event.beta);
			 var alpha = Math.round(event.alpha);
			 var gamma = Math.round(event.gamma);
			 
			if(beta!=null)
			{
				angleCont.innerHTML = 'Pitch: '+ beta;
				
			}
		
		},false);
	}
	
}

function buttonClick()
{
	
	if(typeof(Storage)!== "undefined")
	{
		//alert("available");
		localStorage.setItem("pitch",beta);
	}
	else
	{
		alert("unavaiable");
	}
	//closeCamera();
	window.open("Main.html","_self");
	
}

function closeCamera()
{
	document.location='architectsdk://actioncloseWikitudePlugin';
}


