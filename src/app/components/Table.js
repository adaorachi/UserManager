import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  tableCellClasses,
  styled,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
  },
}));

const useStyles = makeStyles({
  tableContainer: {
    border: '1px solid #eee',
  },
});

export default function AppTable({ tableRowData, tableHeader }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer classes={{ root: classes.tableContainer }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeader &&
                tableHeader?.map((h) => (
                  <StyledTableCell key={h}>{h}</StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowData && tableRowData?.length ? (
              tableRowData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((data, ind) => (
                  <TableRow key={ind}>
                    {data.map((d, index) => (
                      <TableCell key={index}>{d}</TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={tableHeader?.length}>
                  No data to display
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 20, 50, 100]}
        component="div"
        count={tableRowData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
