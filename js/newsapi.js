async function getnews() {
    var url = 'https://newsapi.org/v2/everything?' +
          'q=governments&' +
          'sortBy=latesty&' +
          'apiKey=2c8b155f8ca84804a128c1943171a830';

    const response = await fetch(`${url}`);
    const data = await response.json();
    
    domManupulation(data);
}
function domManupulation(data) {

    for(let i=0; i<6; i++) {
        let cont = document.getElementById(`card-${i+1}`);
        let heading = cont.querySelector("h3");
        let img = cont.querySelector("img");
        let p = cont.querySelector("p");

        img.src = data["articles"][i]["urlToImage"];

        heading.innerHTML = data["articles"][i]["title"];
        p.innerHTML = data["articles"][i]["content"];
    }

}

getnews();
//If cont is a div container containing a img tag, then how can i access it using the id of the div container?
