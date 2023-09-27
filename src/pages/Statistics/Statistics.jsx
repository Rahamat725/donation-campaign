import React, { PureComponent, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  PieChart, Pie, Sector, Cell,Legend  } from 'recharts';
import { getStoredDonationData, saveDonationDataTolocalStorage } from '../../utility/localstorage';


const Statistics = () => {
const [donatedData, setDonated] = useState([]);

  const totalData = useLoaderData();


  useEffect(()=>{
    const donated = getStoredDonationData();
    setDonated(donated)
  },[])

// _redirects
//  /index.html 200
  
  const data = [
    { name: 'Your Donation', value: donatedData.length },
    { name: 'Total Donation', value: totalData.length },

    
  ];
  const COLORS = ['#FF8042','#00C49F',  '#FFBB28', '#0088FE'];
 
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


    return (
        <div>
           
    
            <div width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
          
        </div>
    );
};

export default Statistics;