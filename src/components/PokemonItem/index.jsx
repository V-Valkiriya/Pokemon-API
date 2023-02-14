import React, {useEffect} from 'react'

function PokemonItem({result, error}) {

    useEffect(() => {
        console.log(result)
    }, []);



  return (
      <div className='card'>
          {error ? (
              <div className='error-wrapper'>
                  <p>There is no pokemon by provided name</p>
              </div>
          ) : (
              <div className='card'>
                  <h1>Pokemon</h1>
                  <img src={result.image} alt='pokemon' />
                  <h3>{}</h3>
              </div>
          )
          }
      </div>
  )
}

export default PokemonItem;