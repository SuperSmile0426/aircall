// import mui module
import styled from '@emotion/styled';

export const ActivityPageStyle = styled('div')(({ theme }: any) => {
  return {
    height: "80vh",
    maxHeight: "80vh",
    background: "white",
    padding: "30px 20px",
    boxSizing: "border-box",
    borderRadius: "10px",
    overflowY: "auto",

    ".header-container": {
      display: "flex",
      gap: "2rem",
      alignItems: "center",

      ".header-title": {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "24px",
        fontWeight: "700",
        color: "#1976d2"
      },

      ".tab-contaner": {

        ".tab-item": {
          textTransform: "none",
        }
      }
    }
  };
});