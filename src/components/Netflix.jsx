import seriesData from "../api/seriesData.json"
import { SeriesData } from "./SeriesData"

import Styles from './Netflix.module.css'

export const Netflix_Series = () => {
    const onMouseClick=(user)=>{
        alert(`hii ${user}`)
    }
    return (
        <>
            <ul className={Styles['series-list']}>
                {
                    seriesData.map((series) => {

                      return  <SeriesData key={series.id} series={series} />
                    })
                }


            </ul>
        </>
    )
}

//  "name": "Stranger Things",
//     "id": "stranger-things",
//     "img_url": "http://localhost:5173/images/st.jpg",
//     "rating": "8.7",
//     "description": "A group of young friends witness supernatural forces and secret government exploits.",
//     "cast": ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
//     "genre": ["Drama", "Fantasy", "Horror"],
//     "watch_url": "https://www.netflix.com/title/80057281"