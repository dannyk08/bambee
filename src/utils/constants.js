export const COMMON_HEADERS = new Headers({
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWNjMGNkYWNhYTVhMjcwMDFiMTEzODRjIiwiaWF0IjoxNTU2MTM5NDM2fQ.daB83-T3hNSW4cj29IaQFlKuXyTil3P4KO_mc5rsuFw`
});

export const POST_SCHEDULE_OVERVIEW_URL = new URL(
  "https://api.bambee.club/app/my/self/schedule-overview-call"
);

export const GET_TIME_SLOTS_URL = new URL(
  "https://api.bambee.club/available-sales-timeslots"
);
