import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from 'recharts';

const playerData = [
  { name: 'Virat Kohli', runs: 1979, average: 48.26, hundreds: 8 },
  { name: 'Steve Smith', runs: 1994, average: 72.58, hundreds: 8 },
  { name: 'Cheteshwar Pujara', runs: 1893, average: 48.53, hundreds: 5 },
  { name: 'Rohit Sharma', runs: 679, average: 56.58, hundreds: 1 },
];

const matchWinners = [
  { name: 'Virat Kohli', wins: 3 },
  { name: 'Steve Smith', wins: 5 },
  { name: 'Cheteshwar Pujara', wins: 3 },
  { name: 'Rohit Sharma', wins: 2 },
  { name: 'Others', wins: 7 },
];

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: number, label: string }) => {
  if (active && payload && payload.length ) {
    return (
      <div className="custom-tooltip bg-white p-4 rounded shadow-lg border border-gray-200">
        <p className="label font-semibold">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const IndiaAustraliaTestStats = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
          India vs Australia Test Cricket: Player Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Batting Performance</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={playerData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fill: '#4a5568' }} />
                <YAxis yAxisId="left" orientation="left" stroke="#FF6B6B" tick={{ fill: '#4a5568' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#4ECDC4" tick={{ fill: '#4a5568' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar yAxisId="left" dataKey="runs" fill="#FF6B6B" name="Total Runs" radius={[5, 5, 0, 0]} />
                <Bar yAxisId="right" dataKey="average" fill="#4ECDC4" name="Average" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Match-Winning Contributions</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={matchWinners}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="wins"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {matchWinners.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Insights</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Steve Smith boasts the highest average (72.58) against India in Tests, underlining his dominance in this rivalry.</li>
            <li>Virat Kohli leads in total runs (1979) in India-Australia Test matches among these players, closely trailed by Smith (1994).</li>
            <li>Both Virat Kohli and Steve Smith have notched up 8 centuries each in this matchup, setting the benchmark among featured players.</li>
            <li>Despite fewer appearances, Rohit Sharma maintains an impressive average of 56.58 against Australia in Tests.</li>
            <li>Steve Smith has been pivotal in the most match-winning performances (5) among these players in India-Australia Tests.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndiaAustraliaTestStats;