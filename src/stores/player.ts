import { writable } from "svelte/store";
import getRandomFromArray from "../services/getRandomFromArray";
import { images, PLAYER_IMAGE_COUNT } from "../consts";

interface IPlayerStore {
  images: string[];
  selected: string[];
}

const STORE_KEY = "PLAYER";

const buildNewGame = (): IPlayerStore => ({
  images: getRandomFromArray<string>(images, PLAYER_IMAGE_COUNT),
  selected: [],
});

const createPlayer = () => {
  let initialValue: IPlayerStore;
  try {
    initialValue =
      JSON.parse(localStorage.getItem(STORE_KEY)) || buildNewGame();
  } catch {
    initialValue = buildNewGame();
  }
  const { set, update, subscribe } = writable<IPlayerStore>(initialValue);

  subscribe((val) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(val));
  });

  return {
    subscribe,
    toggleSelected: (image: string): void => {
      update((self) => {
        const isAvailable = self.images.indexOf(image) > -1;
        const isSelected = self.selected.indexOf(image) > -1;
        if (isSelected || !isAvailable) {
          self.selected = self.selected.filter(
            (selectedImage) => selectedImage !== image
          );
        } else {
          self.selected = self.selected.concat(image);
        }
        return self;
      });
    },
    newGame: () => {
      set(buildNewGame());
    },
  };
};

export const player = createPlayer();
