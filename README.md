### zGrid
---

A modern grid system using CSS3 Flexible Box(flex-box).

#### Demo and docs: http://zgrid.zerowp.com/
#### License: MIT

[![NPM](https://nodei.co/npm/zgrid.png?compact=true)](https://nodei.co/npm/zgrid/)

### Changelog:

**2.0.2**
* New: Added the modern version of grid, without support for Internet Explorer and other old browsers.

**2.0.1**
 * New: Use the prefix `-v` to add vertical gutter as well. Example`.zg-{?}-v-min-gutter`.

**2.0.0**
 * New: `.zg-{?}-min-gutter` for less space between columns.
 * New: `.zg-{?}-max-gutter` for more space between columns.
 * New: `.zg-{?}-space-between` Distribute items evenly. Items have a half-size space on either end.
 * New: `.zg-{?}-space-around` Distribute items evenly. The first item is flush with the start, the last is flush with the end.
 * Modified: `.zg-{?}-left` now it's `.zg-{?}-start` because it can be used to arrange the columns when they are in vertical direction.
 * Modified: `.zg-{?}-right` now it's `.zg-{?}-end` because it can be used to arrange the columns when they are in vertical direction.
 * Modified: `.zg-{?}-ltr` now it's `.zg-{?}-row`.
 * Modified: `.zg-{?}-rtl` now it's `.zg-{?}-row-reverse`. 
 * New: `.zg-{?}-column` display the columns in vertical order.
 * New: `.zg-{?}-column-reverse` display the columns in vertical order but in reverse order.
 * Source files are moved in `src` folder. Distributable files are moved in `dist` folder.
 
 _Other_
 * Demo style ported from LESS to SCSS.
 * Files are processed by Gulp. Prepros is removed from project.
 
**1.0.0**
 * Initial release


