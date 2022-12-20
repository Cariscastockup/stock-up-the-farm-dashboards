import {
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

const AppListItem = ({ Icon, image = "none", subtitle, title, ...rest }) => {
  return (
    <ListItem button disableRipple {...rest}>
      {(Icon || image !== "none") && (
        <ListItemAvatar>
          {Icon}
          {image !== "none" && (
            <CardMedia
              sx={(theme) => ({
                width: "2.6em",
                height: "2.6em",
                borderRadius: theme.spacing(1),
              })}
              image={image}
            />
          )}
        </ListItemAvatar>
      )}
      <ListItemText
        primary={title}
        secondary={
          <Typography
            sx={(theme) => ({
              color: theme.palette.gray,
            })}
            variant="subtitle2"
          >
            {subtitle}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default memo(AppListItem);
