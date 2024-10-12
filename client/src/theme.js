// color design tokens export
export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    },
    yellow: {
        0: "#FFFDE7",
        10: "#FFF9C4",
        50: "#FFF59D",
        100: "#FFF176",
        200: "#FFEE58",
        300: "#FFEB3B",
        400: "#FDD835",
        500: "#FBC02D",
        600: "#F9A825",
        700: "#F57F17",
        800: "#F9A825",
        900: "#F57F17",
        1000: "#FFEB3B",
    },
    blue: {
        0: "#E3F2FD",
        10: "#BBDEFB",
        50: "#90CAF9",
        100: "#64B5F6",
        200: "#42A5F5",
        300: "#2196F3",
        400: "#1E88E5",
        500: "#1976D2",
        600: "#1565C0",
        700: "#0D47A1",
        800: "#0A36B1",
        900: "#002171",
        1000: "#0000FF",
    },
    red: {
        0: "#FFEBEE",
        10: "#FFCDD2",
        50: "#EF9A9A",
        100: "#E57373",
        200: "#EF5350",
        300: "#F44336",
        400: "#E53935",
        500: "#D32F2F",
        600: "#C62828",
        700: "#B71C1C",
        800: "#981717",
        900: "#7E1414",
        1000: "#FF0000",
    },
    green: {
        0: "#E8F5E9",
        10: "#C8E6C9",
        50: "#A5D6A7",
        100: "#81C784",
        200: "#66BB6A",
        300: "#4CAF50",
        400: "#43A047",
        500: "#388E3C",
        600: "#2E7D32",
        700: "#1B5E20",
        800: "#154D1E",
        900: "#0D3316",
        1000: "#00FF00",
    },
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          dark: colorTokens.primary[200],
                          main: colorTokens.primary[500],
                          light: colorTokens.primary[800],
                      },
                      neutral: {
                          dark: colorTokens.grey[100],
                          main: colorTokens.grey[200],
                          mediumMain: colorTokens.grey[300],
                          medium: colorTokens.grey[400],
                          light: colorTokens.grey[700],
                      },
                      background: {
                          default: colorTokens.grey[900],
                          main: colorTokens.grey[800],
                          secondary: colorTokens.grey[700],
                          alt: colorTokens.grey[800],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          dark: colorTokens.primary[700],
                          main: colorTokens.primary[500],
                          light: colorTokens.grey[100],
                      },
                      neutral: {
                          dark: colorTokens.grey[700],
                          main: colorTokens.grey[500],
                          mediumMain: colorTokens.grey[400],
                          medium: colorTokens.grey[300],
                          light: colorTokens.grey[50],
                      },
                      background: {
                          default: colorTokens.grey[0],
                          main: colorTokens.grey[50],
                          secondary: colorTokens.grey[10],
                          alt: colorTokens.green[10],
                      },
                  }),
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
