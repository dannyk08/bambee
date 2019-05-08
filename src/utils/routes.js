import Home from "./../views/Home.vue";

export const routePaths = {
  home: {
    path: "/",
    name: "home",
    component: Home,
    label: "Create Account"
  },
  schedule: {
    path: "/schedule",
    name: "schedule",
    component: () =>
      import(
        /* webpackChunkName: "scheduleIntro" */ "./../views/ScheduleIntro.vue"
      ),
    label: "Schedule Intro"
  },
  try: {
    path: "/try",
    name: "try",
    component: () => import(/* webpackChunkName: "try" */ "./../views/Try.vue"),
    label: "Try Bambee"
  }
};

const reducedRoutePaths = Object.keys(routePaths).reduce((prev, next) => {
  prev.push(routePaths[next]);
  return prev;
}, []);

export const routes = reducedRoutePaths.map(({ label, ...args }) => ({
  ...args
}));

export const signupSteps = reducedRoutePaths.map(({ component, ...args }) => ({
  ...args
}));
