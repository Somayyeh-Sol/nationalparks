import React ,{useEffect, useState} from "react";
import axios from 'axios';


export default function Weather() {

 
   const [weatherData,setWeatherData] = useState({});

  const loadStateData=(event)=>{
     
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?appid=1a2e16938d4b79024deb982b1a47ef40&lat=-33.869629&lon=151.206955&exclude=minutely,hourly&units=metric`)
      .then(
        (response)=>{
            setWeatherData(response.data);
            console.log(response.data);
        }
    )
    .catch(
        error => {
             console.log(error.response.data);

        });
      }
  

  return (
    <div >
        <div className="App-header">
        <h3>Know the Weather  </h3>
        </div>
        
         
         <section id="weather-widget">
      <div class="center mw6 ba mt4 pa3">
        <div class="mv0">
          <h1 class="f4 ma0">Sydney, Australia</h1>
          <p class="ma0">Wednesday</p>
          <p class="ma0">Clear</p>
        </div>
        <div class="cf">
          <p class="f-headline lh-solid ma0 fl w-50">24</p>
          <ul class="list f6 f5-ns lh-copy measure mv0 fl w-50 pa0">

            <li>{weatherData[0]}</li>
            <br/>
            <li>Humidity: 53%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
      <ol class="list pl0 ma0 center mw6 flex f6">
        <li class="fl w-50 w-20-ns tc bg-black-05 ba bw1">
          <button type="button" class="w-100 h-100 pv2 black" onClick={(e)=>loadStateData(e) } disabled>
            <div class="mv1">Wed</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
        <li class="fl w-50 w-20-ns tc bg-black-05">
          <button type="button" class="w-100 h-100 ba pv2 pointer" onClick={(e)=>loadStateData(e) }>
            <div class="mv1">Thu</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
        <li class="fl w-50 w-20-ns tc bg-black-05">
          <button type="button" class="w-100 h-100 ba pv2 pointer" onClick={(e)=>loadStateData(e) }>
            <div class="mv1">Fri</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
        <li class="fl w-50 w-20-ns tc bg-black-05">
          <button type="button" class="w-100 h-100 ba pv2 pointer" onClick={(e)=>loadStateData(e) }>
            <div class="mv1">Sat</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
        <li class="fl w-50 w-20-ns tc bg-black-05">
          <button type="button" class="w-100 h-100 ba pv2 pointer" onClick={(e)=>loadStateData(e) }>
            <div class="mv1">Sun</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
        <li class="fl w-50 w-20-ns tc bg-black-05">
          <button type="button" class="w-100 h-100 ba pv2 pointer" onClick={(e)=>loadStateData(e) }>
            <div class="mv1">Mon</div>
            <div class="mv1">Clear</div>
            <div class="flex">
              <span class="w-50">24°</span>
              <span class="w-50 gray">17°</span>
            </div>
          </button>
        </li>
      </ol>
    </section>


      </div>
   
  );
}


