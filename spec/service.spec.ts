import { colorize } from '../src/service';
test('test runs', () => {
  expect(true).toBe(true);
})

test('Properly escapes line with color escapes', () => {
  const line = '·[30mTest·[39m';
  const formatted = colorize(line);
  const expected ='<span class="🌈-30m">Test</span>' ;
  expect(formatted).toEqual(expected);
})
