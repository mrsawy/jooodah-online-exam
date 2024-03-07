import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, Popup } from "semantic-ui-react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

import { timeConverter } from "../../utils";

//

// const stopTime = () => {};

//

const Countdown = ({ countdownTime, timeOver, setTimeTaken, pause }) => {

  const { i18n, t } = useTranslation();

  let { numberOfPausesLeft, examIsPaused } = useSelector((s) => s?.exam);
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(examIsPaused);
      if (!examIsPaused || pause) {
        const newTime = timerTime - 1000;
        if (newTime >= 0) {
          setTimerTime(newTime);
        } else {
          clearInterval(timer);
          if (!pause) {
            Swal.fire({
              icon: "info",
              title: t(`Oops! Time's up.`),
              text: t("Hope You did well ."),
              confirmButtonText: t("OK"),
              timer: 5000,
              willClose: () => timeOver(totalTime - timerTime),
            });
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      if (setTimeTaken) {
        setTimeTaken(totalTime - timerTime + 1000);
      }
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <Button.Group size="big" basic floated="right">
      <Popup content="Hours" trigger={<Button active>{hours}</Button>} position="bottom left" />
      <Popup content="Minutes" trigger={<Button active>{minutes}</Button>} position="bottom left" />
      <Popup content="Seconds" trigger={<Button active>{seconds}</Button>} position="bottom left" />
    </Button.Group>
  );
};

export default Countdown;
