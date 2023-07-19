# Getcontact TS

Unofficial Getcontact Library in Typescript. Fork from javascript version [urip-getcontact](https://github.com/subekti404dev/urip-getcontact)

## Install

```bash
npm i getcontact-ts
```

## Usage

```typescript
import Getcontact from "getcontact-ts";

const getcontact = new Getcontact("GETCONTACT_TOKEN", "GETCONTACT_KEY");

getcontact
  .checkNumber("08123456789")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

## How to Get Token

Requirements: Android with ROOT-rights (or emulator).

- Install and login into getcontact
- Open in filemanager of phone `/data/data/app.source.getcontact/shared_prefs/GetContactSettingsPref.xml`

```bash
GETCONTACT_KEY: FINAL_KEY
GETCONTACT_TOKEN: TOKEN
```

More detail check this [YT Video](https://www.youtube.com/watch?v=sFuAMxQLVdg)
