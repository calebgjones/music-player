const songs = [
    {
      songId: '1ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Something - Remastered 2009',
      artist: 'The Beatles',
      album: 'Abbey Road',
      genre: 'Rock',
    },
    {
      songId: '2ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Hey Jude - Remastered 2015',
      artist: 'The Beatles',
      album: 'Hey Jude',
      genre: 'Rock',
    },
    {
      songId: '3ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Let It Be - Remastered 2009',
      artist: 'The Beatles',
      album: 'Let It Be',
      genre: 'Rock',
    },
    {
      songId: '4ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Help! - Remastered 2009',
      artist: 'The Beatles',
      album: 'Help!',
      genre: 'Rock',
    },
    {
      songId: '5ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Yesterday - Remastered 2009',
      artist: 'The Beatles',
      album: 'Help!',
      genre: 'Rock',
    },
    {
      songId: '6ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Come Together - Remastered 2009',
      artist: 'The Beatles',
      album: 'Abbey Road',
      genre: 'Rock',
    },
    {
      songId: '7ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Twist And Shout - Remastered 2009',
      artist: 'The Beatles',
      album: 'Please Please Me',
      genre: 'Rock',
    },
    {
      songId: '8ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'I Want To Hold Your Hand - Remastered 2015',
      artist: 'The Beatles',
      album: 'Meet The Beatles!',
      genre: 'Rock',
    },
    {
      songId: '9ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'A Hard Day\'s Night - Remastered 2009',
      artist: 'The Beatles',
      album: 'A Hard Day\'s Night',
      genre: 'Rock',
    },
    {
      songId: '10ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Can\'t Buy Me Love - Remastered 2009',
      artist: 'The Beatles',
      album: 'A Hard Day\'s Night',
      genre: 'Rock',
    },
    {
      songId: '11ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Love Me Do - Remastered 2009',
      artist: 'The Beatles',
      album: 'Please Please Me',
      genre: 'Rock',
    },
    {
      songId: '12ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Penny Lane - Remastered 2009',
      artist: 'The Beatles',
      album: 'Magical Mystery Tour',
      genre: 'Rock',
    },
    {
      songId: '13ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
      title: 'Yellow Submarine - Remastered 2009',
      artist: 'The Beatles',
      album: 'Revolver',
      genre: 'Rock',
    },
    {
        songId: '14ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Call Me Maybe',
        artist: 'Carly Rae Jepsen',
        album: 'Call Me Maybe',
        genre: 'Pop',
      },
      {
        songId: '15ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'I Really Like You',
        artist: 'Carly Rae Jepsen',
        album: 'I Really Like You',
        genre: 'Pop',
      },
      {
        songId: '16ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Party For One',
        artist: 'Carly Rae Jepsen',
        album: 'Party For One',
        genre: 'Pop',
      },
      {
        songId: '17ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'C.R.E.A.M.',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '18ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Protect Ya Neck',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '19ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Method Man',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '20ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Triumph',
        artist: 'Wu-Tang Clan',
        album: 'Wu-Tang Forever',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '21ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Gravel Pit',
        artist: 'Wu-Tang Clan',
        album: 'The W',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '22ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Da Mystery of Chessboxin\'',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '23ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Shame',
        artist: 'Wu-Tang Clan',
        album: 'A Better Tomorrow',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '24ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'C.R.E.A.M.',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      },
      {
        songId: '25ae8f7b1-8f6e-4f1f-8f1d-6f7b1f1f8d1e',
        title: 'Protect Ya Neck',
        artist: 'Wu-Tang Clan',
        album: 'Enter the Wu-Tang (36 Chambers)',
        genre: 'Hip-Hop, Rap',
      }
  ];

  export default songs;