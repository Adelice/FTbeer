// Code here
// function to fetch beer data 
function fetchBeerData(){
    return fetch('http://localhost:3000/beers')
    .then(function(response){
        if (!response.ok){
            throw new Error("Response is not OK");
        }
        return response.json();


    })
    .catch(function(error){
        console.error('Error fetching beer data:',error);
        return null
    })
}
// Update the beer details on our page 
function updateBeerDetails(beerData){
    if(!beerData || beerData.length===0){
        console.error('no beer data available');
        return;

    }

const firstBeer =beerData[0];
// Update the Dom elements
document.getElementById('beer-name').textContent = firstBeer.name
document.getElementById('beer-image').src = firstBeer.image_url;
document.getElementById('beer-description').textContent=firstBeer.description;


}

document.addEventListener('DOMContentLoaded',()=>{
    fetchBeerData().then((beerData)=>{
        updateBeerDetails(beerData);
    });
})