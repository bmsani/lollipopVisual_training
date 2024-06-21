/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import { VDataTtem } from "./interface";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
  defaultColor = new formattingSettings.ColorPicker({
    name: "defaultColor",
    displayName: "Default color",
    value: { value: "" },
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Text Size",
    value: 12,
  });

  circleWidth = new formattingSettings.NumUpDown({
    name: "circleWidth",
    displayName: "circle Width",
    value: 10,
  });

  name: string = "dataPoint";
  displayName: string = "Lollipop settings";
  slices: Array<FormattingSettingsSlice> = [this.defaultColor, this.fontSize, this.circleWidth];
}

/**
 * visual settings model class
 *
 */
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
  // Create formatting settings model formatting cards
  dataPointCard = new DataPointCardSettings();

  cards = [this.dataPointCard];

  populateColorSelector(dataPoints: VDataTtem[]) {
    let slices = this.dataPointCard.slices;
    if (dataPoints) {
      slices.push(
        new formattingSettings.ColorPicker({
          name: "dataPointColor",
          displayName: "Datapoint color",
          value: { value: `${dataPoints.forEach((data) => data.color)}` },
          selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
          // altConstantSelector: selection.getSelector(),
          instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule,
        })
      );
    }
  }
}
