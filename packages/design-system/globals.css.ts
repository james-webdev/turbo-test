import { globalStyle }from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
    fontFamily: "Arial, sans-serif",
    maxWidth: "500px",
    margin: "0 auto",
    marginTop: "4rem",
    fontSize: vars.color.fontSize,
    backgroundColor: vars.color.background,
    });

