import React from "react";
import { Container, Grid, Box, Stack, Typography, Pagination } from "@mui/material";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";
import {Header} from "./components/Header";
import HeroSection from "./components/HeroSection";
import useFetchNews from "./hooks/useFetchNews";

const HomePage: React.FC = () => {
  const { articles, loading, error, handleSearch, handlePageChange,noResults,page } =
    useFetchNews();

  return (
    <Box>
      <Header onSearch={handleSearch} />
      <Container>
        {loading ? (
          <Loader />
        ) : noResults ? (
          <Typography variant="h6" color="textSecondary">
            No results found. Please try a different search query.
          </Typography>
        ) : error ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"80vh"}
          >
            <Typography fontSize={15}>{error}</Typography>
          </Stack>
        ) : (
          <>
            <HeroSection />
            <Grid container spacing={3} mt={1}>
              {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="center">
              <Pagination
                count={20} 
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
