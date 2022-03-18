var suggestionList=
[
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
    ];
let match=document.querySelector("input");
match.addEventListener("keyup",function(){
  let input=match.value;              //To get the pressed characters.
  
  

  //To work on the pressed character and check the suggestions for it.
 let matches=[];document.getElementById("selections").innerHTML="";// To Remove the Suggestions After Selecting Any One of them.
  for(let i=0;i<suggestionList.length;i++)
{
  if(suggestionList[i].toLowerCase().startsWith(input.toLowerCase()))
  {
    matches.push(suggestionList[i]);
  }
}
// To Remove The List popping up after cleearing the Input Field that Contained all the Countries Names.
  
if(input.slice(0,input.length)==="")
  {
    //document.getElementById("selections").innerHTML="";
    //document.getElementById("selections").hidden();
    document.getElementById("selections").style.visibility="hidden";
    matches=[];
    matches[0]=document.querySelector("input").value;
  }
  else{
    document.getElementById("selections").style.visibility="visible";
  }

//TO Work On the Suggestions To be Displayed In form Of a Div.
 for(let j=0;j<matches.length;j++)
 {
   const divi=document.createElement("div");
   divi.innerHTML=matches[j];
   document.getElementById("selections").appendChild(divi);
 }

 //TO Work on if user selects a Suggestion then to remove the list of Suggestions And Update Matches.
 var nodeLists=document.querySelectorAll("#selections > div");
 for(let k=0;k<matches.length;k++){
   nodeLists[k].addEventListener("click",function(){
    document.querySelector("input").value=matches[k];
     document.getElementById("selections").innerHTML="";
     matches=[];
     matches[0]=document.querySelector("input").value;
    });
 }

 //TO Work On If A user Clicks Submit Then to show the list of Countries On the Basis Of Input.


 document.querySelector("button").addEventListener("click",function(){
   let p=0;
   if(matches[0]==="")
   {
     document.body.innerHTML="<h1>No Details Provided.</h1>"
   }
   else{
   document.body.innerHTML="<h1>"+matches[p]+"</h1>";}
  for(let p=1;p<matches.length;p++)
  { 
    const heading=document.createElement("h1");
    heading.innerHTML=matches[p];
    document.body.appendChild(heading);
  }
document.body.style.textAlign="center";
document.body.style.padding="50px";
 });

  });
