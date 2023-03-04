// import mui module
import styled from '@emotion/styled';

export const ActivityDetailPageStyle = styled('div')(({ theme }: any) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    ".activity-detail-title": {
      fontSize: "24px",
      fontWeight: "700"
    }
  };
});