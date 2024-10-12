import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "scenes/layout";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ComplaintPage from "scenes/complaintPage";
import MessMenu from "scenes/messMenu";
import Expenses from "scenes/expensesPage";
import ForgotCred from "components/ForgotCred";
import ResetPassword from "components/ResetPassword";

import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import Analysis from "scenes/analysis";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));

    return (
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/forgot" element={<ForgotCred />} />
                        <Route
                            path="resetpassword"
                            element={<ResetPassword />}
                        />
                        <Route element={<Layout />}>
                            <Route
                                path="/home"
                                element={
                                    isAuth ? <HomePage /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/complaint"
                                element={
                                    isAuth ? (
                                        <ComplaintPage />
                                    ) : (
                                        <Navigate to={"/"} />
                                    )
                                }
                            />
                            <Route
                                path="/menu"
                                element={
                                    isAuth ? <MessMenu /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/expenses"
                                element={
                                    isAuth ? <Expenses /> : <Navigate to="/" />
                                }
                            />
                            <Route
                                path="/analysis"
                                element={
                                    isAuth ? <Analysis /> : <Navigate to="/" />
                                }
                            />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
