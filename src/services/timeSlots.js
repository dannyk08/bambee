import { GET_TIME_SLOTS_URL, COMMON_HEADERS } from "../utils/constants";

export function getTimeSlots() {
  return fetch(GET_TIME_SLOTS_URL, {
    method: "GET",
    headers: COMMON_HEADERS
  }).then(r => r.json());
}
