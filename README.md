# Possible Ways from which we can download / take screenshot of pdf from browser:
* Direct download btn. when pdf opens in the browser.
* Using inspect element we can go to the source of the pdf and download from there or take screenshot
Inspect element is accessible either by right click or by ctrl+shift+I  (element) / ctrl+shift+J (console) or by pressing F12 key and browser top menu to enable DOM inspector (Developer tools), all should be disable.
* View pdf link by viewing the source code by pressing ctrl+U
* Copy paste the contents of the pdf by selecting texts and copy it and paste it at another location.
* Using third party applications/extensions we can take screenshots or download pdfs.
* Disabling snip tools for the website and ctrl+P

# All should be disbaled : How??

* Disable Inspect element tool. (* Exception - user can go to browser menu and use DOM inspector )

* So, in react we can go for the react-pdf package from npm.

This module is a wrapper around pdf.js, an open-source project developed by Mozilla that displays PDFs in HTML. In terms of the base web components, react-pdf renders the PDF in a <canvas> tag, which has support for the onContextMenu event handler.

 
