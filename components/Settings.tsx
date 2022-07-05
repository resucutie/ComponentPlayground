import * as React from "react";
import { useState } from "react";
import { Spinner, Switch, SwitchItem, Category, Flex, Button, ButtonColors, DiscordIcon } from "ittai/components";
import * as settings from "ittai/settings"
import HeaderOptions from "./HeaderOptions";

export default function ExampleSettingsPage(): JSX.Element {
    const [switchValue, setSwitchValue] = useState(settings.get("funnySetting", false))
    return (<>
        <Category title={"Buttons"}>
            <ButtonDisplay/>
        </Category>
        <Category title={"Spinners"}>
            <Flex justify={Flex.Justify.CENTER} align={Flex.Align.CENTER}>
                <Spinner />
                <Spinner type={Spinner.Type.CHASING_DOTS}/>
                <Spinner type={Spinner.Type.LOW_MOTION} />
                <Spinner type={Spinner.Type.PULSING_ELLIPSIS} />
                <div data-note="This DIV was added due to width issues. No need to worry">
                    <Spinner type={Spinner.Type.SPINNING_CIRCLE} />
                </div>
            </Flex>
        </Category>
        <Category title={"Switches"}>
            <SwitchItem value={switchValue}
                onChange={(val) => {
                    settings.set("funnySetting", val);
                    setSwitchValue(val);
                    console.log("funnySetting is now", val);
                }}
                note="I am gay"
            >Funni setting</SwitchItem>
            <SwitchItem value={switchValue}
                onChange={(val) => {
                    settings.set("funnySetting", val);
                    setSwitchValue(val);
                    console.log("funnySetting is now", val);
                }}
                disabled={true}
            >No funni setting?</SwitchItem>
            <Switch checked={switchValue} onChange={(val) => {
                settings.set("funnySetting", val);
                setSwitchValue(val);
                console.log("funnySetting is now", val);
            }}/>
        </Category>
    </>)
}

const ButtonDisplay = () => {
    const [color, setColor] = useState("BRAND")
    const [look, setLook] = useState("FILLED")
    const [size, setSize] = useState("MEDIUM")

    const options = [
        {
            name: "Colors",
            options: Object.entries(Button.Colors).map(([key]) => ({
                id: key,
                label: key,
                checked: color === key,
                action: () => setColor(key),
            }))
        },
        {
            name: "Looks",
            options: Object.entries(Button.Looks).map(([key]) => ({
                id: key,
                label: key,
                checked: look === key,
                action: () => setLook(key),
            }))
        },
        {
            name: "Sizes",
            options: Object.entries(Button.Sizes).map(([key]) => ({
                id: key,
                label: key,
                checked: size === key,
                action: () => setSize(key),
            }))
        }
    ]

    return <>
        <HeaderOptions options={options}/>
        <Flex justify={Flex.Justify.CENTER} align={Flex.Align.CENTER}>
            <Button
                size={(Button.Sizes as any)[size]}
                color={(Button.Colors as any)[color]}
                look={(Button.Looks as any)[look]}
            >{size === "ICON" ? <DiscordIcon name="At"/> : "Example Button"}</Button>
            <Button disabled={true}
                size={(Button.Sizes as any)[size]}
                color={(Button.Colors as any)[color]}
                look={(Button.Looks as any)[look]}
            >{size === "ICON" ? <DiscordIcon name="At"/> : "Example Button"}</Button>
        </Flex>
    </>
}