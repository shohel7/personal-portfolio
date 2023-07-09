import React from 'react';
import './Skills.css';

const frontendSkills = [
    {
        title: 'JavaScript',
        percentage: '85%'
    },
    {
        title: 'React.js',
        percentage: '90%'
    },
    {
        title: 'Redux',
        percentage: '80%'
    },
    {
        title: 'Next.js',
        percentage: '95%'
    },
]

const backendSkills = [
    {
        title: 'Node.js',
        percentage: '85%'
    },
    {
        title: 'Express.js',
        percentage: '80%'
    },
    {
        title: 'MongoDB',
        percentage: '70%'
    },
    {
        title: 'Socket.io',
        percentage: '60%'
    },
]


const Skills = () => {
    return (
        <div className='skills__wrapper d-flex gap-5'>
            <div className="frontend__skills w-50">
                {
                    frontendSkills.map((item, index) => (
                      <SkillItem title={item.title} percentage={item.percentage} key={index} />
                    ))
                        
                }
            </div>

            <div className="backend__skills w-50">
                {
                    backendSkills.map((item, index) => (
                        <SkillItem title={item.title} percentage={item.percentage} key={index} />
                      ))
                }
            </div>  
        </div>
    );
};

const SkillItem = ({title, percentage}) =>{
   return <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
                 <span>{percentage}</span>
        </div>

         <div className="skill__bar">
             <span className='skill__bar-percentage'
                style={{width: `${percentage}`}}></span>
        </div>
    </div>
};

export default Skills;