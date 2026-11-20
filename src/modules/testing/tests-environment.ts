import type { Dependencies } from "../store/dependencies";
import { createStore, type AppState } from "../store/store"

// on peut ne passer que les méthodes utiles au test
type TestDependencies = { [K in keyof Dependencies]?: Partial<Dependencies[K]> };

export const createTestStore = (config?: {
    initialState?: Partial<AppState>;
    dependencies?: TestDependencies;
}) => createStore ({
    dependencies: { ...config?.dependencies } as Dependencies,
    preloadedState: config?.initialState
});
