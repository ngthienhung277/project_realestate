// utils/theme.js
import { extendTheme } from "@chakra-ui/react";

export const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;