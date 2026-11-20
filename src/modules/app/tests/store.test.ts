import { describe, it, expect } from "vitest";
import { createTestStore } from "../../testing/tests-environment";
describe("store", () => {
    it("démarre sans utilisateur connecté", () => {
        const store = createTestStore();
        expect(store.getState()).toEqual({ auth: { user: null } })
    })
})