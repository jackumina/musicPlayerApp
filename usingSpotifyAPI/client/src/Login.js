import { Container } from 'react-bootstrap';
var querystring = require('querystring');

var client_id = '34b0ebf6052f40629222369e914b47b4'; // your clientId
var redirect_uri = 'http://localhost:3000'; // Your redirect uri
var scope = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
querystring.stringify({
    client_id: client_id,
    response_type: 'code',
    scope: scope,
    redirect_uri: redirect_uri,
});

export default function Login() {
    return(
        <Container className='d-flex justify-content-center align-items-center'
            style={{ minHeight: '100vh' }}>
            <a className='btn btn-success btn-lg' href={AUTH_URL}>Login with Spotify</a>
        </Container>
    );
}