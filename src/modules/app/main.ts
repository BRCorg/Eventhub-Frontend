import { HttpAuthGateway } from "../auth/services/http-auth.gateway";
import type { Dependencies } from "../store/dependencies";
import { createStore, type AppStore } from "../store/store";

export class App {
    public dependencies: Dependencies;
    public store: AppStore;

    constructor(){
        this.dependencies = this.setupDependencies();
        this.store = createStore({dependencies: this.dependencies});
    }

    setupDependencies(): Dependencies {
        // API locale lancée avec json-server (npm run api)
        const gateway = new HttpAuthGateway("http://localhost:3001");
        return { authGateway: gateway, profileGateway: gateway };
    }
}

export const app = new App(); // Je créé une seule instance pour toute l'application => Pattern Singleton