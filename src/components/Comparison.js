import React from 'react';
import './Comparison.css';

function Comparison(props) {
  return (
    <>
        <div className='comparisonContainer'>
            <div className='beforeDiv'>
                <img 
                    className='beforePic'
                    src={props.srcBefore}
                />
                <p>Pred</p>
            </div>

            <div className='afterDiv'>
                <img 
                    className="afterPic"
                    src={props.srcAfter}
                />
                <p>Po</p>
            </div>
        </div>
    </>
  );
}

export default Comparison;