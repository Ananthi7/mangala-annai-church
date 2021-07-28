import React from 'react';
import ReactPlayer from 'react-player';
import VideoContainer, { VideoRightPanel }from './videoContainer';
import {ReadMoreButton} from './videoContainer'

/**
 *
 * Reference URL: https://www.npmjs.com/package/react-player
 */
export default function videoPlayer() {
  return (
    <VideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=SEYJDNJQ4KA"
        playing="false"
        width="700px"
        height="500px"
      />
      <VideoRightPanel>
        <h2>About video</h2>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum 
        iriure dolor in hendrerit in vulputate velit esse molestie consequat,
        <ReadMoreButton>ReadMore</ReadMoreButton> 
        </VideoRightPanel>
    </VideoContainer>
  );
}
