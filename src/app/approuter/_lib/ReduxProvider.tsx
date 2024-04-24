"use client";
import {Provider} from "react-redux"
import React, { useRef } from "react";
import { AppStore, makeStore } from "./store";
import { initializeCount } from "./slices/counterSlices";

export default function ReduxProvider({children}: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore()
      storeRef.current.dispatch(initializeCount())
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
};