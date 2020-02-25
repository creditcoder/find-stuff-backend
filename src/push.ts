import User from "./models/User";
const Pushy = require("pushy");

const pushyAPI = new Pushy(
  "a22000c207d1f15afbaee51f1da8c03197eaad699d29e8a2013cfa884020902b"
);

const options = {
  notification: {
    badge: 1,
    sound: "ping.aiff",
    body: "Hello World \u270c"
  }
};

export const msg = async (uid, message) => {
  const user = await User.find({ _id: uid });
  if (!user || user.device) {
    console.log("wrong user");
    return;
  }

  pushyAPI.sendPushNotification(message, user.device, options, function(
    err,
    id
  ) {
    // Log errors to console
    if (err) {
      return console.log("Fatal Error", err);
    }

    console.log("Push sent successfully! (ID: " + id + ")");
  });
};

export const notify = (channel, data) => {
  const notifyData = {
    _id: data._id,
    content: data.content,
    createAt: data.createAt,
    channel
  };
  pushyAPI.sendPushNotification(
    notifyData,
    "/topics/" + channel,
    options,
    function(err, id) {
      // Log errors to console
      if (err) {
        return console.log("Fatal Error", err);
      }

      console.log("Push sent successfully! (ID: " + id + ")");
    }
  );
};
