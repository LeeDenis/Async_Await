async function asynchRNG() {
      let numberGenerator= new Promise(resolve => {
            setTimeout(() => {
              resolve(Math.random());
            }, 500);
          });
     let generatedNumber= await numberGenerator;
     alert(generatedNumber);
  };
  asynchRNG();

async function city(cityName) {
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    const info = await response.json();
    alert("The latitude and longitude are " + info.longt + " and " + info.latt);
  }
  city("seattle");