
export default function SongDisplay({ track, lyrics }) {

    return(
        <div className="text-center">

            <img src={track.albumDisplayUrl} style={{height: '500px', width: '500px'}} />
            <div>
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>

            {/* <div className="pt-5 mt-5" style={{ whiteSpace: 'pre' }}>
                <div className='pb-5'>
                    Scroll for Lyrics:
                </div>
                {lyrics}
            </div> */}

            {lyrics === 'No Lyrics Found' ? (
                <div className="pt-5 mt-5">No lyrics available for this song</div>
            ) : (
                <div className="pt-5 mt-5" style={{ whiteSpace: 'pre' }}>
                    <div className='pb-5'>
                        Scroll for Lyrics:
                    </div>
                    {lyrics}
                </div>
            )}

        </div>
    );
}