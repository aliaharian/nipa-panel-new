//set timestamp to persian date

export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const renderChatTime = (timestamp: number, percise?: boolean, onlyDate?: boolean) => {
  let now = Math.floor(Date.now());
  if (percise) {
    if (onlyDate) {
      return new Date(timestamp).toLocaleDateString("fa-IR")
    }
    //format :: ddmmyy h:i no seconds
    return new Date(timestamp).toLocaleDateString("fa-IR") + " , " + new Date(timestamp).toLocaleTimeString("fa-IR").slice(0, 5);
    //return new Date(timestamp).toLocaleDateString("fa-IR") + " " + new Date(timestamp).toLocaleTimeString("fa-IR");
  }
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

const checkPermission = (permission: any) => {
  let userPermissions =
    // store.getState().users.userInfo?.permissions ||
    JSON.parse(localStorage.getItem("nipa_user") || "{}")?.permissions;

  // console.log("userPermissions", userPermissions);
  // console.log("permission", permission);
  if (userPermissions?.find((perm: any) => perm.slug === permission)) {
    return true;
  } else {
    return false;
    // return <Navigate to="/access-denied" />;
  }
};

const toPersianDigitsPutCommas = (value: any) => {
  const charCodeZero = "۰".charCodeAt(0);
  !value && (value = "");
  const val = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const result = String(val).replace(/[0-9]/g, (w) =>
    String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
  );
  return result;
}

const convetToEnglishDigitsRemoveCommas = (value: any) => {
  const charCodeZero = "۰".charCodeAt(0);
  return String(value).replace(/[۰-۹]/g, (w) =>
    String.fromCharCode(w.charCodeAt(0) - charCodeZero + 48)
  );
}
function toISOLocal(d: Date) {
  var z = (n: any) => ('0' + n).slice(-2);
  var zz = (n: any) => ('00' + n).slice(-3);
  var off = d.getTimezoneOffset();
  var sign = off > 0 ? '-' : '+';
  off = Math.abs(off);

  return d.getFullYear() + '-'
    + z(d.getMonth() + 1) + '-' +
    z(d.getDate())

  //  + 'T' +
  //  z(d.getHours()) + ':'  + 
  //  z(d.getMinutes()) + ':' +
  //  z(d.getSeconds()) + '.' +
  //  zz(d.getMilliseconds()) +
  //  sign + z(off/60|0) + ':' + z(off%60); 
}

const renderStatusStyle = (type:string)=>{
  let style;
  switch (type) {
      case "success":
          style = "bg-success-secondary text-success-primary "
          break;
      case "warning":
          style = "bg-warning-secondary text-warning-text "
          break;
      case "error":
          style = "bg-error-secondary text-error-primary "
          break;
      case "info":
          style = "bg-info-secondary text-info-primary "
          break;
      default:
          style = "bg-text-300 text-text-600 "
          break;
  }

  return style;
}
export default {
  toISOLocal,
  pluralize,
  fileToUrl,
  imageValidExtensions,
  base64ToBlob,
  renderStatusStyle,
  toPersianDigitsPutCommas,
  fileToBlob,
  toPersianDigits,
  dateToTimestamp,
  renderChatTime,
  checkPermission,
  convetToEnglishDigitsRemoveCommas
};
