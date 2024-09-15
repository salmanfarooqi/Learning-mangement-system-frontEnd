import React from 'react';
import  MuxPlayer  from '@mux/mux-player-react';

const MuxVideoPlayer = ({ playbackId }:any) => {
  return (
    <div>
    
      <MuxPlayer
        playbackId={playbackId}
        
        autoPlay
        muted
       
      
      />
    </div>
  );
};

export default MuxVideoPlayer;
