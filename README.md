# FHIRPath 🔥 Jotai
> Make FHIRPath calculations reactive using Jotai.

Ever wanted to make your FHIRPath expressions reactive? Now you can! This library provides a way to use FHIRPath expressions in a reactive way using Jotai.

## Installation
```bash
npm install fhirpath-jotai
```

## Usage

```tsx
import { atom } from 'jotai';
import { expressionAtom } from 'fhirpath-jotai';

const heightAtom = atom(180);
const weightAtom = atom(80);

const bmiExpressionAtom = expressionAtom('%weight / (%height/100).power(2)', {
  weight: weightAtom,
  height: heightAtom,
});
```
