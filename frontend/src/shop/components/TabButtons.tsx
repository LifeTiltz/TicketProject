import React from "react";
import "./TabButtons.css"

interface TabButton {
  label: string
  name: string
}

interface TabButtonsProps {
  buttons: TabButton[]
  setCurrentTab: (tabName: string) => void
  currentTab: string
}

export const TabButtons: React.FC<TabButtonsProps> = ({ buttons, setCurrentTab, currentTab }) => {
  return (
    <div>
      {buttons.map(tabButton => {
        return (
          <button
            onClick={() => setCurrentTab(tabButton.name)}
            className={(tabButton.name === currentTab) ? 'active' : ''}>
            {tabButton.label}
          </button>
        )
      })}
    </div>
  );
}
