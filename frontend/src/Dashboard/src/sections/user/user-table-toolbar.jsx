import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { useSelector } from "react-redux";
import { formatTimeCreatedAt, timeTakenFormat } from "../../utils/format-time";
import exportExcel from "../../utils/exportExcel";

// ----------------------------------------------------------------------

export default function UserTableToolbar({ numSelected, filterName, onFilterName }) {
  const { users } = useSelector((s) => s.user);

  const downLoadUsers = () => {
    exportExcel(
      users.map((user) => {
        return {
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
          date: formatTimeCreatedAt(user?.createdAt),
          exam: user?.result?.levelName,
          grade: `${((+user.result.correctAnswers * 100) / user.result.totalQuestions).toFixed(2)}/100`,
          timeTaken: timeTakenFormat(user.result.timeTaken , user?.result?.fullTime),
          correctAnswers: user.result.correctAnswers,
          totalQuestions: user.result.totalQuestions,
        };
        // grade:
      })
    );
    // console.log(

    // );
  };
  return (
    <Toolbar
      sx={{
        height: 96,
        display: "flex",
        justifyContent: "space-between",
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: "primary.main",
          bgcolor: "primary.lighter",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>{/* <Iconify icon="eva:trash-2-fill" /> */}</IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>{/* <Iconify icon="ic:round-filter-list" /> */}</IconButton>
        </Tooltip>
      )}
      <Button onClick={downLoadUsers} variant="contained" startIcon={<DownloadIcon />}>
        Download
      </Button>
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
