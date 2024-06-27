import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit'; // cold icon
import WaterDropIcon from '@mui/icons-material/WaterDrop'; // rainy icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // hot sunny icon


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAINY_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
 
  const COLD_ICON = "";
  const HOT_ICON = "";
  const RAINY_ICON = "";

    return (
        <div className="InfoBox">
           
            
            <div className="Card-Container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                        ? RAINY_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}  {
                        info.humidity > 80
                        ? < WaterDropIcon />
                        : info.temp > 15
                        ? < WbSunnyIcon />
                        : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather} </i>  feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    )
}