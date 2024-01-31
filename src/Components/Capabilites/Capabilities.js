import React from 'react';
import './Capabilities.scss';

const Capabilities = () => {
  return (
    <div className='capabilities'>
        <h3>Skills & Capabilities</h3>
        <div className='wrapper'> 
          <div className='card'>
            <img src="/html.png" alt="" />
            <h2>HTML</h2>
          </div>
          <div className='card'>
            <img src="/css.png" alt="" />
            <h2>CSS</h2>
          </div>
          <div className='card'>
            <img src="/javascript.png" alt="" />
            <h2>Javascript</h2>
          </div>
          <div className='card'>
            <img src="/react-logo.png" alt="" />
            <h2>React JS</h2>
          </div>
          <div className='card'>
            <img src="/node.png" alt="" />
            <h2>NodeJs</h2>
          </div>
          <div className='card'>
            <img src="/mongo.png" alt="" />
            <h2>Mongo DB</h2>
          </div>
          <div className='card'>
            <img src="/aws.png" alt="" />
            <h2>aws</h2>
          </div>
          <div className='card'>
            <img src="/shopify.png" alt="" />
            <h2>Shopify</h2>
          </div>
          <div className='card'>
            <img src="/wordpress.png" alt="" />
            <h2>Wordpress</h2>
          </div>
        </div>
        
        
    </div>
  )
}

export default Capabilities

