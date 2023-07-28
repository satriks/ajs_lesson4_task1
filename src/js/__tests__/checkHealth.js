import checkHealth from '../checkHealth';

// test('check health', () => {
//   const data = { name: 'Маг', health: 90 };
//   expect(checkHealth(data)).toBe('healthy');
// });

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 40 }, 'wounded'],
  ['critical', { name: 'Маг', health: 10 }, 'critical'],
  ['dead', { name: 'Маг', health: 0 }, 'dead'],
])(
  ('%s status for %j with current hp of %d should be returned as "%s"'),
  (name, char, expected) => {
    expect(checkHealth(char)).toBe(expected);
  },
);
