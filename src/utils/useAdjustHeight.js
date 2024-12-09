import { useState } from "react";
const useAdjustHeight = (height) => {
  const [heroHeight, setHeroHeight] = useState("100vh");

  if (height) {
    const itemHeight = height.offsetHeight;
    const styles = getComputedStyle(height);

    const marginTop = parseInt(styles.marginTop);
    const marginBottom = parseInt(styles.marginBottom);

    setHeroHeight(`calc(100vh - ${itemHeight + marginTop + marginBottom})`);
  }

  return heroHeight;
};

export default useAdjustHeight;
