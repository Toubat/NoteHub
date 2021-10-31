import http from "@/includes/http";

export default {
  state: {
    communityNotes: [1, 2, 3],
  },
  getters: {
    communityNotes: (state) => state.communityNotes,
  },
  mutations: {
    setCommunityNotes(state, communityNotes) {
      state.communityNotes = communityNotes;
    },
  },
  actions: {
    async initCommunityNotes({ commit, rootGetters }, communityId) {
      const token = await rootGetters.rootIdToken;
      const requestHeader = {
        headers: { authorization: `Bearer ${token}` },
      };
      const res = await http.post("note/get-notes-by-communityId", { communityId }, requestHeader);
      commit("setCommunityNotes", res.data);
    },
  },
};