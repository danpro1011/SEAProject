// Array of objects(Song objects)
//trackName is the name of the song
//artistName includes the names of all artists
//artistCount includes the amount of artists on the song
//released is the year song was released
//inSpotifyPlaylists is the amount of playlists this song is in
//inSpotifyCharts is the amount of charts this song is in
//streams is the amount of streams this song has
//inApplePlaylists is the amount of apple playlists the song is in
//inAppleCharts is the amount of charts the song is in

const SongData = [
    {
        trackName: "Seven",
        artistName: "Latto, Jungkook",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 553,
        inSpotifyCharts: 147,
        streams: 141381703,
        inApplePlaylists: 43,
        inAppleCharts: 263,
    },
    {
        trackName: "LALA",
        artistName: "Myke Towers",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 1474,
        inSpotifyCharts: 48,
        streams: 133716286,
        inApplePlaylists: 48,
        inAppleCharts: 126,
    },
    {
        trackName: "vampire",
        artistName: "Olivia Rodrigo",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 1397,
        inSpotifyCharts: 113,
        streams: 140003974,
        inApplePlaylists: 94,
        inAppleCharts: 207,
    },
    {
        trackName: "Cruel Summer",
        artistName: "Taylor Swift",
        artistCount: 1,
        released: 2019,
        inSpotifyPlaylists: 7858,
        inSpotifyCharts: 100,
        streams: 800840817,
        inApplePlaylists: 116,
        inAppleCharts: 207,
    },
    {
        trackName: "WHERE SHE GOES",
        artistName: "Bad Bunny",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 3133,
        inSpotifyCharts: 50,
        streams: 303236322,
        inApplePlaylists: 84,
        inAppleCharts: 133,
    },
    {
        trackName: "Sprinter",
        artistName: "Dave, Central Cee",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 2186,
        inSpotifyCharts: 91,
        streams: 183706234,
        inApplePlaylists: 67,
        inAppleCharts: 213,
    },
    {
        trackName: "Ella Baila Sola",
        artistName: "Eslabon Armado, Peso Pluma",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 3090,
        inSpotifyCharts: 50,
        streams: 725980112,
        inApplePlaylists: 34,
        inAppleCharts: 222,
    },
    {
        trackName: "Columbia",
        artistName: "Quevedo",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 714,
        inSpotifyCharts: 43,
        streams: 58149378,
        inApplePlaylists: 25,
        inAppleCharts: 89,
    },
    {
        trackName: "fukumean",
        artistName: "Gunna",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 1096,
        inSpotifyCharts: 83,
        streams: 95217315,
        inApplePlaylists: 60,
        inAppleCharts: 210,
    },
    {
        trackName: "La Bebe - Remix",
        artistName: "Peso Pluma, Yng Lvcas",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 2953,
        inSpotifyCharts: 44,
        streams: 553634067,
        inApplePlaylists: 49,
        inAppleCharts: 110,
    },
    {
        trackName: "unx100t0",
        artistName: "Bad Bunny, Grupo Frontera",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 2876,
        inSpotifyCharts: 40,
        streams: 505671438,
        inApplePlaylists: 41,
        inAppleCharts: 205,
    },
    {
        trackName: "Super Shy",
        artistName: "NewJeans",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 422,
        inSpotifyCharts: 55,
        streams: 58255150,
        inApplePlaylists: 37,
        inAppleCharts: 202,
    },
    {
        trackName: "Flowers",
        artistName: "Miley Cyrus",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 12211,
        inSpotifyCharts: 115,
        streams: 1316855716,
        inApplePlaylists: 300,
        inAppleCharts: 215,
    },
    {
        trackName: "Daylight",
        artistName: "David Kushner",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 3528,
        inSpotifyCharts: 98,
        streams: 387570742,
        inApplePlaylists: 80,
        inAppleCharts: 156,
    },
    {
        trackName: "As It Was",
        artistName: "Harry Styles",
        artistCount: 1,
        released: 2022,
        inSpotifyPlaylists: 23575,
        inSpotifyCharts: 130,
        streams: 2513188493,
        inApplePlaylists: 403,
        inAppleCharts: 198,
    },
    {
        trackName: "Kill Bill",
        artistName: "SZA",
        artistCount: 1,
        released: 2022,
        inSpotifyPlaylists: 8109,
        inSpotifyCharts: 77,
        streams: 1163093654,
        inApplePlaylists: 183,
        inAppleCharts: 162,
    },
    {
        trackName: "Cupid - Twin Ver.",
        artistName: "Fifty Fifty",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 2942,
        inSpotifyCharts: 77,
        streams: 496795686,
        inApplePlaylists: 91,
        inAppleCharts: 212,
    },
    {
        trackName: 'What Was I Made For? [From The Motion Picture "Barbie"]',
        artistName: "Billie Eilish",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 873,
        inSpotifyCharts: 104,
        streams: 30546883,
        inApplePlaylists: 80,
        inAppleCharts: 227,
    },
    {
        trackName: "Classy 101",
        artistName: "Feid, Young Miko",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 2610,
        inSpotifyCharts: 40,
        streams: 335222234,
        inApplePlaylists: 43,
        inAppleCharts: 100,
    },
    {
        trackName: "Like Crazy",
        artistName: "Jimin",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 596,
        inSpotifyCharts: 68,
        streams: 363369738,
        inApplePlaylists: 8,
        inAppleCharts: 104,
    },
    {
        trackName: "LADY GAGA",
        artistName: "Gabito Ballesteros, Junior H, Peso Pluma",
        artistCount: 3,
        released: 2023,
        inSpotifyPlaylists: 332,
        inSpotifyCharts: 26,
        streams: 86444842,
        inApplePlaylists: 11,
        inAppleCharts: 163,
    },
    {
        trackName: "I Can See You(Taylors Version)",
        artistName: "Taylor Swift",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 516,
        inSpotifyCharts: 38,
        streams: 52135248,
        inApplePlaylists: 73,
        inAppleCharts: 119,
    },
    {
        trackName: "I Wanna Be Yours",
        artistName: "Arctic Monkeys",
        artistCount: 1,
        released: 2013,
        inSpotifyPlaylists: 12859,
        inSpotifyCharts: 110,
        streams: 1297026226,
        inApplePlaylists: 24,
        inAppleCharts: 98,
    },
    {
        trackName: "Peso Pluma: Bzrp Music Sessions, Vol. 55",
        artistName: "Bizarrap, Peso Pluma",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 1313,
        inSpotifyCharts: 40,
        streams: 200647221,
        inApplePlaylists: 17,
        inAppleCharts: 152,
    },
    {
        trackName:
            "Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series)",
        artistName: "The Weeknd, Madonna, Playboi Carti",
        artistCount: 3,
        released: 2023,
        inSpotifyPlaylists: 1945,
        inSpotifyCharts: 87,
        streams: 115364561,
        inApplePlaylists: 74,
        inAppleCharts: 182,
    },
    {
        trackName: "SABOR FRESA",
        artistName: "Fuerza Regida",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 250,
        inSpotifyCharts: 26,
        streams: 78300654,
        inApplePlaylists: 16,
        inAppleCharts: 149,
    },
    {
        trackName: "Calm Down(with Selena Gomez",
        artistName: "Rema, Selena Gomez",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 7112,
        inSpotifyCharts: 77,
        streams: 899183384,
        inApplePlaylists: 202,
        inAppleCharts: 119,
    },
    {
        trackName: "MOJABI GHOST",
        artistName: "Tainy, Bad Bunny",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 859,
        inSpotifyCharts: 40,
        streams: 61245289,
        inApplePlaylists: 35,
        inAppleCharts: 109,
    },
    {
        trackName: "Last Night",
        artistName: "Morgan Wallen",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 2420,
        inSpotifyCharts: 19,
        streams: 429829812,
        inApplePlaylists: 52,
        inAppleCharts: 107,
    },
    {
        trackName: "Dance The Night (From Barbie The Album)",
        artistName: "Dua Lipa",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 2988,
        inSpotifyCharts: 101,
        streams: 127408954,
        inApplePlaylists: 0,
        inAppleCharts: 0,
    },
    {
        trackName: "Rush",
        artistName: "Troye Sivan",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 864,
        inSpotifyCharts: 78,
        streams: 22581161,
        inApplePlaylists: 71,
        inAppleCharts: 135,
    },
    {
        trackName: "TULUM",
        artistName: "Peso Pluma, Grupo Frontera",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 266,
        inSpotifyCharts: 34,
        streams: 52294266,
        inApplePlaylists: 20,
        inAppleCharts: 185,
    },
    {
        trackName: "Creepin",
        artistName: "The Weeknd, 21 Savage, Metro Boomin",
        artistCount: 3,
        released: 2022,
        inSpotifyPlaylists: 6036,
        inSpotifyCharts: 88,
        streams: 843957510,
        inApplePlaylists: 113,
        inAppleCharts: 149,
    },
    {
        trackName: "Anti-Hero",
        artistName: "Taylor Swift",
        artistCount: 1,
        released: 2022,
        inSpotifyPlaylists: 9082,
        inSpotifyCharts: 56,
        streams: 999748277,
        inApplePlaylists: 242,
        inAppleCharts: 142,
    },
    {
        trackName: "TQG",
        artistName: "Karol G, Shakira",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 4284,
        inSpotifyCharts: 49,
        streams: 618990393,
        inApplePlaylists: 115,
        inAppleCharts: 123,
    },
    {
        trackName: "Los del Espacio",
        artistName:
            "Big One, Duki, Lit Killah, Maria Becerra, FMK, Rusherking, Emilia, Tiago pzk",
        artistCount: 8,
        released: 2023,
        inSpotifyPlaylists: 1150,
        inSpotifyCharts: 31,
        streams: 123122413,
        inApplePlaylists: 22,
        inAppleCharts: 33,
    },
    {
        trackName: "Blank Space",
        artistName: "Taylor Swift",
        artistCount: 1,
        released: 2014,
        inSpotifyPlaylists: 11434,
        inSpotifyCharts: 53,
        streams: 1355959075,
        inApplePlaylists: 154,
        inAppleCharts: 123,
    },
    {
        trackName: "Style",
        artistName: "Taylor Swift",
        artistCount: 1,
        released: 2014,
        inSpotifyPlaylists: 7830,
        inSpotifyCharts: 42,
        streams: 786181836,
        inApplePlaylists: 94,
        inAppleCharts: 111,
    },
    {
        trackName: "TQM",
        artistName: "Fuerza Regida",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 584,
        inSpotifyCharts: 28,
        streams: 176553476,
        inApplePlaylists: 16,
        inAppleCharts: 159,
    },
    {
        trackName: "El Azul",
        artistName: "Junior H, Peso Pluma",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 692,
        inSpotifyCharts: 25,
        streams: 354495408,
        inApplePlaylists: 10,
        inAppleCharts: 107,
    },
    {
        trackName: "Sunflower - Spider-Man: Into the Spider-Verse",
        artistName: "Post Malone, Swae Lee",
        artistCount: 2,
        released: 2018,
        inSpotifyPlaylists: 24094,
        inSpotifyCharts: 78,
        streams: 2808096550,
        inApplePlaylists: 372,
        inAppleCharts: 117,
    },
    {
        trackName: "See You Again",
        artistName: "Tyler, The Creator, Kali Uchis",
        artistCount: 2,
        released: 2017,
        inSpotifyPlaylists: 13387,
        inSpotifyCharts: 64,
        streams: 10471001291,
        inApplePlaylists: 77,
        inAppleCharts: 58,
    },
    {
        trackName: "Barbie World (with Aqua) [From Barbie The Album]",
        artistName: "Nicki Minaj, Aqua, Ice Spice",
        artistCount: 3,
        released: 2023,
        inSpotifyPlaylists: 1117,
        inSpotifyCharts: 80,
        streams: 65156199,
        inApplePlaylists: 82,
        inAppleCharts: 145,
    },
    {
        trackName: "Angels Like You",
        artistName: "Miley Cyrus",
        artistCount: 1,
        released: 2020,
        inSpotifyPlaylists: 3372,
        inSpotifyCharts: 19,
        streams: 570515054,
        inApplePlaylists: 65,
        inAppleCharts: 48,
    },
    {
        trackName: "Die For You",
        artistName: "The Weekend",
        artistCount: 1,
        released: 2016,
        inSpotifyPlaylists: 2483,
        inSpotifyCharts: 59,
        streams: 1647990401,
        inApplePlaylists: 68,
        inAppleCharts: 21,
    },
    {
        trackName: "Starboy",
        artistName: "The Weeknd, Daft Punk",
        artistCount: 2,
        released: 2016,
        inSpotifyPlaylists: 29536,
        inSpotifyCharts: 79,
        streams: 2565529693,
        inApplePlaylists: 281,
        inAppleCharts: 137,
    },
    {
        trackName: "Die For You - Remix",
        artistName: "Ariana Grande, The Weeknd",
        artistCount: 2,
        released: 2023,
        inSpotifyPlaylists: 3408,
        inSpotifyCharts: 47,
        streams: 518745108,
        inApplePlaylists: 87,
        inAppleCharts: 86,
    },
    {
        trackName: "El Cielo",
        artistName: "Feid, Myke Towers, Sky Rompiendo",
        artistCount: 3,
        released: 2023,
        inSpotifyPlaylists: 1298,
        inSpotifyCharts: 38,
        streams: 107753850,
        inApplePlaylists: 44,
        inAppleCharts: 64,
    },
    {
        trackName: "AMARGURA",
        artistName: "Karol G",
        artistCount: 1,
        released: 2023,
        inSpotifyPlaylists: 1133,
        inSpotifyCharts: 39,
        streams: 153372011,
        inApplePlaylists: 14,
        inAppleCharts: 71,
    },
    {
        trackName: "Another Love",
        artistName: "Tom Odell",
        artistCount: 1,
        released: 2012,
        inSpotifyPlaylists: 18371,
        inSpotifyCharts: 83,
        streams: 1813673666,
        inApplePlaylists: 145,
        inAppleCharts: 111,
    },
];
/**
 * Displays the most popular song in the card-container element of the webpage 
 * The most popular song is determined by the song with the highest number of streams
 */
