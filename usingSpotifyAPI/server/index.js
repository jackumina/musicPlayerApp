require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const { Google, Musixmatch } = require("@flytri/lyrics-finder");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    }).catch(() => {
        res.sendStatus(400);
    });
});

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    });

    spotifyApi.refreshAccessToken()
    .then((data) => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        });
    })
    .catch(() => {
        res.sendStatus(400);
    });
});

app.get('/lyrics', async (req, res) => {
    
    try{
        const songData = await Google(req.query.track, req.query.artist);
        res.json({ lyrics: songData.lyrics });
    } catch{
        res.json({ lyrics: 'No Lyrics Found'});
    }
});

const port = 8080;
app.listen(port, () => console.log(`Server running on ${port}`));