
function GetSeason() {
	var temp = document.getElementById('temp').value;
	
	//goal: send a request which looks like this:
	//http://localhost:50022/api/SeasonAPI/getseason/6
	
	var URL = "http://localhost:50022/api/SeasonAPI/getseason/"+temp;
	
	var rq = new XMLHttpRequest();
	// where is this request sent to?
	// is the method GET or POST?
	// what should we do with the response?
	
	
	rq.open("GET",URL, true);
	rq.onreadystatechange = function(){
		//ready state should be 4 AND status should be 200
		if(rq.readyState==4 && rq.status==200){
			//request is successful and the request is finished
			
			var Season = JSON.parse(rq.responseText);
			
			document.getElementById('SeasonContainer').style.display = "block";
			
			console.log(Season.SeasonName);
			console.log(Season.PhotographerName);
			console.log(Season.ImageURL);
			console.log(Season.Temperature);
			
			//Client-Side Rendering
			document.getElementById('PhotographerName').innerHTML = Season.PhotographerName;
			document.getElementById('SeasonName').innerHTML = Season.SeasonName;
			document.getElementById('Temperature').innerHTML = Season.Temperature;
			document.getElementById('Image').src = "images/"+Season.SeasonName+".jpg";
			document.getElementById('PhotoLink').href = Season.ImageURL;
		}
		
	}
	rq.send();
}