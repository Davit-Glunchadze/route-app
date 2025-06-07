import { ReactNode } from "react";

export type Fact = {
  id: number;
  title: string;
  description:string;
};

export type childrenProps = {
  children: ReactNode;
};

export type contextValueProps = {
    data: Fact[];
    loading: Boolean;
    error:boolean | null;
}