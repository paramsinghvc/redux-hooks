import React, { Context } from "react";
import { Store } from "redux";

export default function<RootState>({ Provider }: Context<Store<RootState>>) {
  return ({ store, children }) => <Provider value={store}>{children}</Provider>;
}
