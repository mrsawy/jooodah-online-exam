import { useState } from "react";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Label from "./../../components/label";
import Iconify from "./../../components/iconify";
import { useDispatch } from "react-redux";
import { deleteUser } from "./../../store/user/userSlice";

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  name,
  email,
  phone,
  date,
  result,
  grade,
  exam,
  id,
  handleClick,
  age,
  experience,
  education,
}) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell> */}
        {/* 
        <TableCell className="  pl-5" component="th" scope="row" padding="none" align="center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap sx={{ textAlign: `center`, margin: `auto` }}>
              {name}
            </Typography>
          </Stack>
        </TableCell> */}
        <TableCell align="center">{name}</TableCell>

        <TableCell align="center">{email}</TableCell>

        <TableCell align="center">{phone}</TableCell>

        <TableCell align="center">{age}</TableCell>
        <TableCell align="center">{education}</TableCell>
        <TableCell align="center">{experience}</TableCell>
        {/* <TableCell align="center" className="text-center m-auto"> */}
          {/* {exam} */}
        {/* </TableCell> */}
        {/* <TableCell align="center">{date}</TableCell> */}
        <TableCell align="center">
          <BasicModal result={result} grade={grade} date={date} />
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          <button
            className="w-full flex items-center   leading-7"
            onClick={() => {
              console.log(`delete clicked`, id);
              dispatch(deleteUser(id));
            }}
          >
            <>
              <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
              Delete
            </>
          </button>
        </MenuItem>
      </Popover>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ result, grade, date }) {
  // console.log(`result==>`, result);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Result
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {result?.levelName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Grade : {(+grade).toFixed(2)} / 100
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Time taken : {timeFormat((result?.timeTaken / 1000).toFixed(0), result?.fullTime)}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Date : {date}
          </Typography>

          <Typography
            id="modal-modal-description"
            className="     text-sm   "
            sx={{ mt: 2 }}
          ></Typography>
        </Box>
      </Modal>
    </div>
  );
}

function timeFormat(s, full) {
  var seconds = +s;
  let fullTime = +full;

  if ((typeof seconds !== "number" || seconds < 0) && typeof fullTime !== "number") {
    return "Invalid input";
  }
  if (
    (typeof seconds !== "number" || seconds < 0 || isNaN(seconds)) &&
    typeof fullTime == "number"
  ) {
    seconds = fullTime;
    console.log(seconds, fullTime);
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${hours}h ${minutes}m ${remainingSeconds}s`;
  return formattedTime;
}
