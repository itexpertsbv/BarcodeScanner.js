# Barcode scanner

![](https://img.shields.io/badge/npm-1.0.0-green)

A simple `EventTarget` for JavaScript to listen to barcode scans done with a keyboard barcode scanner.

When working with plug-and-play USB barcode scanners, it can be a pain to know when a barcode has been scanned. Usually these scanners will be set up as keyboard and "very quickly type" the barcode. We leverage this to detect whether a barcode was scanned. Normally a barcode scanner will type a character within 10ms. Therefore an EAN-13 barcode will need at most 130ms to complete. As a human you'd be fast if you typed a single character every 130ms (unless you are the flash).

---

## Installation
Using Yarn
```
yarn add @itexperts/barcode-scanner
```

Using NPM
```
npm i @itexperts/barcode-scanner
```

## Usage

```js
import {BarcodeScanner} from "@itexperts/barcode-scanner";

let options = {
  timeOut: 130,
  characterCount: 13
}

let barcodeScanner = new BarcodeScanner(options);
barcodeScanner.addEventListener('scan', function(e){
    let barcode = e.detail;
    console.log(barcode);
});

```

## Options
|name|default value|description|
|--|--|--|
|timeOut|130|ms within which the characters must be typed|
|characterCount|13|Amount of characters (13 for EAN-13|
