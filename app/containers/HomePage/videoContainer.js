import styled from 'styled-components';

const VideoContainer = styled.div`
  display: inline-block;
  width:100%;
  display:flex;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
export const VideoRightPanel = styled.div`
  width: 500px;
  display: inline-block;
  height:400px;
  margin-left: 19px;
  padding:10px;
  margin-top:10px;
  
`;
export const ReadMoreButton =styled.button`
width:100px;
height:30px;
border:none;
border-radius:8px;
cursor:pointer;
border-top:2px solid transparent;
&:hover{
  background-color:#186587;
  color:white;
}
   
`;
export default VideoContainer;
