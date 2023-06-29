interface IMusicLists {
  result: {
    songCount: number;
    songs: [];
  };
}

interface IResultList {
  artist: any[];
  album: { alias: string[]; name: string }[];
}

export type { IMusicLists, IResultList };
