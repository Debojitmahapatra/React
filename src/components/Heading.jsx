


export const Heading=(props)=>{
    return (
        <>
        <div style={{
  width: '100vw',
  height: '15rem',
  background: 'linear-gradient(0deg, rgba(124, 135, 191, 1) 0%, rgba(234, 79, 119, 1) 86%, rgba(252, 70, 107, 1) 100%)',
  color: 'aliceblue',
  display: 'grid',
  placeItems: 'center',

}}>
           <h1>{ props.id}</h1>
        </div>
        </>
    )
}