import s from"/v43/os-browserify@0.3.0/es2015/browser.js";import i from"/v43/escape-string-regexp@5.0.0/es2015/escape-string-regexp.js";var p=/\s+at.*[(\s](.*)\)?/,f=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,u=typeof s.homedir=="undefined"?"":s.homedir().replace(/\\/g,"/");function c(a,{pretty:l=!1,basePath:n}={}){let o=n&&new RegExp(`(at | \\()${i(n.replace(/\\/g,"/"))}`,"g");if(typeof a=="string")return a.replace(/\\/g,"/").split(`
`).filter(e=>{let r=e.match(p);if(r===null||!r[1])return!0;let t=r[1];return t.includes(".app/Contents/Resources/electron.asar")||t.includes(".app/Contents/Resources/default_app.asar")?!1:!f.test(t)}).filter(e=>e.trim()!=="").map(e=>(o&&(e=e.replace(o,"$1")),l&&(e=e.replace(p,(r,t)=>r.replace(t,t.replace(u,"~")))),e)).join(`
`)}export{c as default};