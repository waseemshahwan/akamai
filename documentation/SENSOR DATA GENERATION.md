# SENSOR DATA GENERATION



Sensor data is stored in `bmak["sensor_data"]`. It is set at around line 728 in `resources/annotated-akamai.js`.



# Steps (in order of production):



## `bmak["ver"]`



Version of akamai script. Can be found as first property of `bmak` at the top of the script.



## `"-1,2,-94,-100,"`



## `n` or `bmak['gd']()`



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

  `navigator["plugins"] ? navigator["plugins"]["length"] : -1;`

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

  Is equal to `window.screen?.availWidth || -1`

- `","`

- `o`

  Is equal to `window.screen?.availHeight || -1`

- `","`

- `m`

  Is equal to `window.screen?.width || -1`

- `","`

- `r`

  Is equal to `window.screen?.height || -1`

- `","`

- `c`

  Is equal to `window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1)`

- `","`

- `i`

  Is equal to `window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1)`

- `","`

- `b`

  Is equal to `window.outerWidth || -1`

- `","`

- `bmak["bd"]()`

  Array of

  * `",cpen:" + (window.callPhantom ? 1 : 0)`
  * `"i1:" + (window.ActiveXObject && "ActiveXObject" in window && 1)`
  * `"dm:" + ("number" == typeof document.documentMode ? 1 : 0)`
  * `"cwen:" + (window.chrome && window.chrome.webstore ? 1 : 0)`
  * `"non:" + (navigator.onLine ? 1 : 0)`
  * `"opc:" + window.opera ? 1 : 0`
  * `"fc:" + "undefined" != typeof InstallTrigger ? 1 : 0`
  * `"sc:" + window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0`
  * `"wrc:" + ("function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0)`
  * `"isc:" + ("mozInnerScreenY" in window ? window.mozInnerScreenY : 0)`
  * `"vib:" + ("function" == typeof navigator.vibrate ? 1 : 0)`
  * `"bat:" + ("function" == typeof navigator.getBattery ? 1 : 0)`
  * `"x11:" + (Array.prototype.forEach ? 0 : 1)`
  * `"x12:" + ("FileReader" in window ? 1 : 0)`

  joined by `,`.

- `","`

- `a`

  Is equal to `bmak["ab"](bmak["uar"]())`

  which is:

  user agent char codes sum (ua.charCodeAt(i) for i in range ua.length)

  `-2` for try catch error

  `-1` for null user agent

- `","`

- `k`

  `Math.random() + ""`

- `","`

- `e`

  `bmak["start_ts"] / 2` which is half of Date.now() when (if) it was executed earlier

- `","`

- `bmak["brv"]`

  Is brave? `navigator.brave ? navigator.brave.isBrave().then(i => bmak["brv"] = i ? 1 : 0).catch(_ => bmak["brv"] = 0)`

- `",loc:"`

- `bmak["loc"]`

  A literal empty string `""`



## `"-1,2,-94,-101,"`

## `i`

Consists of:

* `o`

  `window.DeviceOrientationEvent ? "do_en" : "do_dis"`

* `","`

* `m`

  `window.DeviceMotionEvent ? "dm_en" : "dm_dis"`

* `","`

* `r`

  `window.TouchEvent ? "t_en" : "t_dis"`

## `"-1,2,-94,-105,"`

## `bmak["informinfo"]`

`bmak["getforminfo"]()`

TODO: seems like this is empty because it isnt generated until `c` under.

## `"-1,2,-94,-102,"`

## `c`

`bmak["getforminfo"]()`

`TODO`

## `"-1,2,-94,-108,"`

## `bmak["kact"]`

key events. kact is added onto after every key down / up / press.

`ke_cnt_lmt` is hardcoded at 150. Dont send more than 150 events in sensor data.

is possibly is:

`u = bmak["ke_cnt"] + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;`

>  `ke_cnt is key count, +1 for every click, starts at 0`

> `a` is `1` for keydown or onkeydown, `2` for keyup or onkeyup, `3` for keypress or onkeypress

> `s` is `Date.now() - bmak["start_ts"]`

> `n` is `-2` for normal key, and the key code for meta keys, ctrl keys, etc (TODO)

> `l` is always `0`

> `d` is ` 8 * (ev.shiftKey ? 1 : 0) + 4 * (ev.ctrlKey ? 1 : 0) + 2 * (ev.metaKey ? 1 : 0) + (ev.altKey ? 1 : 0)`

> `k` is `bmak.gf(null)` which gets `bmak.ab(document.activeElement)` or `-1` if activeElement is `null`.

` ev.isTrusted != undefined && !ev.isTrusted && (u += ",0")`

`u += ";"`

`bmak["kact"] += u`

Note: for autofill, this is the corresponding key events from **chrome**:

