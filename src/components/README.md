# App Components
This directory contains all the custom Components created for the app.

### AppDrawer
The main drawer of the dashboard containing links leading to other pages.
Props:
This component currently has no props. It receives all its data from the AppContext and the drawer.js file in the 
data directory.


### AppListItem
Built on top of the components of ListItem in Mui. Returns a ListItem.
Props:
Name            | Type           | Required     | Description
----------------|----------------|--------------|--------------------------------------------------------------
title           |String          | True         | Displays the main text of the list item.
subtitle        |String          | False        | Displays the subtitle of the list item.
Icon            |React Node      | False        | Mounts an icon component on the left side of the list item.
image           |String          | False        | Displays an avatar image in the list item.

### Main
The section where the main content of the page is displayed. It contains and separates the page from the AppDrawer
and the AppBar Components. It receives some of its data from the AppContext.

Props
Name            | Type           | Required     | Description
----------------|----------------|--------------|---------------------------------------------------------------
children        |React Node      | True         | Component(s) that would be mounted.    
Name            | Type           | Required     | Description