export const success = (msg) => {
  return {
    status: "success",
    msg: msg,
  };
};

export const failed = (msg) => {
  return {
    status: "failed",
    msg: msg,
  };
};
