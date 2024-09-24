import {setTimeout} from 'timers/promises';

describe('Working test suite', () => {
  for (let i = 1; i <= 20; i++) {
    it(`should pass ${i}`, async () => {
      await setTimeout(200);
      expect(true).toBe(true);
    });
  }
});
