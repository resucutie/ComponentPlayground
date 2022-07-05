import * as React from "react";
import { Flex, MenuRadioItemProps, ContextMenu } from "ittai/components";
import { ContextMenu as ContextMenuHandler } from "ittai/webpack"
//@ts-ignore
import styles from "./HeaderOptions.scss"

interface Option {
    name: string
    options: MenuRadioItemProps[]
}

export default ({options}: {options: Option[]}) => {
    return <Flex className={styles.wrapper}>
        {options.map(option => {
            return <div className={styles.pill}
                onClick={e => ContextMenuHandler.openContextMenu(e, () => {
                    return <ContextMenu navId={option.name} onClose={ContextMenuHandler.closeContextMenu}>
                        {option.options.map(r => <ContextMenu.MenuRadioItem {...r}/>)}
                    </ContextMenu>})}
            >
                {option.name}
            </div>
        })}
    </Flex>
}