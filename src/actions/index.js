export const ADDTASK = "ADDTASK";
export const TOGGLECOMPLETED = "TOGGLECOMPLETED";

export const addTask = input => {
  return {
    type: ADDTASK,
    payload: input
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLECOMPLETED,
    payload: index
  };
};
