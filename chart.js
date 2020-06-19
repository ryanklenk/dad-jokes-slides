import React from "react";
import { PieChart, Pie } from "recharts";
import styled from "styled-components";

const Square = styled.div`
  margin-left: 30px;
  height: 50px;
  width: 50px;
  background-color: ${(props) => (props.color ? props.color : "#006699")};
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const LegendText = styled.p`
  margin-left: 10px;
`;

const data = [{ name: "Dad", value: 100 }];

const Chart = () => (
  <>
    <Legend>
      <Square />
      <LegendText>Dad</LegendText>
      <Square color="#FFA500" />
      <LegendText>Everyone Else</LegendText>
    </Legend>
    <PieChart width={600} height={400} data={data}>
      <Pie dataKey="value" data={data} fill="#006699" label />
    </PieChart>
  </>
);

export default Chart;
