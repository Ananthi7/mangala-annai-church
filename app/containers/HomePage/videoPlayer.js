import React from 'react';
// import { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoContainer, {
  VideoRightPanel,
  ReadMoreButton,
  VideoCarousalpreButton,
  VideoCarousalnextButton,
  videoGallery,
} from './videoContainer';

/**
 *
 * Reference URL: https://www.npmjs.com/package/react-player
 */
export default function videoPlayer() {
  /* const [current,setcurrent]=useState(0);
  const size=videos.Length;
  const preButton=()=>{
     setcurrent(current===0 ? size :current--);
     console.log(current);
  }
  const nextButton=()=>{
     setcurrent(current===size ? current :current++);
     console.log(current);
  } */
  return (
    <VideoContainer>
      {videoGallery.map(videos => (
        <ReactPlayer
          url={videos.video}
          playing="false"
          width="700px"
          height="500px"
        />
      ))}

      <VideoCarousalpreButton>&lt;</VideoCarousalpreButton>
      <VideoRightPanel>
        <h2>About video</h2>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat,
        <ReadMoreButton>ReadMore</ReadMoreButton>
      </VideoRightPanel>
      <VideoCarousalnextButton>&gt;</VideoCarousalnextButton>
    </VideoContainer>
  );
}
