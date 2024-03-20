import React, { useState, useLayoutEffect } from "react";
// import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Button from "@mui/material/Button";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { api_url } from "./../utils/base_url";

export default function BasicDemo({ className }) {
  const { i18n, t } = useTranslation();

  const [visible, setVisible] = useState(true);
  const [text, setText] = useState(``);
  useLayoutEffect(() => {
    (async () => {
      const response = await axios.get(`${api_url}/site`);
      const result = response.data;
      // console.log(result);
      const value = result?.find((item) => item.identifier == `instructions`)?.value;
      if (value) {
        setText(value);
      }
    })();
  });

  const Footer = () => {
    return (
      <Button className="p-3 text-2xl" variant="contained" onClick={() => setVisible(false)}>
        {t(`OK`)}
      </Button>
    );
  };
  return (
    <div className={"card flex justify-content-center mx-auto  " + className}>
      <Button className="p-3 text-2xl" variant="contained" onClick={() => setVisible(true)}>
        {t("Show_Instructions")}
      </Button>
      <Dialog
        footer={<Footer />}
        maximizable={true}
        header={t("Instructions")}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        className="  w-full md:w-3/5 instructionModalWidth "
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Dialog>
    </div>
  );
}
