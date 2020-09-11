import { writable } from "svelte/store";
import type { SvelteComponent } from "svelte";

export type Router = Record<string, typeof SvelteComponent>;

export const currentRoute = writable<string>("/");
export const currentQuery = writable<Record<string, string>>({});

export const navigateTo = (path: string): void => {
  const [hash, search] = path.split("?");
  currentRoute.set(hash);
  currentQuery.set(getSearchParams(search));
  window.history.pushState({ hash }, "", `#${path}`);
};

export const getSearchParams = (search: string): Record<string, string> => {
  const searchParams = new URLSearchParams(search);
  return (Object as any).fromEntries(searchParams.entries());
};
