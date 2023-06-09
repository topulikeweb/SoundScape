interface IGetPlaylistDetails {
  id: number;
  limit?: number;
  offset?: number;
}

interface IGetMusicURl {
  id: number;
  stand?: string;
}

export { IGetPlaylistDetails, IGetMusicURl };
