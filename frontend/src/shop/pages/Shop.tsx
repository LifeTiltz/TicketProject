import React, { useState } from 'react';
import { ShopContent } from '../components/ShopContent';
import { TabButtons } from '../components/TabButtons';
import './Shop.css';

export const tabs = [
  {
    name: "tab1",
    label: "Tickets",
    content: [
      {
        title: "Day Ticket",
        description: "lorem ipsum dolset dolorum",
        price: "400 Ft",
        duration: "24 h"
      },
      {
        title: "Day Ticket 2",
        description: "lorem ipsum dolset dolorum",
        price: "400 Ft",
        duration: "24 h"
      },
    ]
  },
  {
    name: "tab2",
    label: "Passes",
    content: [
      {
        title: "Monthly Pass",
        description: "lorem ipsum dolset dolorum",
        price: "1000 Ft",
        duration: "24 h"
      },
      {
        title: "Yearly Pass",
        description: "lorem ipsum dolset dolorum",
        price: "2000 Ft",
        duration: "24 h"
      },
    ]
  },
]

export const Shop = () => {
  const [currentTab, setCurrentTab] = useState('tab1');
  return (
    <div className="tabContainer">
      <h1 className='shopTitle'>Tickets & Passes</h1>
      <div className="tabs">
        <TabButtons setCurrentTab={setCurrentTab} buttons={tabs} currentTab={currentTab} />
        <ShopContent shopItems={tabs.find(tab => tab.name === currentTab)?.content || []} />
      </div>
    </div>
  )
}
