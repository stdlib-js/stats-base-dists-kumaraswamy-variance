// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";var e=s,a=t;var r=function(s,t){var r;return e(s)||s<=0||e(t)||t<=0?NaN:(r=t*a(1+1/s,t),t*a(1+2/s,t)-r*r)};export{r as default};
//# sourceMappingURL=index.mjs.map
