import React, { useRef, useEffect } from "react";

const CTemplate = ({ triggerHandler }) => {
  const refTemplate = useRef(null);

  useEffect(() => {
    let template = refTemplate.current.outerHTML;
    triggerHandler(template);
  }, []);

  return (
    <div ref={refTemplate}>
      <div>
        <h2>3 - Template heading C </h2>
        <p>Template body content for testing</p>
      </div>
    </div>
  );
};

export default CTemplate;
