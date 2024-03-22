import React from "react";
import TiersCards from "./tiers/TiersCards";
import { cardData } from "@/data/nav2";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto">
      {cardData.map((d) => (
        <TiersCards
          key={d.id}
          tierNo={d.tierNo}
          Inr={d.Inr}
          Cad={d.Cad}
          desc={d.desc}
          includedItems={d.includedItems}
          claim={d.claim}
          href={`/donation/perks-contribution?tierNo=${d.tierNo}&Inr=${d.Inr}`}
        />
      ))}
    </div>
  );
};

export default Sidebar;
