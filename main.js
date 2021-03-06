const placement = 100;
const day = 100;
const kill = 1000;
const arena = 500;
const win = 1500

class Tribute {
	constructor(name, place, days, kills, arenas) {
		this.name = name;
		this.place = place;
		this.days = days;
		this.kills = kills;
		this.arenas = arenas;
	}
}

function addLabel(target, targetID, value) {
	var l = document.createElement("label");
	var t = document.createTextNode(value)
	
	l.setAttribute('for', targetID);
	l.appendChild(t);
	target.appendChild(l);
	
	};

function buildForm(target, trib) {
	
	var f = document.createElement("form");
	f.setAttribute('method', 'get');
	f.id = target+"form"+trib;
	
	var tName = document.createElement("input");
	tName.type = "text";
	tName.name = "t_Name";
	tName.id = target+"t_Name"+trib;
	
	var tPlace = document.createElement("input");
	tPlace.type = "number";
	tPlace.name = "t_Place";
	tPlace.id = target+"t_Place"+trib;
	
	var tDays = document.createElement("input");
	tDays.type = "number";
	tDays.name = "t_Days";
	tDays.id = target+"t_Days"+trib;
	
	var tKills = document.createElement("input");
	tKills.type = "number";
	tKills.name = "t_Kills";
	tKills.id = target+"t_Kills"+trib;
	
	var tArenas = document.createElement("input");
	tArenas.type = "number";
	tArenas.name = "t_Arenas";
	tArenas.id = target+"t_Arenas"+trib;
	
	var tScore = document.createElement("input");
	tScore.type = "number";
	tScore.name = "t_Score";
	tScore.id = target+"t_Score"+trib;
	
	addLabel(f, f.id, "Entry "+(trib+1))
	addLabel(f, tName.id, "Name");
	f.appendChild(tName);
	addLabel(f, tPlace.id, "Placement");
	f.appendChild(tPlace);
	addLabel(f, tDays.id, "Days Survived");
	f.appendChild(tDays);
	addLabel(f, tKills.id, "Kills");
	f.appendChild(tKills);
	addLabel(f, tArenas.id, "Arenas Survived");
	f.appendChild(tArenas);
	addLabel(f, tScore.id, "Total Score");
	f.appendChild(tScore);
	
	document.getElementById(target).appendChild(f);
	document.getElementById(tPlace.id).value = i+1;
	document.getElementById(tArenas.id).value = document.getElementById("selection").value;
	
};	

function returnLanding(page){
	var landing = document.getElementById("landing");
	var current = document.getElementById(page);
	
	document.getElementById("selection").style.display = "flex";
	document.getElementById(page).style.display = "none";
	document.getElementById("retrieve").disabled = true;
	
};

function getSize(evt, numbers) {

	var form = document.getElementById(numbers);
	
	document.getElementById("log").innerHTML = numbers;
	document.getElementById("selection").style.display = "none";
	form.style.display = "flex";
	
	if (numbers == "24") {
	
		var back = document.createElement("button");
		back.name = "return";
		back.id = "return"+numbers;
		back.setAttribute('onclick', "returnLanding('24')");
		back.setAttribute('type', 'button');
		back.setAttribute('class', 'lReturn');
		form.appendChild(back);
		document.getElementById(back.id).innerHTML = "Go back to Size Select";
		
		for (i = 0; i < 24; i++) {
			buildForm(numbers, i);
		}	
		document.getElementById("process").value = "24";
		document.getElementById("retrieve").value = "24";
	}
	
	if (numbers == "36") {
	
		var back = document.createElement("button");
		back.name = "return";
		back.id = "return"+numbers;
		back.setAttribute('onclick', "returnLanding('36')");
		back.setAttribute('type', 'button');
		back.setAttribute('class', 'lReturn');
		form.appendChild(back);
		document.getElementById(back.id).innerHTML = "Go back to Size Select";
		
		for (i = 0; i < 36; i++) {
			buildForm(numbers, i);
		} 	
		document.getElementById("process").value = "36";
		document.getElementById("retrieve").value = "36";
	}
		
	if (numbers == "48") {
	
		var back = document.createElement("button");
		back.name = "return";
		back.id = "return"+numbers;
		back.setAttribute('onclick', "returnLanding('48')");
		back.setAttribute('type', 'button');
		back.setAttribute('class', 'lReturn');
		form.appendChild(back);
		document.getElementById(back.id).innerHTML = "Go back to Size Select";
			
		for (i = 0; i < 48; i++) {
			buildForm(numbers, i);
		}	
		document.getElementById("process").value = "48";	
		document.getElementById("retrieve").value = "48";
	}
		
};

function submission(field, save) {
	document.getElementById("log").innerHTML = field.value;
	localStorage.setItem(save, field.value);
};

