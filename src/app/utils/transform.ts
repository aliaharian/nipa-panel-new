import { ExportCurve, TextBlock, TickSquare } from "iconsax-react";

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

export const dateToTimestamp = (date: string) => {

  return new Date(date).getTime();
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

export const fileToUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const imageUrl = event.target.result;
      resolve(imageUrl);
    };
    reader.onerror = function (event: any) {
      reject(event.target.error);
    };
    reader.readAsDataURL(file);
  });
};
function base64ToBlob(base64: string, type: string): Blob {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; ++i) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new Blob([bytes], { type: type });
}

const imageValidExtensions = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];
function fileToBlob(file: File): Blob {
  return new Blob([file], { type: file.type });
}

//to persian digits
const toPersianDigits = (value: any) => {
  const charCodeZero = "۰".charCodeAt(0);
  return String(value).replace(/[0-9]/g, (w) =>
    String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
  );
};

export default {
  pluralize,
  fileToUrl,
  imageValidExtensions,
  base64ToBlob,
  fileToBlob,
  toPersianDigits,
  dateToTimestamp,
  renderChatTime
};
