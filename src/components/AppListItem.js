import { useTheme } from "@emotion/react";
import {
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

const AppListItem = ({
  Icon,
  image = "none",
  subtitle,
  title,
  selected,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <ListItem
      button
      disableRipple
      sx={{
        backgroundColor: selected ? theme.palette.grey["200"] : "none",
      }}
      {...rest}
    >
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
