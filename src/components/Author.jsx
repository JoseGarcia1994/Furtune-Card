

function Author({phrase}) {

    return (
      <div className="fortune__container">
        <h1 className="fortune__author">
            Fuente: {phrase.author}
        </h1>
      </div>
      
    )
  }
  
  export default Author