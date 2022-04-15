import React, { useState, useEffect } from 'react'
import { MaticFeed } from './MaticFeed'

import MaticImage from '../img/polygon-logo.png'

function DataFeedMatic() {
    const [value, setValue] = useState(null);
  
    useEffect(() => {
        MaticFeed().then(price => setValue(price));
    }, [value]);

    return (
      <div>
        <h1 className='feed-text'> {value && <p><img className='gauImage' height='30' src={MaticImage} alt='Gau logo'></img> MATIC/USD = ${(1 * value).toFixed(6)}</p>} </h1>     
      </div>
    );
    
  }


export default DataFeedMatic;