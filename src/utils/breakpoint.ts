import { reactive } from "vue";

type Points = {
  [key: string]: number;
};

const $Points = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export class Breakpoint {
  public static points: Points;
  public static breakpoints;

  static init(points: Points = $Points) {
    Breakpoint.breakpoints = reactive({});
    Breakpoint.points = points;

    //  for(const point in points) {
    //   // registerMediaQuery(point, points[point]);
    //  }
  }

  // static is() {}
}
