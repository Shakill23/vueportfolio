import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    home: "",
    about: "",
    resume: [],
    skills: [],
    projects: [],
    contact: ""
  },
  getters: {},
  mutations: {
    setHome(state, data) {
      state.home = data;
    },
    setAbout(state, about) {
      state.about = about;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setContact(state, contact) {
      state.contact = contact;
    }
  },
  actions: {
    async getHome(context) {
      try {
        const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
        context.commit('setHome', res.data.home);
      } catch (error) {
        alert('Cannot retrieve data', error);
      }
    },
    async getAbout(context) {
      try {
        const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
        context.commit('setAbout', res.data.about);
      } catch (error) {
        alert('Cannot retrieve data', error);
      }
    },
    async getResume(context) {
      try {
        const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
        context.commit('setResume', res.data.resume);
      } catch (error) {
        alert('Cannot retrieve data', error);
      }
    },
    async getSkills(context) {
      try {
        const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
        context.commit('setSkills', res.data.skills);
      } catch (error) {
        alert('Cannot retrieve data', error);
      }
    },
    async getProjects(context) {
      if (context.state.projects.length === 0) {
        try {
          const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
          context.commit('setProjects', res.data.projects);
        } catch (error) {
          alert('Cannot retrieve data', error);
        }
      }
    },
    async getContact(context) {
      try {
        const res = await axios.get('https://shakill23.github.io/vueEOMP/data');
        context.commit('setContact', res.data.contact);
      } catch (error) {
        alert('Cannot retrieve data', error);
      }
    }
  },
  modules: {}
});
