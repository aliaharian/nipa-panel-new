export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const renderChatTime = (timestamp: number) => {
  let now = Math.floor(Date.now());

  let diff = Math.floor((now - timestamp) / 1000);
  if (diff < 60) {
    return "چند لحظه پیش";
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + " دقیقه پیش";
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + " ساعت پیش";
  } else if (diff < 604800) {
    return Math.floor(diff / 86400) + " روز پیش";
  } else {
    return new Date(timestamp).toLocaleDateString("fa-IR");
  }
};

export const renderDialogTime = (timestamp: number, time?: boolean) => {
  let now = Math.floor(Date.now());

  let diff = Math.floor((now - timestamp) / 1000);
  let date = new Date(timestamp);
  if (time) {
    return date.getHours() + ":" + date.getMinutes();
  } else {
    if (diff < 86400) {
      return date.getHours() + ":" + date.getMinutes();
    } else {
      return date.toLocaleDateString("fa-IR");
    }
  }
};
