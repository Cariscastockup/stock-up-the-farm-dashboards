# App Components
This directory contains all the custom Components created for the app

### AppDrawer
The main drawer of the dashboard containing links leading to other pages.
Props:
* open: Takes Boolean value indicating whether the drawers is open or not.


### AppListItem
Built on top of the components of ListItem in Mui. Returns a ListItem.
        
Props : 
* Icon: Node; Renders and Icon Component in the list item.
* image: String; If provided, renders an image in the place of Icon.
* subtitle: String; Subtitle of the list item.
* title: String; Title of the list item.

### Main
Holds the main section where data is displayed. It is mounted beside the AppDrawer.

Props
Name            | Type           | Required     | Description
----------------|----------------|--------------|------------------------------------
children        |React Node      | True         | Component(s) that would be mounted.    
