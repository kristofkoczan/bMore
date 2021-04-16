export interface Picture {
    id: string,
    name: string,
    link: string,
    tag: string[],
    author: string,
    available?: boolean,
  }