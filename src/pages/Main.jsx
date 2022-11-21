import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { experimentalStyled as styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";
import StripedDataGrid from "../component/StripedDataGrid";
import Alert from '@mui/material/Alert';
import BoxName from "../component/BoxName";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const columns = [
  {
    field: "category",
    headerName: "주제",
    width: 150,
    // editable: true,
    sortable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: 'theme-header-datagrid',
  },
  {
    field: "title",
    headerName: "제목",
    width: 500,
    headerAlign: "center",
    sortable: false,
    // editable: true,
  },
  {
    field: "temperature",
    headerName: "인기도",
    sortable: false,
    headerAlign: "center",
    width: 200,
    // editable: true,
    align: "center",
    valueGetter: (params) =>
      `💖:${params.row.likes || ""}, 👀${params.row.hit || ""}`,
  },
  {
    field: "writeDate",
    headerName: "작성일",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    category: "일상",
    id: 1,
    title: "Snow",
    likes: 13,
    hit: 100,
    writeDate: 35,
  },
  {
    category: "동물",
    id: 2,
    title: "Lannister",
    likes: 5,
    hit: 100,
    writeDate: 42,
  },
  {
    category: "음악",
    id: 3,
    title: "Lannister",
    likes: 6,
    hit: 100,
    writeDate: 45,
  },
  {
    category: "일상",
    id: 4,
    title: "Stark",
    likes: 7,
    hit: 100,
    writeDate: 16,
  },
  {
    category: "취미",
    id: 5,
    title: "Targaryen",
    likes: 11,
    hit: 100,
    writeDate: null,
  },
  {
    category: "취미",
    id: 6,
    title: "Melisandre",
    likes: 23,
    hit: 100,
    writeDate: 150,
  },
  {
    category: "일상",
    id: 7,
    title: "Clifford",
    likes: 56,
    hit: 100,
    writeDate: 44,
  },
  {
    category: "직업",
    id: 8,
    title: "Frances",
    likes: 83,
    hit: 100,
    writeDate: 36,
  },
  {
    category: "음악",
    id: 9,
    title: "Roxie",
    likes: 42,
    hit: 100,
    writeDate: 65,
  },
];

const Main = () => {
  const [msg, setMsg] = React.useState('');
  const handleRowClick = (params) => {
    setMsg(`제목 "${params.row.title}", ${params.row.likes}/${params.row.hit} 클릭`);
  };
  return (
    <>
      <Container>
      {msg && <Alert severity="info">{msg}</Alert>}
        <BoxName>Hot Issue</BoxName>
        <Box sx={{ height: 265, width: "100%" }}>
          <StripedDataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: false }}
            // getRowClassName={(params) => `super-app-theme--${params.row.status}`}
            getRowClassName={(params) =>
              // params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
              "even"
            }
            onRowClick = {handleRowClick}
          />
        </Box>
      </Container>
      <br/>
      <Container>
        <BoxName>Recent</BoxName>
        <Box sx={{ height: 370, width: "100%" }}>
          <StripedDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: false }}
            // getRowClassName={(params) => `super-app-theme--${params.row.status}`}
            getRowClassName={(params) =>
              // params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
              "even"
            }
            onRowClick = {handleRowClick}
          />
        </Box>
      </Container>
    </>
  );
};

export default Main;
