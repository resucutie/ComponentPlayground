import { Plugin } from "ittai/entities";
import * as React from "react";
import SettingsPage from "./components/Settings";
export default class ExamplePlugin extends Plugin {
    start() {
        this.setSettingsPanel(() => React.createElement(SettingsPage));
    }

    stop() {}
}