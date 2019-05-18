import { Context } from "react";
import { Store } from "redux";
export default function <RootState>({ Provider }: Context<Store<RootState>>): ({ store, children }: {
    store: any;
    children: any;
}) => any;
