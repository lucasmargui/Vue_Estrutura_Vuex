import { createStore } from 'vuex'
import cartModule from '@/components/modules/cart';
 import productsModule from '@/components/modules/products';


export default createStore({
  state: {
    counter: 0, // Estado para armazenar um contador
    loading: false, // Estado para indicar se está carregando
    error: null, // Estado para armazenar mensagens de erro
    user: null
  },
  getters: {
    counter: state => state.counter, // Getter para obter o valor do contador
    isLoading: state => state.loading, // Getter para obter o estado de carregamento
    error: state => state.error // Getter para obter mensagens de erro

  },
  mutations: {
    increment: (state, payload) => state.counter = state.counter  + payload, // Mutação para incrementar o contador
    decrement: (state, payload) => state.counter  = state.counter - payload, // Mutação para decrementar o contador
    setLoading: (state, payload) => state.loading = payload, // Mutação para definir o estado de carregamento
    setError: (state, payload) => state.error = payload, // Mutação para definir mensagens de erro
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = null
    }
  },
  actions: {
    async incrementAsync({ commit }) { // Ação assíncrona para incrementar o contador
      commit('setLoading', true); // Ativa o estado de carregamento
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('increment', 1); // Chama a mutação para incrementar o contador
      } catch (error) {
        commit('setError', error.message); // Define uma mensagem de erro em caso de falha
      } finally {
        commit('setLoading', false); // Desativa o estado de carregamento, independente do resultado
      }
    },
    async decrementAsync({ commit }) {
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('decrement', 1);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async incrementByAsync({ commit }, payload) {
      const { amount } = payload;
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('increment', amount);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async decrementByAsync({ commit }, payload) {
      const { amount } = payload;
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('decrement', amount);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadingAsync({ commit }) { 
      commit('setLoading', true);
      try {
      
        await new Promise(resolve => setTimeout(resolve, 2000));
      
      } catch (error) {
        commit('setError', error.message); // Define uma mensagem de erro em caso de falha
      } finally {
        commit('setLoading', false); // Desativa o estado de carregamento, independente do resultado
      }
    },
  },
    modules: {
     

      //Importando módulos
      cart:cartModule,
      products:productsModule,
    
      ///Exemplo direto
      account: {
        namespaced: true,
        state: () => ({}), 
        getters: {
          // isAdmin() { } 
        },
        actions: {
          // login() { }
        },
        mutations: {
          // login() { } 
        },
        // nested modules
        modules: {
    
        }
      }

      
  }
})
