 const Heading = ( {title, headingType}) => 
{

    let createHeading = headingType === 'h1' ?  <h1> {title} </h1> :
                        headingType === 'h2' ?  <h2> {title} </h2> : 
                        headingType === 'h3' ?  <h3> {title} </h3> :
                                                <h4> {title} </h4>
    

    return (

      <div className="title-container">

            {createHeading}

      </div>  
      
    )

}

Heading.defaultProps = 
{ 
  headingType: 'h1',
  title: 'Agenda de contactos'
}

export { Heading };