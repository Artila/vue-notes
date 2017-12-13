import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	notes: [],
	activeNote: {},
	show: 'all'
};

const getters = {
	activeNote: state => {
		return state.activeNote;
	},
	activeNoteTitle: state => {
		return state.activeNote.title;
	},
	activeNoteContent: state => {
		return state.activeNote.content;
	},
	filteredNotes: state => {
		if (state.show === 'all') {
			return state.notes || {};
		} else if (state.show === 'favorite') {
			return state.notes.filter(note => note.favorite) || {};
		}
	}
};

const mutations = {
	// 新增笔记，并把新增的笔记设为当前笔记
	addNote(state) {		
		const newNote = {
			id: +new Date(),
			title: '新笔记',
			content: '从这里开始',
			favorite: false		
		};
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	// 编辑笔记
	editNote(state, content) {
		state.activeNote.content = content;
	},
	// 编辑笔记标题
	editNoteTitle(state, title) {
		state.activeNote.title = title;
	},
	// 删除笔记
	deleteNote(state) {
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === state.activeNote.id) {
        state.notes.splice(i, 1);
        state.activeNote = state.notes[0] || {};
        return;
      }
    }
	},
	// 设为当前笔记
	setActiveNote(state, note) {
		state.activeNote = note;
	},
	// 切换是否喜欢的
	toggleFavorite(state) {
		state.activeNote.favorite = !state.activeNote.favorite;
	},
	// 切换笔记列表
	toggleList(state, show) {
		state.show = show;
	}
};

const actions = {
	// 新增笔记
	addNote({ commit }) {
		commit('addNote');
	},
	// 编辑笔记
	editNote({ commit }, e) {
		commit('editNote', e.target.value);
	},
	editNoteTitle({ commit }, e) {
		commit('editNoteTitle', e.target.value);
	},
	// 切换当前笔记的favorite状态
	toggleFavorite({ commit }) {
		commit('toggleFavorite');
	},
	// 删除当前笔记
	deleteNote({ commit }) {
		commit('deleteNote');
	},
	// 当前笔记更新
	updateActiveNote({ commit }, note) {
		commit('setActiveNote', note);
	},
	// 切换笔记列表
	toggleList({ commit }, show) {
		commit('toggleList', show);
	}
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

