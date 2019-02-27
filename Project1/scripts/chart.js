$("#clearMood").click(function() {
	$("#mondayMood").val("");
	$("#tuesdayMood").val("");
	$("#wednesdayMood").val("");
	$("#thursdayMood").val("");
	$("#fridayMood").val("");
	$("#saturdayMood").val("");
	$("#sundayMood").val("");
})

var moodData= [];
var chartContext;

function loadData(typeChart){
	moodData=[];
	var value = document.getElementById('mondayMood').value;
	moodData.push(value);
	value = document.getElementById('tuesdayMood').value;
	moodData.push(value);
	value = document.getElementById('wednesdayMood').value;
	moodData.push(value);
	value = document.getElementById('thursdayMood').value;
	moodData.push(value);
	value = document.getElementById('fridayMood').value;
	moodData.push(value);
	value = document.getElementById('saturdayMood').value;
	moodData.push(value);
	value = document.getElementById('sundayMood').value;
	moodData.push(value);

	if(typeChart=='line'){
		displayLineChart();
	}
	else if (typeChart=='bar'){
		displayBarChart();
	}
	// else if (typeChart=='scatter'){
	// 	displayScatterPlot();
	// }

	return false;
}

function displayLineChart(){
	//loadData();
	console.log(JSON.stringify(moodData));
	chartContext = document.getElementById("moodChartDiv").getContext("2d");
	var data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			fillColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			data: moodData,
			}
		]
	};
	var options = {
		scaleOverride : true,
		scaleStartValue : 0,
		scaleSteps : 10,
		scaleStepWidth : 1,
		tooltips: {
			mode: "label"
		}
	};
	if(window.moodChart != null){
    window.moodChart.destroy();
}

	window.moodChart = new Chart(chartContext).Line(data,options);
}

function displayBarChart(){
	//loadData();
	console.log(JSON.stringify(moodData));
	chartContext = document.getElementById("moodChartDiv").getContext("2d");
	var data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			fillColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			data: moodData,
			borderWidth: 1,
			}
		]
	};
	var options = {
		scaleOverride : true,
		scaleStartValue : 0,
		scaleSteps : 10,
		scaleStepWidth : 1,
		tooltips: {
			mode: "label"
		}
	};
	if(window.moodChart != null){
    window.moodChart.destroy();
}

	window.moodChart = new Chart(chartContext).Bar(data,options);
}

// function displayScatterPlot(){
// 	//loadData();
// 	console.log(JSON.stringify(moodData));
// 	chartContext = document.getElementById("moodChartDiv").getContext("2d");
// 	var data = {
// 	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
// 	datasets: [
// 		{
// 			fillColor: "rgba(75,192,192,0.2)",
// 			borderColor: "rgba(75,192,192,1)",
// 			pointBackgroundColor: "#fff",
// 			pointRadius: 5,
// 			data: moodData,
// 			}
// 		]
// 	};
// 	var options = {
// 		scaleOverride : true,
// 		scaleStartValue : 0,
// 		scaleSteps : 10,
// 		scaleStepWidth : 1,
// 		tooltips: {
// 			mode: "label"
// 		}
// 	};
// 	if(window.moodChart != null){
//     window.moodChart.destroy();
// }
//
// 	window.moodChart = new Chart(chartContext,{
// 		type: 'polarArea',
// 		data: data,
// 		options: options
// 	});
// }
