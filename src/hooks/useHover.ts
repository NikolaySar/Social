import { useState } from 'react';

const useHover = (): [boolean, Object] => {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };

  return [hovering, onHoverProps];
};

export default useHover;
