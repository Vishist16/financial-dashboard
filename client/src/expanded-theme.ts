
import { Pallete, PaletteColor } from "@mui/material/styles/createPalette"; // eslint-disable-line

declare module "@mui/material/styles/createPalette"{
    interface PaletteColor{
        [key: number]: string;
    }
    interface Pallete{
        tertiary: PaletteColor;
    }
}
