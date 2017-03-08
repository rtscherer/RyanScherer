module.exports = {
    connectionString: 'mongodb://localhost:27017/ryanscherer',
    services: {
      spotify: {
        client_id: '31a5e9e509844c5c8dff04c959c6f1f6',
        client_secret: 'f3d8357cd6f04b8da313c84d5196d7d0',
        baseUri: "https://api.spotify.com",
        auth: "",
        basePaths: {
          getPlaylist: "/v1/users/1210289775/playlists/13tDISxbBEpDjsIaN0k779",
        }
      }
    }
}
