const SAVED_VEHICLES_KEY = "autolanka-saved";
const SAVED_CHANGE_EVENT = "autolanka:saved-change";

export function getSavedVehicleIds(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(SAVED_VEHICLES_KEY) ?? "[]"
    );

    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

export function saveVehicleIds(ids: string[]): boolean {
  if (typeof window === "undefined") return false;

  try {
    window.localStorage.setItem(SAVED_VEHICLES_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(SAVED_CHANGE_EVENT));
    return true;
  } catch {
    return false;
  }
}

export const savedVehiclesChangeEvent = SAVED_CHANGE_EVENT;
