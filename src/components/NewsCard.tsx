import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActionArea,
  Button,
} from "@mui/material";
import { Article } from "../types/newsTypes";

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const fallbackImage = "https://via.placeholder.com/300?text=No+Image";

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.02)",
          },
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          maxWidth: "360px", 
          margin: "auto", 
          border: "1px solid #ddd", 
        }}
      >
        <CardActionArea
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <CardMedia
            component="img"
            height="180" 
            image={article.image || fallbackImage}
            alt={article.title}
            sx={{
              objectFit: "cover",
              width: "100%",
              borderBottom: "1px solid #ddd",
              maxWidth: "100%", 
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: "16px",
              overflow: "hidden",
              boxSizing: "border-box", 
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal", 
                mb: 1,
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.2rem",
                },
              }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1, 
                WebkitBoxOrient: "vertical",
                mb: 1,
                fontSize: {
                  xs: "0.875rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
                whiteSpace: "normal", 
              }}
            >
              {article.description
                ? `${article.description.substring(0, 150)}...`
                : "No description available."}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ mb: 2, fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
            >
              Published: {new Date(article.publishedAt).toLocaleDateString()}
            </Typography>
            
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default NewsCard;
