@echo off

if /i %1==run (
    npm run dev -- -o
) else if /i %1==start (
    npm run dev
) else if /i %1==build (
    npm run build
) else (
    echo "%1" is not exist command.
)