import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";

const pages = [
  { title: "Products", path: "/products" },
  { title: "Users", path: "/users" },
  { title: "Weather", path: "/weather" },
];

export default function Header() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            color="inherit"
            component={Link}
            noWrap
            to="/"
            variant="h6"
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            React App
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
                to={page.path}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
