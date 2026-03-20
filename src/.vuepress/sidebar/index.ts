import { sidebar } from "vuepress-theme-hope";

import { note } from "./note.js";
import { project } from "./project.js";
import { tutorial } from "./tutorial.js";
import { piece } from "./piece.js";

export const zhSidebarConfig = sidebar({

  "/note": note,

  "/project": project,

  "/piece": piece,

  "/tutorial": tutorial,

  "/about/": "structure"
});
