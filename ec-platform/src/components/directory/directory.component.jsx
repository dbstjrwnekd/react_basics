import React, { useState, useEffect } from "react";
import MenuItem from "../menu-item/menu-item.component";
import sectionData from "./directory.data";

import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(sectionData);
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </div>
  );
};

export default Directory;
