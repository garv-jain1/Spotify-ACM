import React, { useEffect, useState } from 'react';
import "./Footer.css";
import { UseDataLayerValue } from './DataLayer';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Repeat, Shuffle } from '@mui/icons-material';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';



function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = UseDataLayerValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className='footer'>
      <div className='footer_left'>
        { item && item.album && <img className='footer_albumLogo'
           src={item.album.images[0].url}
           alt={item.name}/>}
        <div className='footer_songInfo'>
        <h4>No song is playing</h4>
            <p>...</p>
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon onClick={skipNext} className='footer_icon' />
        {playing ? (<PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className='footer_icon' />):(<PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className='footer_icon' />)}
        <SkipNextIcon onClick={skipPrevious} className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;