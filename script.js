let fet = fetch("https://restcountries.com/v3.1/all")
  .then((response) =>{  response.json()})
  .then((data=[]) => { console.log(data);
    data.map((value)=>{
        console.log(` ${value.name.common} ${value.flags.png} Capital ${value.capital} Region ${value.region}
         CountryCode ${value.car.signs} latlng ${value.latlng}`   )
         
     const row=document.getElementById('row');
     const cardiv=document.createElement('div');
     cardiv.setAttribute('class','row col-lg-4 col-sm-12');
     // create a card//
     const card=document.createElement('div');
     card.setAttribute('class','card');
     // create card header//
     const cardheader=document.createElement('h3');
     cardheader.setAttribute('class','card-header');
     cardheader.append(value.name.common);
     card.appendChild(cardheader);
     cardiv.appendChild(card);
     row.appendChild(cardiv)
     //create card body//
    const cardbody=document.createElement('div');
     cardbody.setAttribute('class','card-body');
     // create image div//
     const imge=document.createElement('div');
     imge.setAttribute('class','card-img');
     const flgs=document.createElement('img')
     flgs.src=value.flags.png;
     imge.appendChild(flgs);
     cardbody.appendChild(imge);
     const br=document.createElement('div');
     br.setAttribute('class','Text');
         
     //create body text//
     const p1=document.createElement('p');
     const txt1=document.createTextNode('Capital:');
     const spc=document.createTextNode(' ');
     p1.append(txt1,spc,value.capital);
     br.append(p1);
     cardbody.appendChild(br);
     card.appendChild(cardbody);
     const r1=document.createElement('p');
     const txt2=document.createTextNode('Region:');
     const spc1=document.createTextNode(' ');
     r1.append(txt2,spc1,value.region);
     cardbody.appendChild(r1);
     card.appendChild(cardbody);
     const c1=document.createElement('p');
     const txt3=document.createTextNode('CountryCode:');
     const spc2=document.createTextNode(' ');
     c1.append(txt3,spc2,value.car.signs);
     cardbody.appendChild(c1);
     card.appendChild(cardbody);
     //create a button
     const button=document.createElement('button');
     button.setAttribute('class','btn btn-primary');
     button.textContent='click for weather';
     button.onclick=function(){
     getweather(value.latlng);
     showpop();
     }
    

     cardbody.appendChild(button);
     card.appendChild(cardbody);
     var pdv = document.createElement("div");
     pdv.setAttribute("id","popup")
     pdv.innerHTML=`<h2>Weather Report</h2>
     <p id="p1"></p>
     <button onclick="hidePopup()">Close</button>`
    document.body.append(pdv)
    })
    })
    function hidePopup() {
      var popup = document.getElementById("popup");
      if (popup) {
        popup.style.display = "none";
      }
      else {
        console.error("Popup element not found");
      }
    }
    
  function showpop() {
    var popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "block";
    }
    else {
      console.error("Popup element not found");
    }
  }
     function getweather(value){
      let lat=value[0];
      let lng=value[1];
      weatherupdate(lat,lng);
     }
    function weatherupdate (a,b){

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=75e5070a460ff9cce78da8499c2a3eee`)
         .then((response) =>{ if(response.status==200){  response.json()} })
        .then((data)=> {
          console.log(data);
          const output=document.getElementById('p1')
      
             output.innerText=`
                     
             Current Humidity is ${data.main.humidity}
             Current Pressure is ${data.main.pressure}
            Current Temperature is ${data.main.temp}`
            })
     }

     


//  function block(lat,lng,name){
 

   
 
//    console.log(name)
//  fetch('https://api.openweathermap.org/data/3.0/onecall?lat='${lat}'&lon='${lon}'&exclude={part}&appid='${75e5070a460ff9cce78da8499c2a3eee}'')
//   .then((response) => response.json())
//  .then((data)=> {

//       alert(`
//                 For ${name.id}  
//       Current Humidity is ${data.main.humidity}
//       Current Pressure is ${data.main.pressure}
//      Current Temperature is ${data.main.temp}`)
//      })
//  }
  
//  document.addEventListener("click",(event) => event.preventDefault())

