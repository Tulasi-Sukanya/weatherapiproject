import React from "react";


const Weather = (props) =>  {
        return (
            <div className="info ">
                <div className="flex">

                    { props.city && 
                    <h4 className="city">
                        <img className="loc" src="https://programmerraja.github.io/weatherapp/static/media/map-pointer.88e10ef0.png" alt="b"></img>  {props.city} | {props.country} <hr></hr>
                    </h4>
                    } 

                    { props.Temperature && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/temp.svg" alt="c"></img>
                        <span className="info_value">{`${Math.floor(props?.Temperature )}°C`} <span>Temperature</span> </span>
                    </p>
                    }

                    { props.humidity && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/humidity.svg" alt="d"></img>
                        <span className="info_value"> {props.humidity }% <span>Humidity</span> </span>
                    </p>
                    }

                     { props.Wind && 
                    <p className="info_key">
                        <img className="img2" src="https://www.svgrepo.com/download/246805/wind-engine-wind-turbine.svg"  style={{height:"33px",width:"38px"}}alt="d"></img>
                        <span className="info_value"> {props.Wind }% <span>Wind</span> </span>
                    </p>
                    }

                    { props.description && 
                    <p className="info_key">
                        <img className="img2" src="https://ayushkul.github.io/react-weather-app/icons/cloudy-night.svg" alt="e"></img>
                        <span className="info_value"> {props.description} <span>Description</span> </span>
                    </p>
                    }

                    {/* { props.Timezone && 
                    <p className="info_key">
                        <img className="img2" src="https://freesvg.org/img/primary-timezone.png" style={{height:"25px",width:"25px"}} alt="d"></img>
                        <span className="info_value"> {props.Timezone }% <span>Timezone</span> </span>
                    </p>
                    } */}

                    { props.error && <p className="error"> {props.error}</p> }

                    
                </div>  
            </div>
        );
}

export default Weather;