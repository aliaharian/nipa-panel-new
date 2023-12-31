import React, {useEffect} from "react";
import "./App.css";
import Router from "./Routes/Router";
import {SnackbarProvider} from "notistack";
import {SnackbarUtilsConfigurator} from "./app/utils/SnackbarUtils";
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation();
    //change lang based on nipa-lang in localstorage
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem(process.env.REACT_APP_LANG_STORAGE_KEY || "") || "fa");
    }, [])
    document.body.dir = i18n.dir();

    return (
        <div className="App">
            <SnackbarProvider>
                <SnackbarUtilsConfigurator/>
                <Router/>
            </SnackbarProvider>
        </div>
    );
}

export default App;
