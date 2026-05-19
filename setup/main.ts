import { defineAppSetup } from "@slidev/types";

import "./click-animations.css";
import QrcodeVue from "qrcode.vue";

export default defineAppSetup(({ app, router }) => {
  app.component("QRCode", QrcodeVue);
});
