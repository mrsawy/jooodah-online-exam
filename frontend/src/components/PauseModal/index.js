import React from "react";
import { useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import Button from "@mui/material/Button";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Countdown from "../Countdown";

function PauseModal({ className }) {
  const { i18n, t } = useTranslation();
  const { pauseTime } = useSelector((s) => s.exam);
  let pauseValue = +pauseTime?.value;
  console.log(pauseValue);
  return (
    <div className={"card flex justify-content-center mx-auto  " + className}>
      <Dialog
        // footer={<Footer />}
        maximizable={true}
        header={t("Pause timer")}
        visible={true}
        //   style={{ width: "50vw" }}
        //   onHide={() => setVisible(false)}
        className="  w-full md:w-3/5 instructionModalWidth "
      >
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        {/* {content} */}
        <div className="flex justify-center items-center">
          <Countdown pause={true} countdownTime={pauseValue} />
        </div>
      </Dialog>
    </div>
  );
}

export default PauseModal;