function calculate(i, target, size) {

	var name = size+"t_Name"+i;
	var place = size+"t_Place"+i;
	var days = size+"t_Days"+i;
	var kills = size+"t_Kills"+i;
	var arenas = size+"t_Arenas"+i;

	var nameF = document.getElementById(name);
	var placeF = document.getElementById(place);	
	var daysF = document.getElementById(days);	
	var killsF = document.getElementById(kills);	
	var arenasF = document.getElementById(arenas);

	if (placeF.value == 1) {
		target.value = ((size-placeF.value)*placement)+(daysF.value*day)+(killsF.value*kill)+(arenasF.value*arena)+win;
	} else {
		target.value = ((size-placeF.value)*placement)+(daysF.value*day)+(killsF.value*kill)+(arenasF.value*arena);
	}
};

function getTributes(obj) {

	if (obj == "24") {
	
		for (i = 0; i < 24; i++) {
			
			var name = "24t_Name"+i;
			var place = "24t_Place"+i;
			var days = "24t_Days"+i;
			var kills = "24t_Kills"+i;
			var arenas = "24t_Arenas"+i;
			var score = "24t_Score"+i;
			var nameF = document.getElementById(name);
			var placeF = document.getElementById(place);	
			var daysF = document.getElementById(days);	
			var killsF = document.getElementById(kills);	
			var arenasF = document.getElementById(arenas);
			var scoreF = document.getElementById(score);
	
			submission(nameF, "24nameF"+i);
			submission(placeF, "24placeF"+i);
			submission(daysF, "24daysF"+i);
			submission(killsF, "24killsF"+i);
			submission(arenasF, "24arenasF"+i);
			calculate(i, scoreF, 24);
	
		}
		document.getElementById("retrieve").disabled = false;
		
	} else if (obj == "36") {

			for (i = 0; i < 36; i++) {
				
				var name = "36t_Name"+i;
				var place = "36t_Place"+i;
				var days = "36t_Days"+i;
				var kills = "36t_Kills"+i;
				var arenas = "36t_Arenas"+i;
				var score = "36t_Score"+i;
				var nameF = document.getElementById(name);
				var placeF = document.getElementById(place);	
				var daysF = document.getElementById(days);	
				var killsF = document.getElementById(kills);	
				var arenasF = document.getElementById(arenas);
				var scoreF = document.getElementById(score);
		
				submission(nameF, "36nameF"+i);
				submission(placeF, "36placeF"+i);
				submission(daysF, "36daysF"+i);
				submission(killsF, "36killsF"+i);
				submission(arenasF, "36arenasF"+i);
				calculate(i, scoreF, 36);
				
			}
			document.getElementById("retrieve").disabled = false;
			
		}	else if (obj == "48") {
		
			for (i = 0; i < 48; i++) {
				
				var name = "48t_Name"+i;
				var place = "48t_Place"+i;
				var days = "48t_Days"+i;
				var kills = "48t_Kills"+i;
				var arenas = "48t_Arenas"+i;
				var score = "48t_Score"+i;
				var nameF = document.getElementById(name);
				var placeF = document.getElementById(place);	
				var daysF = document.getElementById(days);	
				var killsF = document.getElementById(kills);	
				var arenasF = document.getElementById(arenas);
				var scoreF = document.getElementById(score);
		
				submission(nameF, "nameF"+i);
				submission(placeF, "placeF"+i);
				submission(daysF, "daysF"+i);
				submission(killsF, "killsF"+i);
				submission(arenasF, "arenasF"+i);
				calculate(i, scoreF, 48);
			
			}
			document.getElementById("retrieve").disabled = false;
		}
		
};

function buildList(i, target, number) {

	var name = number+"t_Name"+i;
	var nameF = document.getElementById(name);
	var score = number+"t_Score"+i;
	var scoreF = document.getElementById(score);
	
	var item = document.createElement("li");
	item.name = "tribScore";
	item.id = "tribScore"+i;
	var list = document.getElementById(target);
	
	list.appendChild(item);
	document.getElementById(item.id).innerHTML = nameF.value + " : " + scoreF.value;

};

function getScores(obj) {

	if (obj == "24") {
	
		var output = document.getElementById("output");
		output.innerHTML = "";
		var list = document.createElement("ol");
		list.name = "scores";
		list.id = "scores";
		
		output.appendChild(list);
		for (i = 0; i< 24; i++) {
			buildList(i, "scores", obj);
		}
	}
	
	if (obj == "36") {
	
		var output = document.getElementById("output");
		output.innerHTML = "";
		var list = document.createElement("ol");
		list.name = "scores";
		list.id = "scores";
		
		output.appendChild(list);
		for (i = 0; i< 36; i++) {
			buildList(i, "scores", obj);
		}
	}
	
	if (obj == "48") {
	
		var output = document.getElementById("output");
		output.innerHTML = "";
		var list = document.createElement("ol");
		list.name = "scores";
		list.id = "scores";
		
		output.appendChild(list);
		for (i = 0; i< 48; i++) {
			buildList(i, "scores", obj);
		}
	}
};	

document.getElementById("retrieve").disabled = true;
