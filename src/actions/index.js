import axios from 'axios'

const API_KEY = '1cdf0aa8d84e21aaac243b0bff73b0f6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
  console.log('city', city , url)
	const request = axios.get(url);
	console.log('request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}