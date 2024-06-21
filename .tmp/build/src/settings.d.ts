import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import { VDataTtem } from "./interface";
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    circleWidth: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * visual settings model class
 *
 */
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    cards: DataPointCardSettings[];
    populateColorSelector(dataPoints: VDataTtem[]): void;
}
export {};
