export class BarcodeScanner extends EventTarget {
    constructor(options = {}) {
        super();

        options = Object.assign({
            timeOut: 130,
            characterCount: 13
        }, options);

        this.timeOut = options.timeOut;
        this.characterCount = options.characterCount;
        this.timer = Date.now();
        this.capture = '';
        this.target = new EventTarget();
        document.addEventListener('keypress', this.keypress.bind(this));
    }

    keypress(e) {
        // Set current time
        let now = Date.now();

        // If out timer is out, we need to reset because it was not a barcode
        if (now - this.timer > this.timeOut) {
            this.reset();
        }

        // It seems we are still fast enough to be a barcode, so add to capture
        let sinceFirst = now - this.timer;
        if (sinceFirst < this.timeOut) {
            this.capture += e.key

            // It seems we managed to get enough characters within the time out, send scan!
            if (this.capture.length === this.characterCount) {
                this.dispatchScanEvent();
            }
        }
    }

    dispatchScanEvent(){
        let event = new CustomEvent('scan', {detail: this.capture});
        this.dispatchEvent(event);
        this.reset();
    }

    reset() {
        this.timer = Date.now();
        this.capture = '';
    }
}
