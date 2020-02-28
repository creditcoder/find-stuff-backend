import Notification from "../models/Notification";

export async function getLastNote() {
  
    console.log("last note request from the client.....");

    const item = await Notification.find({})
      .sort({ _id: -1 })
      .limit(1);
    if (item[0])
      return item[0];
    else 
      return 0;
  
}
