export type IdType = string | number;

export type PostSource = "api" | "user";

export interface PostItem {
  id: IdType;
  title: string;
  body: string;
  source: PostSource;
}
