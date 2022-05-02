var arr= JSON.parse(localStorage.getItem("schedule"))
matches(arr)

var arr1= JSON.parse(localStorage.getItem("favourites"))||[]
function matches(arr){
    arr.forEach(ele=> {
        var tr = document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=ele.matchNum;
        var td2=document.createElement("td");
        td2.innerText=ele.teamA;
        var td3=document.createElement("td")
        td3.innerText=ele.teamB
        var td4=document.createElement("td")
        td4.innerText=ele.date
        var td5=document.createElement("td")
        td5.innerText=ele.venue
        var td6 =document.createElement("td")
        td5.innerText="Favourites"
        td6.addEventListener("click", mybutton)
        
        function mybutton(){
            arr1.push(ele);
            localStorage.setItem(localStorage.setItem("favourites", JSON.stringify(arr1)));
           }
        td6.innerText="Favourites";
        td6.style.color="green"
        td6.style.cursor="pointer"
        

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)
    });
}




