import ScheduleIntro from "./../views/ScheduleIntro.vue";

export const routePaths = {
  schedule: {
    path: "/schedule",
    name: "schedule",
    component: ScheduleIntro
  },
  try: {
    path: "/try",
    name: "try",
    component: () => import(/* webpackChunkName: "try" */ "./../views/Try.vue")
  }
};

export const routes = Object.keys(routePaths).reduce((prev, next) => {
  prev.push(routePaths[next]);
  return prev;
}, []);
