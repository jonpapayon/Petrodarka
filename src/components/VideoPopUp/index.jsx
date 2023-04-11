import React from "react";
import CancelIcon from "../../assets/images/icons/cancel-yellow.png";
import { VideoContainer, CloseContainer, Icon } from "./styles.js";
import ReactPlayer from "react-player";

export const VideoPopUp = ({ close }) => {
  return (
    <>
      <CloseContainer>
        <Icon onClick={close} src={CancelIcon} />
      </CloseContainer>
      <VideoContainer>
        <VideoContainer>
          <ReactPlayer
            config={{
              vimeo: {
                playerOptions: {
                  responsive: true,
                },
              },
            }}
            width="100%"
            playing
            loop
            controls={true}
            volume={0}
            height="100%"
            url="https://vimeo.com/576857174"
          />
        </VideoContainer>
      </VideoContainer>
    </>
  );
};
