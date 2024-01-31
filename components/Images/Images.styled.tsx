import Image from "next/image";
import styled from "styled-components";

export const CroppedCircleImage = styled(Image)`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const Image = styled(Image)`
  display: inlne;
  height: 100%;
  width: auto;
  margin: 0 auto;
`;
