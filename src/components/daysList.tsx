import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const DaysList = (props: any) => {
    const [weatherData, setWeatherData] = useState({ list: [] });
    const fetchWeatherData = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=55415,us&APPID=8641577af71bc7f2ebbfe46e71963576&units=imperial')
        setWeatherData(response.data)
    }

    useEffect(() => {
        if (!weatherData.list.length) {
            fetchWeatherData();
        }
    })

    const filterWeather = (arr: any, nth: number) => arr.filter((e: any, i: any) => i % nth === nth - 1 || i === 0);

    return (
        <div>{filterWeather(weatherData.list, 8).map((curDay: any) => <DayCard curDay={curDay} />)}</div>
    )
}

class DayCard extends React.Component<any> {
    render() {
        const { curDay } = this.props;

        return (

            <div className='SingleDay'>
                <div>{moment(curDay.dt_txt).format('MMMM Do YYYY')}</div>
                <div>High: {curDay.main.temp_max}</div>
                <div>Low: {curDay.main.temp_min}</div>
            </div>

        )
    };
}
export default DaysList;