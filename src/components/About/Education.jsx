import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Institution</th>
                    <th>Year</th>
                </tr>
            </thead> 

            <tbody>
                <tr>
                    <td>B.Sc</td>
                    <td>Software Engineering</td>
                    <td>Daffodil International University</td>
                    <td>2015 - 2019</td>
                </tr>
                <tr>
                    <td>HSC</td>
                    <td>Science</td>
                    <td>Police Line High School and College</td>
                    <td>2011 - 2013</td>
                </tr>
                <tr>
                    <td>Dakhil</td>
                    <td>Science</td>
                    <td>Chhoighat Darul Ulum Sa. Dakhil Madrasah </td>
                    <td>2010 - 2011</td>
                </tr>
            </tbody>         
        </table>
    );
};

export default Education;