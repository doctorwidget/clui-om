******************
Drag & Drop
******************

Basic drag and drop is pretty simple to implement: ultimately you just need some
kind of HTML element with ``absolute`` CSS positioning. Then you dynamically
update the ``top`` and ``left`` CSS properties as the mouse moves. Of course,
the devil is in the details: you don't want to *always* follow the mouse, so you
need to detect start clicks, stop clicks, etcetera. 

