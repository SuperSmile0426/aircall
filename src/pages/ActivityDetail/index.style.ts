// import mui module
import styled from '@emotion/styled';

export const ActivityDetailPageStyle = styled('div')(({ theme }: any) => {
  return {
    width: "20vw",
    height: "80vh",
    maxHeight: "80vh",
    background: "white",
    padding: "30px 20px",
    boxSizing: "border-box",
    borderRadius: "10px",
    overflowY: "auto",

    ".activity-detail-title": {
      fontSize: "24px",
      fontWeight: "700"
    }
  };
});