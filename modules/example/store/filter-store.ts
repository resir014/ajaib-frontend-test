import create from 'zustand';

export interface FilterStore {
  keyword?: string;
  gender?: string;
  setKeyword: (keyword?: string) => void;
  setGender: (gender?: string) => void;
}

export const useFilterStore = create<FilterStore>(set => ({
  keyword: undefined,
  gender: undefined,
  setKeyword: (keyword?: string) => set({ keyword }),
  setGender: (gender?: string) => set({ gender }),
}));

export function useKeywordFilterState() {
  const { keyword, setKeyword } = useFilterStore(state => ({
    keyword: state.keyword,
    setKeyword: state.setKeyword,
  }));

  return [keyword, setKeyword] as const;
}

export function useGenderFilterState() {
  const { gender, setGender } = useFilterStore(state => ({
    gender: state.gender,
    setGender: state.setGender,
  }));

  return [gender, setGender] as const;
}
