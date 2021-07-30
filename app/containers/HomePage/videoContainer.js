import styled from 'styled-components';

const VideoContainer = styled.div`
  display: inline-block;
  display: flex;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
export const VideoRightPanel = styled.div`
  width: 500px;
  display: inline-block;
  height: 400px;
  margin-left: 19px;
  padding: 10px;
  margin-top: 10px;
`;
export const ReadMoreButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  border-top: 2px solid transparent;
  &:hover {
    background-color: #186587;
    color: white;
  }
`;
export const VideoCarousalpreButton = styled.button`
  background-color: black;
  position: absolute;
  color: #fff;
  border-radius: 50%;
  width: 53px;
  height: 49px;
  top: 1452px;
  border: 1px solid black;
  font-size: 18px;
`;
export const VideoCarousalnextButton = styled(VideoCarousalpreButton)`
  right: 0;
`;
export const videoGallery = [
  {
    video: 'https://youtu.be/IUN664s7N-c',
  },
  {
    video: 'https://youtu.be/IUN664s7N-c',
  },
  {
    video: 'https://www.youtube.com/watch?v=SEYJDNJQ4KA',
  },
];
export default VideoContainer;
