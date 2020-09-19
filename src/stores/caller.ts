import { writable } from "svelte/store";
import getRandomFromArray from "../services/getRandomFromArray";
import { images } from "../consts";

interface ICallerStore {
  selected: string[];
  shuffled: string[];
}

const STORE_KEY = "CALLER";

const buildNewGame = (): ICallerStore => ({
  selected: [],
  shuffled: getRandomFromArray<string>(images, images.length),
});

const createCaller = () => {
  let initialValue: ICallerStore;
  try {
    initialValue =
      JSON.parse(localStorage.getItem(STORE_KEY)) || buildNewGame();
  } catch {
    initialValue = buildNewGame();
  }
  const { set, update, subscribe } = writable<ICallerStore>(initialValue);

  subscribe((val) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(val));
  });

  return {
    subscribe,
    selectNext: (): void => {
      update((self) => {
        const next = self.shuffled.pop();
        if (next) {
          self.selected = [...self.selected, next];
        }
        return self;
      });
    },
    newGame: () => {
      set(buildNewGame());
    },
  };
};

export const caller = createCaller();
