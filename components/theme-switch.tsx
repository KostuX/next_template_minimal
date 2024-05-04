import React from "react";
import {Switch, VisuallyHidden, useSwitch} from "@nextui-org/react";
import {SunFilledIcon} from "../components/icons";
import {MoonFilledIcon} from "../components/icons";
import { useTheme } from "next-themes";
export const ThemeSwitch = (props) => {
  const { theme, setTheme } = useTheme();
  const {
    Component, 
    slots, 
    isSelected, 
    getBaseProps, 
    getInputProps, 
    getWrapperProps
  } = useSwitch(props);

  if(isSelected){setTheme("dark")}else{setTheme('light')}

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <SunFilledIcon width={undefined} height={undefined}/> : <MoonFilledIcon width={undefined} height={undefined}/>}
          </div>
      </Component>

    </div>
  )
}



