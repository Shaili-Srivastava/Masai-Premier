document.querySelector("form").addEventListener("submit",myForm)
var arr=JSON.parse(localStorage.getItem("schedule"))||[];
function myForm(){
  event.preventDefault()
  var match =  document.querySelector("#matchNum").value 
  var team1 =document.querySelector("#teamA").value
  var team2 =document.querySelector("#teamB").value
  var date1 =document.querySelector("#date").value
  var venue1 =document.querySelector("#venue").value

  var obj={matchNum:match, teamA:team1, teamB:team2,date:date1, venue:venue1}
  arr.push(obj)
localStorage.setItem("schedule", JSON.stringify(arr))
}

