import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

type LocationRoot = (typeof locations)[keyof typeof locations];
type LocationChild = LocationRoot["children"][number];
type LocationSelectable = LocationRoot | LocationChild | null;

interface LocationState {
	activeLocation: LocationSelectable;
	setActiveLocation: (location: LocationSelectable) => void;
	resetActiveLocation: () => void;
}

const DEFAULT_LOCATION: LocationSelectable = locations.work;

const useLocationStore = create<LocationState>()(
	immer((set) => ({
		activeLocation: DEFAULT_LOCATION,

		setActiveLocation: (location) =>
			set((state) => {
				state.activeLocation = location;
			}),

		resetActiveLocation: () =>
			set((state) => {
				state.activeLocation = DEFAULT_LOCATION;
			}),
	})),
);

export default useLocationStore;
