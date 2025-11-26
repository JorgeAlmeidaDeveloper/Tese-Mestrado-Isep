import React, { useState } from 'react';
import { Download } from 'lucide-react';

const WBSDiagram = () => {
  const [showLegend, setShowLegend] = useState(true);

  return (
    <div>
      {/* Header ISEP Style */}
      <h2>ISEP - WBS Diagram</h2>
    </div>
  );
};

export default WBSDiagram;
