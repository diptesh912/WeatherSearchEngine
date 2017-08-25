import React, { Component } from 'react';
import { connect }  from 'react-redux';
import GoogleMap from './../components/google_map'

import Chart from './../components/chart'

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const {lon ,lat } = cityData.city.coord;
		
		return( 
             <tr key= {name}> 
                <td> <GoogleMap lon ={lon} lat={lat}/> </td>
                <td> <Chart data = {temps} color="orange" unit ="k"/>  </td>
                <td><Chart data = {pressure} color="black" unit ="hPa"/>  </td> 
                <td><Chart data = {humidity} color="green" unit ="%"/></td>                 
             </tr>
			);

	}
	render() {
		return (   <table className="table table-hover"> 
					<thead> 
						<tr><th> city </th>
							<th> Temparature (K) </th>
							<th> Pressure (hPa) </th>
							<th> Humidity (%)</th>
						</tr>
					</thead>
					<tbody> 
						{this.props.weather.map(this.renderWeather)}
					</tbody>
			      </table>
			)
	}
}


function maStateToProps({weather}) {
   return { weather}
}

export default connect(maStateToProps)(WeatherList);