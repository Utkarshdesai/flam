import { create } from 'zustand'
import toast from 'react-hot-toast';
export const useBookmarkStore = create((set) => ({
  bookmarkemployee : [] ,
  addEmployee : (employee) => 
    set((state) => {
      // Prevent duplicate bookmarks by id
      if (state.bookmarkemployee.some(e => e.id === employee.id)) {
        toast('Already bookmarked!');
        return state;
      }
      return {
        bookmarkemployee: [...state.bookmarkemployee, employee],
      };
    }),
  removeEmployee: (id) =>
    set((state) => ({
        bookmarkemployee: state.bookmarkemployee.filter(
        (emp) => emp.id !== id
      ),
    })),
  promoteEmployee: () => {
    toast.success('promoted')
  },
  assignToProject: () => {
    toast.success('Assigned to project')
  },
}))

