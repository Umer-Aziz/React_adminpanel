import "./charts.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  

const Charts = ({ title, data, dataKey, grid }) => {
    
    return (
        <div className="charts">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart  data={data}>
          <XAxis dataKey="name" stroke="orange" />
          <Line type="monotone" dataKey={dataKey} stroke="orange" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#757272" strokeDasharray="5 5" /> }
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}

export default Charts
