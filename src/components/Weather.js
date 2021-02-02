import React ,{useEffect, useState} from "react";
import axios from 'axios';
import { format, formatDistance, formatRelative, subDays,toDate } from 'date-fns';
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
export default function Weather(){

    const classes = useStyles();

    const initialWeather = {
        current:{},
        daily:[]
    }
 
   const [weatherData,setWeatherData] = useState(initialWeather);

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?appid=1a2e16938d4b79024deb982b1a47ef40&lat=-33.869629&lon=151.206955&exclude=minutely,hourly&units=metric`)
            .then(response =>
                    setWeatherData(response.data)
            ).catch(
                error =>
                    console.log(error.response.data)
                );
    }, []);

    return(
        <div style={ { padding:20}}>
            {/*<p>{JSON.stringify(weatherData)}</p>*/}
            <div className="header" style={{backgroundColor:'lightblue'}}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={3} lg={3}>
                    <Typography gutterBottom variant="subtitle1">
                        <strong>lat: </strong>{weatherData.lat}
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <strong>lon: </strong>{weatherData.lon}
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <strong>timezone: </strong>{weatherData.timezone}
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <p>current: </p><p>{toDate(weatherData.current.dt*1000).toString()}</p>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <p>humidinty: </p><p>{weatherData.current.humidity}</p>
                </Grid>
           </Grid>
           </div>
            <Divider />
            <GridList cellHeight={260} className={classes.gridList} cols={3}>
            {weatherData.daily.map(item =>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                            Date Time: {toDate(item.dt*1000).toDateString()}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            pressure: {item.pressure}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                        humidity: {item.humidity}
                    </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            rain: {item.rain}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        More detail
                    </Button>
                </CardActions>
            </Card>)}
            </GridList>
        </div>
);
  
/*
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
   
  );*/
}


