// import mui module
import { styled } from "@mui/material";

export const ActivityComponentStyle = styled("div")(({ theme }: any) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid",
    borderRadius: "10px",
    borderColor: "grey",
    padding: "10px 20px",
    cursor: "pointer",
    ":hover": {
      background: "#EEEEEE",
    },
    ":active": {
      background: "#DDDDDD",
    },

    ".activity-container": {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },

    ".activity-footer": {
      ".archieve-text": {
        fontSize: "14px",

        cursor: "pointer",
        ":hover": {
          background: "#EEEEEE",
          fontWeight: "700"
        },
        ":active": {
          background: "#DDDDDD",
          color: "red"
        },

      }
    }
  };
});