function showMostPopularSong() {
    // Get the container in the DOM where the song card will be displayed
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing content

    // Iterate over the SongData array to find the song with greatest number of streams 
    const mostPopularSong = SongData.reduce((prev, current) =>
        prev.streams > current.streams ? prev : current
    );
    // Construct the HTML for the song card with the most popular song data
    const songCardHTML = `
        <div class="card">
          <div class="card-content">
            <h2>${mostPopularSong.trackName} by ${mostPopularSong.artistName} (${mostPopularSong.released})</h2>
            <p>Artists: ${mostPopularSong.artistCount}</p>
            <p>Spotify Playlists: ${mostPopularSong.inSpotifyPlaylists}</p>
            <p>Spotify Charts: ${mostPopularSong.inSpotifyCharts}</p>
            <p>Streams: ${mostPopularSong.streams}</p>
            <p>Apple Playlists: ${mostPopularSong.inApplePlaylists}</p>
            <p>Apple Charts: ${mostPopularSong.inAppleCharts}</p>
          </div>
        </div>
      `;
    // Finally update the HTML to display the song card
    cardContainer.innerHTML = songCardHTML;
}

/**
 * Defined a function that displays the song appearing in the most Spotify Playlists
 */
function showPlaylistCount() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    //Iterate using the reduce method to search for the song that has the greatest number of Spotify Playlist appearances  
    const songInMostPlaylists = SongData.reduce((prev, current) =>
        prev.inSpotifyPlaylists > current.inSpotifyPlaylists ? prev : current
    );

    const songCardHTML = `
          <div class="card">
            <div class="card-content">
              <h2>Most Playlists: ${songInMostPlaylists.trackName} by ${songInMostPlaylists.artistName} (${songInMostPlaylists.released})</h2>
              <p>Spotify Playlists: ${songInMostPlaylists.inSpotifyPlaylists}</p>
            </div>
          </div>
        `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that displays the song that appearing in the most Apple Music Playlists
 */
