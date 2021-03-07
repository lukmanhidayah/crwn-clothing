import { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import dataSection from "./data-directory";

import "./Directory.scss";

const Directory = () => {
  const [sections] = useState(dataSection);

  return (
    <div className="directory-menu">
      {sections.map((res) => {
        return (
          <MenuItem
            key={res.id}
            title={res.title}
            imageUrl={res.imageUrl}
            size={res.size}
          />
        );
      })}
    </div>
  );
};

export default Directory;
