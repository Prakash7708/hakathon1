var div =document.createElement("div");
div.innerHTML=`  
<a class="navbar navbar-expand-lg  bg-blue container-fluid navbar-brand" href="#"><h2>Nationalize.io </h2> </a>
<div id="searchDetails"> <h1 class="searchDetails">Predict the nationality of a name</h1>
   <p> An API for predicting nationality from a name</p></div>
<div id="searchBar">
<input id="inputName" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">


<button class="btn btn-outline-success" type="button" onclick="search()">Search</button>


</div>
<div id="countryContainer" class="form-control">
    <div class="country1">
         <div id="countryid0"></div>
         <div id="probability0"></div>
    </div>
    <div class="country2">
         <div id="countryid1"></div>
         <div id="probability1"></div>
    </div>
</div>

<div id ="Error"></div>`;
// div.style.textAlign="center";
document.body.append(div);




async function search(){
   try{ let cc=document.getElementById("inputName").value;
    let res= await fetch(`https://api.nationalize.io/?name=${cc}`)
      let res1=await res.json();
      var cName0= res1.country[0].country_id;  
      var cProb0= res1.country[0].probability;

      var cName1= res1.country[1].country_id;  
      var cProb1= res1.country[1].probability;
      //display
      let ctyId0 = document.querySelector("#countryid0");
      ctyId0.innerText=`Country Name :${cName0}`;

      let ctyProb0 = document.querySelector("#probability0");
      ctyProb0.innerText=`Name Probability in this country :${cProb0}`;

      let ctyId1 = document.querySelector("#countryid1");
      ctyId1.innerText=`Country Name :${cName1}`;

      let ctyProb1 = document.querySelector("#probability1");
      ctyProb1.innerText=`Name Probability in this country :${cProb1}`;
    }
      catch(error){
        //error display
            var Error=error;
            let Error0 = document.querySelector("#Error");
            Error0.innerText=`${Error}`;  
      }
     
    
    }