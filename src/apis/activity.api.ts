// import client
import { getClient } from "./client";

const mainClient = getClient(process.env.REACT_PUBLIC_SERVER_API || "");

const activityApi = {
  async getActivity() {
    try {
      const res = await mainClient.get(`https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities`);
      const resBody = res;
      return resBody;
    } catch (err) {
      throw err;
    }
  },

  async getActivityById(id: string) {
    try {
      const res = await mainClient.get(
        `${process.env.REACT_APP_SERVER_API}/activities/${id}`,
      );
      const resBody = res.data;
      return resBody;
    } catch (err) {
      throw err;
    }
  },
};

export default activityApi;
