import { colorize, colorTheLogs } from '../src/service';
test('test runs', () => {
  expect(true).toBe(true);
})

test('Properly escapes line with color escapes', () => {
  const line = '[30mTest[39m';
  const formatted = colorize(line);
  const expected ='<span class="🌈-30m">Test</span>' ;
  expect(formatted).toEqual(expected);
})

test("Doesn't remove lines colored by AWS", () => {
  const lines = `
    <div>[Container] 2019/11/21 00:59:50 <span class="ace_running_command">Running command cd ../discovery</span> </div><div>[Container] 2019/11/21 00:59:50 <span class="ace_running_command">Running command cd ../discovery</span> </div> 
  `
  const formatted = colorize(lines);
  expect(formatted).toEqual(lines);
})

test('working on dom directly works correctly', () => {
  document.body.innerHTML = `
    <div class="ace_line"><div>    <span class="ace_invisible ace_invisible_space ace_invalid">·</span>[32m✓ Should have the page title About Extron Cloud<span class="ace_invisible ace_invisible_space ace_invalid">·</span>[39m </div></div>
    <div class="ace_line"><div>[Container] 2019/11/25 18:46:11 <span class="ace_running_command">Running command npm run $DEPLOYMENT_STAGE_NAME -- --params.greenville.password='$TAP_PASSWORD'</span> </div></div>    
  `
  colorTheLogs();
  expect(document.body.innerHTML).toEqual(`
    <div class="ace_line 🌈"><div>    <span class="🌈-32m">✓ Should have the page title About Extron Cloud</span> </div></div>
    <div class="ace_line 🌈"><div>[Container] 2019/11/25 18:46:11 <span class="ace_running_command">Running command npm run $DEPLOYMENT_STAGE_NAME -- --params.greenville.password='$TAP_PASSWORD'</span> </div></div>    
  `)
})
