import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import Button from "@mui/material/Button";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Countdown from "../Countdown";

function PauseModal({ className, visible, timeOver }) {
  const [vis, setVisible] = useState(visible);
  const { i18n, t } = useTranslation();
  const { pauseTime, examIsPaused } = useSelector((s) => s.exam);
  let pauseValue = +pauseTime?.value * 60;
  console.log(`pauseValue`, pauseValue);
  setTimeout(() => {
    setVisible(false);
  }, +pauseValue * 1000);
  console.log(pauseValue);
  return (
    <div className={"card flex justify-content-center mx-auto  " + className}>
      <Dialog
        // footer={<Footer />}
        maximizable={true}
        header={t("Pause timer")}
        visible={vis}
        //   style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        className="  w-full md:w-3/5 instructionModalWidth "
      >

        <div className="flex justify-center items-center">
          <Countdown timeOver={timeOver} pause={true} countdownTime={pauseValue} />
        </div>
      </Dialog>
    </div>
  );
}

export default PauseModal;
