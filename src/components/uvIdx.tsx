import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurUVidx = (props: any) => {
    const [uvData, setUVdata] = useState({ list: [] });
    const fetchUVdata = async () => {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/uvi?appid=162ba9169c3bc1b980dc4a4f1120efc0&lat=37.75&lon=-122.37')
        setUVdata(response.data)
    }

    useEffect(() => {
        if (!uvData.list) {
            fetchUVdata();
        }
    })
    return (
        <div></div>
        // <div>
        //     {uvData.list.map((curUV: any) => <UV_Card curUV={curUV} />)}

        // </div>

    )
}

// class UV_Card extends React.Component<any> {
//     render() {
//         const { curUV } = this.props;

//         return (
//             <div>UV Index: {curUV.value}</div>
//         )
//     };
// }

export default CurUVidx;