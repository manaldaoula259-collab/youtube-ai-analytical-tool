import { Inngest } from "inngest";

// استخدم Event Key من متغير البيئة
export const inngest = new Inngest({
  id: "Tubepulse",
  eventKey: process.env.INNGEST_EVENT_KEY, // <- هذا السطر مهم
});

