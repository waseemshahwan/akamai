# SENSOR DATA GENERATION



Sensor data is stored in `bmak["sensor_data"]`. It is set at around line 728 in `resources/annotated-akamai.js`.



# Steps (in order of production):



## `bmak["ver"]`



Version of akamai script. Can be found as first property of `bmak` at the top of the script.



## `"-1,2,-94,-100,"`



## `bmak['gd']()`



The return value is:

- `t`

  User agent

- `",uaend,"`

- `bmak["xagg"]`

  Fingerprint of possible event listeners. Can be generated like this:

```js
var t = window["addEventListener"] ? 1 : 0,
	a = window["XMLHttpRequest"] ? 1 : 0,
    e = window["XDomainRequest"] ? 1 : 0,
    n = window["emit"] ? 1 : 0,
    o = window["DeviceOrientationEvent"] ? 1 : 0,
    m = window["DeviceMotionEvent"] ? 1 : 0,
    r = window["TouchEvent"] ? 1 : 0,
    i = window["spawn"] ? 1 : 0,
    c = window["chrome"] ? 1 : 0,
    b = Function["prototype"]["bind"] ? 1 : 0,
    d = window["Buffer"] ? 1 : 0,
    s = window["PointerEvent"] ? 1 : 0;

try {
	var k = window["innerWidth"] ? 1 : 0;
} catch (t) {
	var k = 0;
}

try {
	var l = window["outerWidth"] ? 1 : 0;
} catch (t) {
	var l = 0;
}

return t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
```

- `","`

- `bmak["psub"]`

  Is equal to: `navigator.productSub`

- `","`

- `bmak["lang"]`

  Is equal to: `navigator.language`

- `","`

- `bmak["prod"]`

  Is equal to: `navigator.product ? navigator.product : "-"`

- `","`

- `bmak["plen"]`

  Is equal to length of navigator plugins or `-1` if plugins is undefined.

  `void 0 !== navigator["plugins"] ? navigator["plugins"]["length"] : -1;`

- `","`

- `bmak["pen"]`

  `window._phantom ? 1 : 0`

- `","`

- `bmak["wen"]`

  `window.webdriver ? 1 : 0`

- `","`

- `bmak["den"]`

  `window.domAutomation ? 1 : 0`

- `","`

- `bmak["z1"]`

  `bmak["z1"] = bmak["pi"](bmak["start_ts"] / (bmak["y1"] * bmak["y1"]));`

  `bmak["z1"] = parseInt(bmak["start_ts"] / (2016 * 2016));`

  `bmak["z1"] = parseInt(bmak["start_ts"] / 4064256);`

- `","`

- `bmak["d3"]`

  `bmak["d3"] = bmak["x2"]() % 1e7`

  `bmak["d3"] = Date.now() % 1e7 // NOT start_ts`

- `","`

- `n`

  Is equal to `window.screen?.availWidth? window.screen?.availWidth : -1`

- `","`

- `o`

  Is equal to `window.screen?.availHeight ? window.screen?.availHeight : -1`

- `","`

- `m`

  Is equal to `window.screen?.width ? window.screen?.width : -1`

- `","`

- `r`

  Is equal to `window.screen?.height ? window.screen?.height : -1`

- `","`

- `c`

- `","`

- `i`

- `","`

- `b`

- `","`

- `bmak["bd"]()`

- `","`

- `a`

- `","`

- `k`

- `","`

- `e`

- `","`

- `bmak["brv"]`

- `",loc:"`

- `bmak["loc"]`



## `"-1,2,-94,-101,"`

## `i`

## `"-1,2,-94,-105,"`

## `bmak["informinfo"]`

## `"-1,2,-94,-102,"`

\9. `c`

\10. `"-1,2,-94,-108,"`

\11. `bmak["kact"]`

\12. `"-1,2,-94,-110,"`

\13. `bmak["mact"]`

\14. `"-1,2,-94,-117,"`

\15. `bmak["tact"]`

\16. `"-1,2,-94,-111,"`

\17. `bmak["doact"]`

\18. `"-1,2,-94,-109,"`

\19. `bmak["dmact"]`

\20. `"-1,2,-94,-114,"`

\21. `bmak["pact"]`

\22. `"-1,2,-94,-103,"`

\23. `bmak["vcact"]`

\24. `"-1,2,-94,-112,"`

\25. `b`

\26. `"-1,2,-94,-115,"`

\27. `w`

\28. `"-1,2,-94,-106,"`

\29. `d`

\30. `"-1,2,-94,-119,"`

\31. `bmak["mr"]`

\32. `"-1,2,-94,-122,"`

\33. `S`

\34. `"-1,2,-94,-123,"`

\35. `B`

\36. `"-1,2,-94,-124,"`

\37. `x`

\38. `"-1,2,-94,-126,"`

\39. `M`

\40. `"-1,2,-94,-127,"`

\41. `bmak["nav_perm"]`

\42. `"-1,2,-94,-70,"`

\43. `bmak["fpcf"]["fpValstr"]`

\44. `"-1,2,-94,-80,"`

\45. `y`

\46. `"-1,2,-94,-116,"`

\47. `bmak["o9"]`

\48. `"-1,2,-94,-118,"`

\49. `P`

\50. `"-1,2,-94,-129,"`

\51. `E`

\52. `"-1,2,-94,-121,"`