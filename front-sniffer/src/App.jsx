import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [rows, setRows] = useState([]);
  const [load, setLoad] = useState(false);

  const getMacAddress = async () => {
    try {
      setLoad(true);
      const response = await fetch("http://localhost:3000/get-address");
      const data = await response.json();
      setRows(data.data);
    } catch (error) {
      console.log("error fetching address", error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <Container>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={1}
      >
        <Typography variant={"h4"} fontWeight={600} color={"primary"}>
          Sniffer
        </Typography>
        <Button variant="contained" size="small" onClick={getMacAddress}>
          Obtener datos
        </Button>
      </Box>
      <Divider sx={{ mb: 2 }} />
      {load && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {rows.length > 0 ? (
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: 4 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">mac_src</TableCell>
                <TableCell align="center">mac_des</TableCell>
                <TableCell align="center">ip_src</TableCell>
                <TableCell align="center">tam_src</TableCell>
                <TableCell align="center">ip_des</TableCell>
                <TableCell align="center">tam_des</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.mac_src}</TableCell>
                  <TableCell align="center">{row.mac_des}</TableCell>
                  <TableCell align="center">{row.ip_src}</TableCell>
                  <TableCell align="center">{row.tam_src}</TableCell>
                  <TableCell align="center">{row.ip_des}</TableCell>
                  <TableCell align="center">{row.tam_des}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Alert severity="info">
          Para obtener los datos da click en el botón!
        </Alert>
      )}
    </Container>
  );
}

export default App;
