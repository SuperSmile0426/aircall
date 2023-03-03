// import mui module
import { styled } from "@mui/material";

export const FeedComponentStyle = styled("div")(({ theme }: any) => {
  return {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    gap: "10px"
  };
});
