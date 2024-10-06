import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

function Leetcode() {
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  useEffect(() => {
    let date = new Date();
    setStartDate(new Date(date.getUTCFullYear()-1 + '-' + (date.getUTCMonth()+1)+'-'+date.getUTCDate()));
    setEndDate(date);
    fetch('https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=vsk22vsk&year='+date.getFullYear())
    .then((response) => response.json())
    .then((data) => {
      let submissions = JSON.parse(data?.data?.matchedUser?.userCalendar?.submissionCalendar);
      let transformedData = [];
      for (const key in submissions) {
        let datee = new Date(key*1000);
        transformedData.push({
          date: datee.getUTCFullYear() + '-' + (datee.getUTCMonth()+1).toString().padStart(2,'0')+'-'+datee.getUTCDate().toString().padStart(2,'0'),
          count: submissions[key]
        })
      }
      setLeetcodeData(transformedData);
      console.log(transformedData);
    });
  },[]);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* <GitHubCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
      <ReactCalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={leetcodeData}
        showWeekdayLabels={false}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date} has count: ${
              value.count
            }`,
          };
        }}
      />
      <ReactTooltip />
    </Row>
  );
}

export default Leetcode;
