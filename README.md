# FHIRPath 🔥 Jotai
> Make FHIRPath calculations reactive using Jotai.

Ever wanted to make your FHIRPath expressions reactive? Now you can! This library enables the use of FHIRPath expressions in a reactive manner using Jotai.

> [!IMPORTANT]
> This repository is still in an early stage and not production-ready yet. 📢 Stay tuned for more info. 👋 Reach out if you'd like to help.

<!--
## Installation
```bash
npm install fhirpath-jotai
```
-->

## Usage

```tsx
import { atom } from 'jotai';
import { fhirPathAtom } from 'fhirpath-jotai';

const heightAtom = atom(180);
const weightAtom = atom(80);

const bmiExpressionAtom = fhirPathAtom(undefined, '%weight / (%height/100).power(2)', {
  weight: weightAtom,
  height: heightAtom,
});
```

## Granular updates 🎯

The `expressionAtom` will only update when the values it depends on change. This means that if you have multiple expressions that rely on the same atoms, only the expressions that are affected by the change will update.
![image](./screenshot.gif)
