// Gets called only when the user clicks the "generate" button 
function drawBarcode() {
    const input = document.getElementById('barcode-input');
    const { value } = input;

    const fontSizeInput = document.getElementById('barcode-font-size');
    const fontSize = fontSizeInput.value;

    const barcodeHeightInput = document.getElementById('barcode-height');
    const barcodeHeight = barcodeHeightInput.value;
	
	const barcodeMarginInput = document.getElementById('barcode-margin');
    const barcodeMargin = barcodeMarginInput.value;
	
	const barcodeWidthInput = document.getElementById('barcode-width');
    const barcodeWidth = barcodeWidthInput.value;
    
	const barcodePInput = document.getElementById('barcode-position');
    const barcodeP = barcodePInput.value;
  
    const barcodeTInput = document.getElementById('barcode-text');
    const barcodeT = barcodeTInput.value;
    
    const barcodeOInput = document.getElementById('barcode-position');
    const barcodeO = barcodeOInput.value;
    
     const barcodeTypeO = document.getElementById('barcode-type');
    const barcodeType = barcodeTypeO.value;
    

    // In the docs, the left hand side here, the key (displayValue, fontSize, height) are all what the docs call it
    // the variables names (fontSize, barcodeHeight) are OURS, we can name em whatever.
    const options = {
        fontSize: fontSize,
		textMargin: barcodeMargin,
		width: barcodeWidth,
        height: barcodeHeight,
        textPosition: barcodeP,
        displayValue: barcodeT,
		textPosition: barcodeO,
        format: barcodeType,
    };

    JsBarcode("#barcode", value, options); // This is the heavy lifiting of barcode.js
}

// Initialize the default barcode
drawBarcode();

// Set up an event listener to update the barcode when the
// button is clicked
const button = document.getElementById('generate-button');
button.addEventListener('click', drawBarcode);