function showSongMostinApplePlaylists() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 
    //Iterate using the reduce method to search for the song that has the greatest number of Apple Music Playlist appearances
    const songMostinApplePlaylists = SongData.reduce((prev, current) =>
        prev.inApplePlaylists > current.inApplePlaylists ? prev : current
    );

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Top Apple Playlists Song</h2>
                  <p>${songMostinApplePlaylists.trackName} by ${songMostinApplePlaylists.artistName} (${songMostinApplePlaylists.released}) appears in the most Apple playlists: ${songMostinApplePlaylists.inApplePlaylists} times.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that displays the song with the most diverse artist collaboration on the web page
 */
function showSongWithMostDiverseCollaboration() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 

    // Iterate using the reduce method to search for the song with the greatest number of artists on it
    const songWithMostDiverseCollaboration = SongData.reduce((prev, current) => {
        // Assuming that 'artistName' is a comma-separated string of artist names
        const prevCount = prev.artistName.split(",").length;
        const currentCount = current.artistName.split(",").length;
        return prevCount > currentCount ? prev : current;
    });

    const artistCount =
        songWithMostDiverseCollaboration.artistName.split(",").length;

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Most Diverse Collaboration</h2>
                  <p>${songWithMostDiverseCollaboration.trackName} by ${songWithMostDiverseCollaboration.artistName} (${songWithMostDiverseCollaboration.released}) has the most diverse collaboration with ${artistCount} artists.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that displays the year with the most releases
 */
