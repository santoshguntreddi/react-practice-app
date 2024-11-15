import "./App.css";
import Products from "./pages/products/index";
import Header from "./components/header";
import Routing from "./Routing";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Box
        component="main"
        className="css-1v88j2p"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: 2,
          position: "relative",
          top: 70,
        }}
      >
        <Routing />
      </Box>
    </>
  );
}

export default App;
