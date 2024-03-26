import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { users } from "./../../../_mock/user";

import Iconify from "./../../../components/iconify";
import Scrollbar from "./../../..//components/scrollbar";

import TableNoData from "./../table-no-data";
import UserTableRow from "./../user-table-row";
import UserTableHead from "./../user-table-head";
import TableEmptyRows from "./../table-empty-rows";
import UserTableToolbar from "./../user-table-toolbar";
import { emptyRows, applyFilter, getComparator } from "./../utils";
import Spinner from "../../../../../components/Spinner";

// ----------------------------------------------------------------------

const timeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Riyadh",
};
const convertIntoDate = (dateString) => {
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString("en-US", timeOptions);
};
export default function UserPage() {
  let { users: usersRedux, isLoading } = useSelector((state) => state.user);

  let formattedUsers = Array.isArray(usersRedux)
    ? usersRedux.map((user) => ({
        ...user,
        id: user?._id,
        grade: (user?.result?.correctAnswers / user?.result?.totalQuestions) * 100,
        exam: user?.result?.levelName,
        date: convertIntoDate(user[`createdAt`]),
        status:
          user?.result?.correctAnswers / user?.result?.totalQuestions > 0.5 ? `Passed` : `Failed`,
      }))
    : [];
  // console.log(`formattedUsers`, formattedUsers);

  //
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: formattedUsers,
    comparator: getComparator(order, orderBy),
    filterName,
  });
  // console.log(`dataFiltered`, dataFiltered);

  const notFound = !dataFiltered.length && !!filterName;

  return isLoading ? (
    <Spinner className="h-full" />
  ) : (
    <Container>
      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: "name", label: "Name" },
                  { id: "email", label: "Email" },
                  { id: "phone", label: "Phone" },
                  { id: "Age", label: "Age" },
                  { id: "Education", label: "Education" },
                  { id: "Experience", label: "Experience" },
                  { id: "result", label: "Result" },
                  // { id: "status", label: "Status" },
                  { id: "" },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    {/* console.log(row); */}
                    return (
                      <UserTableRow
                        key={row.id}
                        id={row?.id}
                        name={row.name}
                        email={row.email}
                        phone={row.phone}
                        grade={row.grade}
                        exam={row.exam}
                        age={row.age}
                        education={row.education}
                        experience={row.experience}
                        date={row.date}
                        result={row.result}
                        status={row.status}
                        selected={selected.indexOf(row.name) !== -1}
                        handleClick={(event) => handleClick(event, row.name)}
                      />
                    );
                  })}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={dataFiltered.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25, 50, 100, 200]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
