// import mui module
import styled from '@emotion/styled';

export const DashboardPageStyle = styled('div')(({ theme }: any) => {
  return {
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