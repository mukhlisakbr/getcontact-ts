# Getcontact TS

Unofficial Getcontact Library in Typescript

## Install

```bash
yarn add getcontact-ts
```

## Usage

```typescript
import Getcontact from 'getcontact-ts';

const getcontact = new Getcontact("GETCONTACT_TOKEN", "GETCONTACT_KEY");

getcontact.checkNumber("08123456789")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
```

## How to Get Token

Requirements: Android with ROOT-rights (or emulator).

- Install and login into getcontact
- Open in filemanager of phone `/data/data/app.source.getcontact/shared_prefs/GetContactSettingsPref.xml`

```bash
GETCONTACT_KEY: FINAL_KEY
GETCONTACT_TOKEN: TOKEN
```

Video Tutorial:

[![video tutorial](https://img.youtube.com/vi/sFuAMxQLVdg/0.jpg)](https://www.youtube.com/watch?v=sFuAMxQLVdg)

## Credits

[@subekti404dev](https://github.com/subekti404dev)
