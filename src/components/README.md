# Custom Components
This directory contains all the custom Components created for the app. Below is information about the various 
components and their props.

### AppDrawer
The main drawer of the dashboard containing links leading to other pages.

Props
This component currently has no props. It receives all its data from the AppContext and the drawer.js file in the 
data directory.


### AppListItem
Built on top of the components of ListItem in Mui. Returns a ListItem.

Props
Name            | Type           | Required     | Description
----------------|----------------|--------------|--------------------------------------------------------------
title           |String          | True         | Displays the main text of the list item.
subtitle        |String          | False        | Displays the subtitle of the list item.
Icon            |React Node      | False        | Mounts an icon component on the left side of the list item.
image           |String          | False        | An image url used to display an avatar image on the list item.


### AppRoutesContainer
Contains all the routes of the app.


### DashboardCard
Displays data summary in the dashboard

Props
Name                | Type           | Required     | Description
--------------------|----------------|--------------|---------------------------------------------------------------
Icon                |React Node      |False         |Displays an icon on the card.
title               |String, Number  |True          |Renders the title of the card.
value               |String, Number  |True          |Renders text below the title.
ChipIcon            |React Node      |False         |Renders an Icon inside the Chip.
chipValue           |String, Number  |False         |Displays text inside the chip.
chipTintColor       |String          |False         |Color for text and icons.
chipBackgroundColor |String          |False         |Color for the chip background..

### Main
Mounts the section where the main content of the page is displayed. It contains and separates the page from the AppDrawer
and the AppBar Components. The component receives some of its data from the AppContext.

Props
Name            | Type           | Required     | Description
----------------|----------------|--------------|---------------------------------------------------------------
children        |React Node      | True         | Component(s) that would be mounted.    