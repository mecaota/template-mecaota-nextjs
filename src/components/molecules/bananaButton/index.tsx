import type { FC } from 'react';
import { useMemo, useState } from 'react';
import styles from './index.module.css';

export const BananaButton: FC = () => {
  const [count, setCount] = useState(0);
  const Three = 3;
  const dispBanana = useMemo(() => {
    if (count % Three === 0 || count.toString().includes(Three.toString())) {
      return 'バナナ';
    }
    return count.toString();
  }, [count]);

  return (
    <div>
      <button
        className={styles.bananaButton}
        onClick={() => setCount((count) => count + 1)}
        type="button"
      >
        count is: {dispBanana}
      </button>
    </div>
  );
};
