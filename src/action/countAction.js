export const UPCOUNT = "UPCOUNT";
export const DOWNCOUNT = "DOWNCOUNT";

export const upCount = (value) => ({ type: UPCOUNT, payload: value });
export const downCount = () => ({ type: DOWNCOUNT });
