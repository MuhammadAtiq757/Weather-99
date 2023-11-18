import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast?q=agra&appid=78a74c40eeb0ea64b0851347f1d6b197'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setForecastData(data.list.slice(0, 5)); // Slice to get only the first 5 items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='grid md:grid-cols-6 gap-2 mt-12 py-12 items-center justify-center'>
   
<div className='mt-8 '>
  <div className="card w-[180px] h-[320px] bg-base-100 border-none">
  <div className="card-body border-none">
   <p>Select Date 
    <input type="date" />
   </p>
   <p>High Temperature</p>
   <p className='mt-2'>Low Temperature</p>
   <p className='mt-1'>Humidity</p>
   <p className='mt-1'>Sunrise Time</p>
   <p className='pb-4'>Sunset Time</p>
   
  </div>
</div>
</div>

      {forecastData.map((dataPoint, index) => (
       <div key={index}>
        
        <p className='mb-2 text-xl font-serif'>{dataPoint.dt_txt}</p>
         <div className="card w-[170px] bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <div className='flex border-b-2 w-full border-indigo-500'>
            <img className='w-14' src="https://i.ibb.co/MBrFS01/Untitled-4-removebg-preview.png" alt="" />
          <h2 className="card-title px-2 w-full text-center" >Sunny</h2>

          </div>
          
       <div>
        <p className='mt-8'>{dataPoint.main.temp_max}</p>
        <p className='mt-4'>{dataPoint.main.temp_min}</p>
        <p className='mt-4'>{dataPoint.main.humidity}%</p>
        <p className='mt-4'>{(dataPoint.main.sea_level/60).toFixed(2)} Am</p>
<p className='mt-4'>{(dataPoint.main.grnd_level/60).toFixed(2)} PM</p>

       </div>
         
        </div>
      </div>
       </div>
      ))}
   
  </div>
  );
};

export default WeatherForecast;
