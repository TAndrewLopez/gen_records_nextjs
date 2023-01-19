require("dotenv").config();

const conn = require("./conn");
const { User, Artist, Track, Vinyl, Order, LineItem } = require("../server");
const { randomUsers, specificUsers } = require("./helpers/dummyData.json");
const { getAlbumData } = require("./helpers/spotifyAPI");

const seed = async () => {
  try {
    console.log("Seeding database...");
    await conn.sync({ force: true });

    console.log("Fetching data from spotify...");
    const [albums, artists] = await getAlbumData();

    console.log("Creating product information...");
    await Promise.all(
      albums.map(async (album) => {
        //find artist to assign to product
        let art = await Artist.findOne({
          where: { spotifyId: album.artists[0].id },
        });
        //if artist cant be found, create one
        if (!art) {
          let spotifyArtist = artists.find(
            (art) => art.id === album.artists[0].id
          );
          art = await Artist.create({
            name: spotifyArtist.name,
            spotifyId: spotifyArtist.id,
            img: spotifyArtist.images[0].url,
            genre: spotifyArtist.genres[0],
          });
        }
        //create the product and give it the artist ID
        let prod = await Vinyl.create({
          name: album.name,
          price: 999 + Math.ceil(album.popularity / 10) * 100,
          stock: Math.floor(Math.random() * (50 - 15) + 15),
          popularity: album.popularity,
          img: album.images[0].url,
          spotifyId: album.id,
          totalTrack: album.total_tracks,
          releaseDate: album.release_date,
          label: album.label,
          artistId: art.id,
        });
        //create the tracks and give it the product ID
        album.tracks.items.map(async (track) => {
          await Track.create({
            name: track.name,
            spotifyId: track.id,
            length: track.duration_ms,
            explicit: track.explicit,
            preview: track.preview_url,
            vinylId: prod.id,
          });
        });
        return prod;
      })
    );

    console.log("Creating specific users...");
    await Promise.all(specificUsers.map((user) => User.create(user)));

    console.log("Creating random users...");
    await Promise.all(randomUsers.map((user) => User.create(user)));

    console.log("Seed Successful.");
  } catch (error) {
    conn.close();
    console.error("An error has occurred while seeding.", error);
  }
};

seed();
