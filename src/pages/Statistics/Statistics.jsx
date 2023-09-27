import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    // const data = [
    //     { name: 'Group A', value: 500 },
    //     { name: 'Group B', value: 200 },
    //     { name: 'Group C', value: 600 },
    //     { name: 'Group D', value: 200 },
    //   ];
    // const data1 = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //   ];



    return (
        <div>
            <h2>This is pie chart page</h2>
            {/* <div>
                <PieChart width={730} height={250}>
                <Pie data={data02}dataKey="value" nameKey="name"    fill="red"  />
                   <Pie data={data01} dataKey="value" nameKey="name"   fill="yellow" />
                   
                </PieChart>
            </div> */}

{/* <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#e84118"  />
            <Pie dataKey="value" data={data1} fill="#8884d8"  />
          </PieChart>
        </ResponsiveContainer>
      </div> */}
        </div>
    );
};

export default Statistics;