import { VisualFormattingSettingsModel } from "./settings";

export function setStyle(settings: VisualFormattingSettingsModel) {
  const style = document.documentElement.style;

  style.setProperty("--default-color", `${settings.dataPointCard.defaultColor.value.value}`);
  style.setProperty("--font-size", `${settings.dataPointCard.fontSize.value}px`);
}
