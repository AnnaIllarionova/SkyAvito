import styled from "styled-components";
import { device } from "../media-sizes/media-sizes";

export const SwiperDiv = styled.div`
display: none;

@media ${device.mobile} {
    display: block;
    width:100%;
    height:100%;
   
}
`