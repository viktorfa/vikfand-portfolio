const projects = [
  {
    title: 'Votify',
    blocks: [
      'Votify is a "social jukebox" for Spotify. The idea is that a group of people can vote for songs and create a collaborative playlist on the fly. Several similar apps exist, but none are good enough in my opinion. I did a write-up on which you can find on my blog.',
      "The app isn't that big or complicated at the moment, but the system is quite complex, as it needs to communicate flawlessly with the Spotify API and between all the participants. The UX on an app like this should be near perfect and extremely intuitive, which is challenging to make. The backend is currently handled on an Express server and MongoDB. Much of the logic could be moved to a real-time database such as Firebase, even though it will always need a thin server to handle the core logic of communicating with the Spotify API.",
    ],
    dict: { status: 'MVP finished. Needs better UX to ship.' },
    images: ['./assets/images/votify.png'],
  },
];

export default projects;
