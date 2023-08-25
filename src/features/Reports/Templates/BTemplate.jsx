import React, { useRef, useEffect } from "react";

const BTemplate = ({ triggerHandler }) => {
  const refTemplate = useRef(null);

  useEffect(() => {
    let template = refTemplate.current.outerHTML;
    triggerHandler(template);
  }, []);

  return (
    <div ref={refTemplate}>
      <div>
        <h2>2 - Template heading B </h2>
        <p>Template body content for testing</p>
      </div>
    </div>
  );
};

export default BTemplate;
