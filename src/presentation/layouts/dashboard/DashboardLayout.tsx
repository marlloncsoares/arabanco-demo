import { themeCustom } from "@core/presentation/theme";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: themeCustom.colors.primary,
    },
  },
});

const DashboardLayout: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Box
          maxWidth="lg"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            maxWidth: "100vw",
            width: "100vw",
            height: "100vh",
            maxHeight: "100vh",
          }}
        >
          <Container maxWidth="lg" fixed>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default DashboardLayout;
