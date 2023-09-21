import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HomePage from "../app/page";

vi.mock("@clerk/nextjs", () => {
  return {
    auth: () =>
      new Promise((resolve) =>
        resolve({
          userId: "testtest",
        })
      ),
    ClerkProvider: ({ children }) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",
        fullName: "Rami Mhazres",
      },
    }),
  };
});

test("Home", async () => {
  render(await HomePage());
  expect(screen.getByText("get started")).toBeTruthy();
});
