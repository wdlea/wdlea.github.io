import { writable } from "svelte/store";

let prevScrollPosition = writable(0);

export default prevScrollPosition;
