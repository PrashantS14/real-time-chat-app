export const createUser = () => {
  return {
    id: crypto.randomUUID(),
    name: "Guest-" + Math.floor(Math.random() * 1000),
  };
};
