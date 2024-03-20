import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Menu, Item } from "semantic-ui-react";
import thnxImg from "../../images/8177656.jpg";

import Stats from "./Stats";
import QNA from "./QNA";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Stats");

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container>
      <div className=" h-screen flex justify-center items-center">
        <img className="  h-4/6  object-contain " src={thnxImg} />
      </div>
      {/* <Item.Image className="  max-h-full   " src={thnxImg} /> */}
      {/* <h1>test</h1> */}

      {/* <Menu fluid widths={2}>
        <Menu.Item
          name="Stats"
          active={activeTab === 'Stats'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="QNA"
          active={activeTab === 'QNA'}
          onClick={handleTabClick}
        />
      </Menu> */}
    </Container>
  );
};

// Result.propTypes = {
//   totalQuestions: PropTypes.number.isRequired,
//   correctAnswers: PropTypes.number.isRequired,
//   timeTaken: PropTypes.number.isRequired,
//   questionsAndAnswers: PropTypes.array.isRequired,
// };

export default Result;
