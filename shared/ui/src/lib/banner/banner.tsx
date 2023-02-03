import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

const StyledBanner = styled.div`
  color: pink;
`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <header>{props.text}</header>
    </StyledBanner>
  );
}

export default Banner;
