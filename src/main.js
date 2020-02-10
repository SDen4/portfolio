import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/skills";
import "./scripts/projects";
import "./scripts/about";
import "./scripts/parallax";
import "./scripts/gamburger-menu";
import "./scripts/navi";
import "./scripts/form";