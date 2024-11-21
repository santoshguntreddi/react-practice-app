import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 8,
        textAlign: "center",
        height: "75vh",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="h5" gutterBottom>
        This page helps to load dummy data of different categories.
      </Typography>
      <Button
        data-testid="products-link"
        variant="contained"
        size="large"
        color="secondary"
        sx={{ mt: 3 }}
        component={Link}
        to={"/products"}
      >
        Go to Products
      </Button>
    </Box>
  );
}
