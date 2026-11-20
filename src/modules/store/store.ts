import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Dependencies } from "./dependencies";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../auth/core/auth.slice";

const reducers = combineReducers({
    auth: authSlice.reducer,
});

export type AppState = ReturnType<typeof reducers>;

export const createStore = (config: { dependencies: Dependencies; preloadedState?: Partial<AppState> }) => {
    return configureStore({
        reducer: reducers,
        devTools: true,
        preloadedState: config.preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument: config.dependencies } // D de Solid, Injection de dépendances
            })

    })
}

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppGetState = AppStore["getState"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();


