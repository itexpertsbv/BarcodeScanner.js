# IT Experts Barcode scanner

When working with plug-and-play USB barcode scanners, it can be a pain to know when a barcode has been scanned. Usually these scanners will be set up as keyboard and "very quickly type" the barcode. We leverage this to detect whether a barcode was scanned. Normally a barcode scanner will type a character within 10ms. Therefore an EAN-13 barcode will need at most 130ms to complete. As a human you'd be fast if you typed a single character every 130ms.

---

## Usage
