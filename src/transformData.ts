"use strict";

import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import { VData, VDataTtem } from "./interface";

export function transformData(options: VisualUpdateOptions, defaultColor: string): VData {
  let data: VData;
  try {
    const dv = options.dataViews[0].categorical;
    const minValue = Math.min(<number>dv.values[0].minLocal, <number>dv.values[1].minLocal);
    const maxValue = Math.max(<number>dv.values[0].maxLocal, <number>dv.values[1].maxLocal);
    const target = <number>dv.values[1].values[0];
    const items: VDataTtem[] = [];
    let color: string;
    dv.categories[0].values.forEach((value, index) => {
      try {
        color = dv.categories[0].objects[index].dataPoint.dataPointColor["solid"].color;
        console.log(color);
      } catch (error) {
        color = defaultColor;
      }
      items.push({
        category: <string>dv.categories[0].values[index],
        value: <number>dv.values[0].values[index],
        color,
      });
    });
    data = {
      items,
      minValue,
      maxValue,
      target,
      formatString: dv.values[0].source.format || "",
    };
  } catch (error) {
    data = {
      items: [],
      minValue: 0,
      maxValue: 0,
      target: 0,
      formatString: "",
    };
  }
  return data;
}
