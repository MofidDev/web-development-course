export interface Topic {
  title: string;
  titlefa: string;
  path: string;
  file: string;

  isltr?: boolean;

  done?: boolean;
  pending?: boolean;
}
