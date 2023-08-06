@echo off

REM Compile TypeScript using tsc
set error=
(tsc) 2>nul || set error=true

REM Continue even if there was an error during compilation
if not defined error (
    REM Rename the generated chess.js to chess.mjs
    ren dist\chess.js chess.mjs
) else (
    REM Rename the generated chess.js to chess.mjs
    ren dist\chess.js chess.mjs
)