function showYearWithMostReleases() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 

    // Accumulates the count of releases per year in an object
    const releasesPerYear = SongData.reduce((acc, { released }) => {
        //Increments the count for the year of release, being initialized to 0 if not yet present
        acc[released] = (acc[released] || 0) + 1;
        return acc;
    }, {});
    //Determines the year with the most releases by comparing the accumulated counts 
    const mostReleasesYear = Object.keys(releasesPerYear).reduce((a, b) =>
        releasesPerYear[a] > releasesPerYear[b] ? a : b
    );

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Year with Most Releases</h2>
                  <p>The year with the most song releases is ${mostReleasesYear} with ${releasesPerYear[mostReleasesYear]} songs.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that displays the song with the longest period since release
 */
function showSongLongevity() {
    //Get the current year to calculate longevity
    const currentYear = new Date().getFullYear();

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 
    //Map over the SongData array to calculate and add longevity for each song
    const songLongevity = SongData.map((song) => {
        return {
            ...song,
            longevity: currentYear - song.released, //I calculate longevity as the current year minus the song's released year
        };
    }).sort((a, b) => b.longevity - a.longevity)[0]; // Sort by longevity in descending order and get the first (which is the oldest) song.

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Oldest Song</h2>
                  <p>The song "${songLongevity.trackName}" by ${songLongevity.artistName} (${songLongevity.released}) has been around for ${songLongevity.longevity} years.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that calculates and displays the song with the highest growth rate in streams
 */
function showStreamGrowthRate() {
    //Get the current year to calculate the number of years since each song's release
    const currentYear = new Date().getFullYear();

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing content

    // Calculate the growth rate for each song based on its streams and years since release
    const songsWithGrowthRate = SongData.map((song) => {
        const yearsSinceRelease = currentYear - song.released;
        //Determine the growth rate. *Avoid division by zero for newly released songs
        const growthRate = yearsSinceRelease > 0 ? song.streams / yearsSinceRelease : song.streams;
        return { ...song, growthRate }; //Append the growth rate to each song object
    });
    //Finally find the song with with the highest growth rate in streams per year
    const songWithHighestGrowth = songsWithGrowthRate.sort(
        (a, b) => b.growthRate - a.growthRate
    )[0];

    const songCardHTML = `
    <div class="card">
        <div class="card-content">
            <h2>Highest Growth Rate</h2>
            <p>The song "${songWithHighestGrowth.trackName}" by ${songWithHighestGrowth.artistName
        } has the highest annual growth rate of ${songWithHighestGrowth.growthRate.toLocaleString()} streams/year since its release in ${songWithHighestGrowth.released
        }.</p>
        </div>
    </div>
    `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that calculates and displays the song with the highest ratio of Apple to Spotify playlist appearances
 */
function showPlaylistRatio() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Calculate the ratio of Apple to Spotify playlist appearances for each song
    const ratios = SongData.map((song) => {
        // Compute the ratio of appearances in Apple playlists to Spotify playlists
        const ratio = song.inApplePlaylists / song.inSpotifyPlaylists;
        return {
            ...song,
            playlistRatio: ratio, // Add the calculated ratio to the song object
        };
    }).sort((a, b) => b.playlistRatio - a.playlistRatio)[0]; //Get the song with the highest Apple to Spotify playlist ratio

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Apple to Spotify Playlist Ratio</h2>
                  <p>The song "${ratios.trackName}" by ${ratios.artistName
        } has the highest ratio of Apple Playlist inclusions to Spotify Playlist inclusions: ${ratios.playlistRatio.toFixed(
            2
        )}.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that calculates and displays the song with the highest Chart Impact Score
 */
function showChartImpactScore() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Calculate a 'Chart Impact Score' for each song
    const songsWithImpactScore = SongData.map((song) => {
        //Score is calculated by applying different weights to chart appearances and streams
        const score =
            song.inSpotifyCharts * 2 + song.inAppleCharts + song.streams / 1000000;
        return {
            ...song,
            impactScore: score, // Append the calculated score to each song object
        };
    }).sort((a, b) => b.impactScore - a.impactScore)[0]; // Get the song with the highest impact score

    const songCardHTML = `
          <div class="card">
              <div class="card-content">
                  <h2>Chart Impact Score</h2>
                  <p>The song "${songsWithImpactScore.trackName}" by ${songsWithImpactScore.artistName
        } has the highest chart impact score of ${songsWithImpactScore.impactScore.toLocaleString()}.</p>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

/**
 * Function that displays the top 50 songs in order of stream count
 */
function showStreamLeaderboard() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Sort and slice the first 50 songs in descending order by stream count
    const topFiftySongs = [...SongData]
        .sort((a, b) => b.streams - a.streams)
        .slice(0, 50); // Adjust this line if needed to ensure the top 50 are included

    // Generate the HTML for the leaderboard, listing each song with its stream count
    const leaderboardContent = topFiftySongs
        .map((song, index) => {
            return `<li>"${song.trackName}" by ${song.artistName
                } - ${song.streams.toLocaleString()} streams</li>`;
        })
        .join(""); // Joins all items into a single string

    const songCardHTML = `
          <div class="card leaderboard">
              <div class="card-content">
                  <h2>Stream Leaderboard</h2>
                  <ol>${leaderboardContent}</ol>
              </div>
          </div>
      `;

    cardContainer.innerHTML = songCardHTML;
}

document.addEventListener("DOMContentLoaded", showMostPopularSong);
