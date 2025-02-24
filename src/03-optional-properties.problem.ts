import { expect, it } from "vitest";

interface Params {
  first: string;
  last?: string;
}

export const getName = (params: Params) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// TEST
it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
