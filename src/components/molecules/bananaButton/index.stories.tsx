import { expect } from 'storybook/test';

import preview from '../../../../.storybook/preview';

import { BananaButton } from '.';

const meta = preview.meta({
  component: BananaButton,
});

export const Default = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button');

    // count=0: 0は3の倍数 → バナナ
    await expect(button).toHaveTextContent('count is: バナナ');

    // count=1: 該当なし → 1
    await userEvent.click(button);
    await expect(button).toHaveTextContent('count is: 1');

    // count=2: 該当なし → 2
    await userEvent.click(button);
    await expect(button).toHaveTextContent('count is: 2');

    // count=3: 3の倍数 → バナナ
    await userEvent.click(button);
    await expect(button).toHaveTextContent('count is: バナナ');

    // count=4〜12: 通過
    for (let i = 4; i <= 12; i++) {
      await userEvent.click(button);
    }

    // count=13: 3を含む数字 → バナナ
    await expect(button).toHaveTextContent('count is: バナナ');
  },
});
