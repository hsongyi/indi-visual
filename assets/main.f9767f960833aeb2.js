import {initSite} from "/indi-visual/assets/runtime.8fed9d6e453958de.js";
const config=JSON.parse(document.getElementById("iv-config").textContent);
const response=await fetch(config.data);
if(!response.ok)throw new Error("Edition data could not be loaded");
await initSite({...await response.json(),...config});
