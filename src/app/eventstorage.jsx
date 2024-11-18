import create from 'zustand'

const useUserStore = create(set => ({
  user: null,
  setUser: user => set({ user }),
  isLoggedIn: false,
  setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
  validationErrors: {},
  setValidationErrors: validationErrors => set({ validationErrors }),
}))

export { useUserStore }