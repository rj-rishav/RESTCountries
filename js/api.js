const input = document.querySelector('#search'); //Search Box
const button = document.querySelector('#search-btn'); //Search Button
const results = document.querySelector('#result'); //Result Box below the search box
const option  = document.querySelector('#options'); //Option for searching by country or capital

async function getCountry() {
  // Getting the value from the input
  let innerString = input.value.trim();
  innerString = innerString.replace(' ', '%20'); // Replacing the spaces with %20 for api call
  let url;
  if(innerString === ""){
    return;
  }
  else if(option.value === "country"){
    url = `https://restcountries.com/v3/name/${innerString}`;
  }
  else if(option.value === "capital"){
    url = `https://restcountries.com/v3/capital/${innerString}`;
  }

  const response = await fetch(`${url}`); 
  const data = await response.json();
  domManipulation(data); //Calling the function for editing the data from api in DOM
}
function domManipulation(data){
  const div = document.getElementById("data-display");
  const flag = document.getElementById("flag");
  console.log(data);
  if(data["status"] === 404){
    window.alert("Country Not Found");
    return;
  }
  div.children[0].children[0].innerHTML = data[0]["name"]["common"];
  div.children[1].children[0].innerHTML = data[0]["capital"][0];
  div.children[2].children[0].innerHTML = data[0]["continents"][0];
  div.children[3].children[0].innerHTML = data[0]["area"]+" km²";
  div.children[4].children[0].innerHTML = data[0]["currencies"][0];
  div.children[5].children[0].innerHTML = data[0]["languages".keys];
  div.children[6].children[0].innerHTML = data[0]["borders"];
  flag.src = data[0]["flags"][1];
  
}

button.addEventListener(['click'], () => {
  getCountry();
});
input.addEventListener(['keypress'], (e) => {
  if (e.key === 'Enter') {
    getCountry();
  }
});


