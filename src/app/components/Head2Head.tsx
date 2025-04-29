import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const HeadToHeadComparison = () => {
  const data = [
    { stat: 'Batting Average', viratKohli: 59.07, steveSmith: 60.01 },
    { stat: 'Strike Rate', viratKohli: 93.62, steveSmith: 87.28 },
    { stat: 'Centuries', viratKohli: 46, steveSmith: 29 },
    { stat: 'Fifties', viratKohli: 58, steveSmith: 31 },
    { stat: 'Highest Score', viratKohli: 254, steveSmith: 239 },
  ];

  return (
    <div className="mb-12 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Head-to-Head Comparison: India vs Australia</h2>
      <div className="flex justify-center items-center mb-8">
        <div className="text-center mr-8">
          <Image src="https://i.pinimg.com/564x/a9/3d/36/a93d36a9928a972eb5f512f58ffc0965.jpg" alt="Virat Kohli" width={100} height={100} className="rounded-full mb-2" />
          <p className="font-semibold">Virat Kohli</p>
        </div>
        <div className="text-center ml-8">
          <Image src="https://i.pinimg.com/236x/fc/0a/2f/fc0a2f0d9741e3c659e4a872a5505fd9.jpg" alt="Steve Smith" width={100} height={100} className="rounded-full mb-2" />
          <p className="font-semibold">Steve Smith</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e5e5e5" />
          <PolarAngleAxis dataKey="stat" tick={{ fill: '#333', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
          <Radar name="Virat Kohli" dataKey="viratKohli" stroke="#FF9933" fill="#FF9933" fillOpacity={0.6} />
          <Radar name="Steve Smith" dataKey="steveSmith" stroke="#00843D" fill="#00843D" fillOpacity={0.6} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Data based on ODI career statistics as of 2023</p>
      </div>
    </div>
  );
};

export default HeadToHeadComparison;