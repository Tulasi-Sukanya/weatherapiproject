import React, {Component} from "react";
import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";

const API_KEY = "50883ea96de0d5a374b6bd4583d75116";

class App extends Component {
  state = {
    Temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    // https://api.openweathermap.org/data/2.5/weather?q=Nellore&appid=50883ea96de0d5a374b6bd4583d75116&units=metric%22
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    console.log(api);
    const data = await  api.json();
    if (city) {
      this.setState({
        Temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        Wind:data.wind.speed,
        description: data.weather[0].description,
        // Timezone:data.timezone,
        error: ''
      })
    } else{
      this.setState({
        Temperature: '',
        city: '',
        country: '',
        humidity: '',
        Wind:'',
        description: '',
        // Timezone:'',
        error: 'Please Enter the City ...! '
      })
    }
  }

  render() { 
  return (
    <div className="wrapper">
      <div className="form-container" >
          <div className="head">
              <h2>React <span className="color">Weather</span> App</h2>
              <img className="cloud" src="https://ayushkul.github.io/react-weather-app/icons/perfect-day.svg" alt="a"></img>
              <br></br>
          </div>

          <Form getWeather={this.getWeather}/>

          <Weather 
          Temperature= {this.state.Temperature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          Wind={this.state.Wind}
          description= {this.state.description}
          // Timezone={this.state.Timezone}
          error= {this.state.error}
          />
        
      </div>
    </div>
  );
  }
}

export default App;