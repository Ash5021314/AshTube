import React from 'react'

const AshTube = ({title, id}) => {

  const AshSubClass = {
    border: '1px solid',
    borderRadius: '5px',
    padding: '0 15px',
    marginTop: '20px'
  }
  return (

    <div style={AshSubClass}>
      <h2>{title}</h2>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} allowFullScreen/>
    </div>
  )
}
export default AshTube