// import './Netflix.css';
import Styles from './Netflix.module.css'
import styled from 'styled-components'
const Debojit=styled.div`

    font-family:Georgia, 'Times New Roman', Times, serif;
    display:grid ;
    place-items: center;
    font-size: 20px;
    padding: 20px;
    order: 2;
  
`;

const Rating=styled.h3`
color:black;
`
export const SeriesData = (props) => {
  const ratingStyle=props.series.rating>=8.5?Styles.red:Styles.blue
    return (
    // onClick={props.onClick(props.series.name)}
  <li key={props.id} className={Styles['series-item']} >
    <img
      src={props.series.img_url}
      alt={props.series.id}
      className={Styles['series-image']}
    />
    <Debojit>
     
      <h2>Title: {props.series.name}</h2>
      <Rating>Rating: <span className={ratingStyle}>{props.series.rating}</span></Rating>
      <p>Description: {props.series.description}</p>
      <p><b>Cast by:</b> {props.series.cast.join(", ")}</p>
      <p><b>Genre:</b> {props.series.genre.join(", ")}</p>
       <a href={props.series.watch_url} target="_blank" rel="noopener noreferrer">
        <button className={Styles['watch-button']}>Watch Now</button>
      </a>   
    </Debojit>
  </li>


    )
}