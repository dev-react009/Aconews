import { Box, Button, Typography, Container } from "@mui/material";
import banner from "../assets/premium_photo.avif";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff", 
        textAlign: "center",
        padding: 2,
        mt:1
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#ffffff", 
          }}
        >
          Welcome to AcoNews
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 4,
            color: "#f0f0f0",
          }}
        >
          Stay updated with the latest news from around the world.
        </Typography>

        <Button
          variant="contained"
          color="primary" 
          size="large"
          sx={{
            padding: "10px 30px",
            fontSize: "18px",
            textTransform: "capitalize",
            backgroundColor: "#ff6f61", 
            "&:hover": {
              backgroundColor: "#ff3d34", 
            },
          }}
        >
          Explore News
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
