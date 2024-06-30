import { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player({ accessToken, trackUri }){
    const [play, setPlay] = useState();

    useEffect(() => setPlay(true), [trackUri]);

    if(!accessToken) return null;
    return <SpotifyPlayer token={accessToken} uris={trackUri ? [trackUri] : []} 
        play={play} callback={state => {
            if(!state.isPlaying) setPlay(false);
        }}/>
}