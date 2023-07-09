import React from 'react';
import './Award.css';

const Award = () => {
    return (
        <div className='award__container d-flex align-items-center flex-wrap
        justify-content-between'>
            <div className="award__item">
                <AwardItem
                 year='2021'
                 title='Best Front-End Developer'
                 text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa dolorum facilis. '
                 />
            </div> 
            <div className="award__item">
                <AwardItem
                 year='2021'
                 title='Best Front-End Developer'
                 text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa dolorum facilis. '
                 />
            </div> 
            <div className="award__item">
                <AwardItem
                 year='2021'
                 title='Best Front-End Developer'
                 text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa dolorum facilis. '
                 />
            </div> 
            <div className="award__item">
                <AwardItem
                 year='2021'
                 title='Best Front-End Developer'
                 text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa dolorum facilis. '
                 />
            </div>    
        </div>
    );
};

const AwardItem = ({year, title, text}) => {
 return <div className="single__award">
    <div className="award__year">{year}</div>
    <h6 className="award__title">
        {title} - {''}
        <span>{text}</span>
    </h6>
  </div> 
}
export default Award;