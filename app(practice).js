console.log('Jayant');

const API_KEY = 'd1845658f92b31c64bd94f06f7188c9c';

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara)
}

//jo bhi data API se aayega voh kitne time baad aayega ye uncertain hai.
// So isliye hum, async use kar rahe hai.
// taaki hum us data ko backgorund me lete rahe sake.
async function showWeather() {

    let city = 'goa';

	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	); // jab tak iss API call ka response nahi aata, tab tak wait karo

	const data = await response.json(); // jabtak data JSON me convert nahi hota, tabtak wait karo

	console.log('Weather data: ',data);

    renderWeatherInfo(data);  
}

//----------------------------------------------------------------------------------------------------

// HOW TO DO ERROR HANDLING IN API CALLING:

//while we are calling i.e fetching the API, then error bhi toh aa sakta hai.
    //So we will do error handling with the help of try() and catch().
async function getCustomDetails(){

    try{
        let latitude = 15.6333
        let longitude = 18.3333

        let result = await fetch(`https://api.openweathemap.org/data/2.5/weather?
        lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data = await result.json()
        console.log(data)
    }

    catch(err) {
        console.log("Found an Error bro:", err)
    }
    
}

//---------------------------------------------------------------------------------------------------------------

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
        
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
  
        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } 
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //getFromSessionStorage();
        }
  
      // console.log("Current Tab", currentTab);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        console.log("No geolocation support")
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi)
}