```
1,2,6646,undefined,0,0,-1;
2,1,6647,undefined,0,0,-1;
3,2,6648,undefined,0,0,-1;
```

## `"-1,2,-94,-110,"`

## `bmak["mact"]`

mouse events. mact is updated on mousedown, mouseup, mousemove.



`mme_cnt_lmt` is hardcoded at `100`. Don't send more than 100.

`mduce_cnt_lmt` is hardcoded at `75`. ^

`mme_cnt` is mouse movement event count

`mduce_cnt` is mouse down up click event count

`ev` is the mouse event itself

`a` is `1` for mouse movement, `2` for mouse click, `3` for mouse down, `4` for mouse up

`n = Math.floor(pageX || clientX)`

`o = Math.floor(pageY || clientY)`

`m = ev.toElement || ev.target`

`r` is `document.activeElement` hash using `bmak.ab`

`i` is time since `start_ts` in ms

`c` is `bmak["me_cnt"] + "," + a + "," + i + "," + n + "," + o`

if event is NOT mouse move, then

> `c` is `c + ',' + r`
>
> `b` is `ev.which` or `ev.button`
>
> `b != null && b != 1 && (c = c + ',' + b)`

if `event.isTrusted` is `false` then

> `c += ,it0`

`c += ';'`

`bmak["mact"] = bmak["mact"] + c`

## `"-1,2,-94,-117,"`

## `bmak["tact"]`

touch events.

`tme_cnt` is touch move event

`tduce_cnt` is touch down up cancel event i think

`a` is `1` for touchmove, `2` for touchstart, `3` for touchend, `4` for touchcancel

`e` is event

`n` is `e.pageX || e.clientX` floored

`o` is `e.pageY || e.clientY` floored

`m` is time since `start_ts`

`r = bmak["te_cnt"] + "," + a + "," + m + "," + n + "," + o`

if `e.isTrusted` is `false`, `r += ',0'`

`r += ';'`

`bmak["tact"] += r`

## `"-1,2,-94,-111,"`

## `bmak["doact"]`

device orientation events

only send max of two events per touch event (`doa_throttle` is reset every touch event, and it has to be less than 2 to continue this event)

`doe_cnt_lmt` is 10.

`a` is time since `start_ts` in ms.

`e` is `parseFloat(event.alpha).toFixed(2)`

`n` is `parseFloat(event.beta).toFixed(2)`

`o` is `parseFloat(event.gamma).toFixed(2)`

`m = bmak["doe_cnt"] + "," + a + "," + e + "," + n + "," + o`

if `isTrusted` is false, `m += ',0'`

`bmak["doact"] += m + ';'`



## `"-1,2,-94,-109,"`

## `bmak["dmact"]`

device motion events

only send max of two events per touch event (`dma_throttle` is reset every touch event, and it has to be less than 2 to continue this event)

`dme_cnt_lmt` is 10.

`t` is event

`a` is time since `start_ts`

if `t.acceleration` otherwise `e = -1, n = -1, o = -1`

> `e` is `parseFloat(t.acceleration.x).toFixed(2)`
>
> `n` is `parseFloat(t.acceleration.y).toFixed(2)`
>
> `o` is `parseFloat(t.acceleration.z).toFixed(2)`

if `t.accelerationIncludingGravity` otherwise `m = -1, r = -1, i = -1`

> `m` is `parseFloat(t.accelerationIncludingGravity.x).toFixed(2)`
>
> `r` is `parseFloat(t.accelerationIncludingGravity.y).toFixed(2)`
>
> `i` is `parseFloat(t.accelerationIncludingGravity.z).toFixed(2)`

if `t.rotationRate`

> `c`

## `"-1,2,-94,-114,"`

## `bmak["pact"]`

pointer events

## `"-1,2,-94,-103,"`

## `bmak["vcact"]`

on blur, on focus

## `"-1,2,-94,-112,"`

## `b`

## `"-1,2,-94,-115,"`

## `w`

## `"-1,2,-94,-106,"`

## `d`

## `"-1,2,-94,-119,"`

## `bmak["mr"]`

## `"-1,2,-94,-122,"`

## `S`
## `"-1,2,-94,-123,"`
## `B`
## `"-1,2,-94,-124,"`
## `x`
## `"-1,2,-94,-126,"`
## `M`
## `"-1,2,-94,-127,"`
## `bmak["nav_perm"]`
## `"-1,2,-94,-70,"`
## `bmak["fpcf"]["fpValstr"]`
## `"-1,2,-94,-80,"`
## `y`
## `"-1,2,-94,-116,"`
## `bmak["o9"]`
## `"-1,2,-94,-118,"`
## `P`
## `"-1,2,-94,-129,"`
## `E`
## `"-1,2,-94,-121,"`