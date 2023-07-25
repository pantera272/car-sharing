//selectors
export const getAllUser = (state) => state.workers;
export const getUser = ({workers}, id) => workers.find(worker => worker.id === id);
