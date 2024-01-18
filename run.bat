@echo off

REM Array of suites
set "suites=login  createproject createadmin downloadcsv searchuser uploadfile"

REM Loop through the array and run npm commands
for %%s in (%suites%) do (
    call npm run %%s
)

REM Generate and serve Allure report
call npm run publish