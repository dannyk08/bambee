import { POST_SCHEDULE_OVERVIEW_URL, COMMON_HEADERS } from "../utils/constants";

export function postScheduleOverview(data = { schedule: null, phone: null }) {
  if (data.phone === null || data.schedule === null) {
    console.error("DATA cannot be null");
    return;
  }

  return fetch(POST_SCHEDULE_OVERVIEW_URL, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify(data)
  }).then(res => res.json());
}
