import create from 'zustand';

export interface FilterStore {
  keyword: string;
  gender: string;
  setKeyword: (keyword: string) => void;
  setGender: (gender: string) => void;
}

export const useFilterStore = create<FilterStore>(set => ({
  keyword: '',
  gender: '',
  setKeyword: (keyword: string) => set({ keyword }),
  setGender: (gender: string) => set({ gender }),
}));

export function useKeywordFilterState() {
  const { keyword, setKeyword } = useFilterStore(state => ({
    keyword: state.keyword,
    setKeyword: state.setKeyword,
  }));

  return [keyword, setKeyword] as const;
}
