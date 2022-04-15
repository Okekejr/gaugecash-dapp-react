import React, { useState, useEffect } from 'react'
import { GauFeed } from './GauFeed'

import GauImage from '../img/gaugecash_logo.png'

function DataFeedGau() {
    const [value, setValue] = useState(null);
  
    useEffect(() => {
      GauFeed().then(price => setValue(price));
    }, [value]);

    return (
      <div>
        <h1 className='feed-text'> {value && <p className='feed-text'><img className='gauImage' height='30' src={GauImage} alt='Gau logo'></img> GAU/USD = ${(1 * value).toFixed(6)}</p>} </h1>
      </div>
    );
    
  }


export default DataFeedGau;