import {initSite} from "/indi-visual/assets/runtime.2f33dbc169128883.js";
const config=JSON.parse(document.getElementById("iv-config").textContent);
const response=await fetch(config.data);
if(!response.ok)throw new Error("Edition data could not be loaded");
await initSite({...await response.json(),...config});
