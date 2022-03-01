import * as React from 'react';
import { useGenderFilterState } from '../store/filter-store';

export function GenderFilter() {
  const [value, setValue] = React.useState('');
  const [, setGender] = useGenderFilterState();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
      setValue(e.target.value);

      if (e.target.value) {
        setGender(e.target.value);
      } else {
        setGender(undefined);
      }
    },
    [setValue, setGender]
  );

  return (
    <div>
      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
        Gender
      </label>
      <select
        id="gender"
        name="gender"
        className="mt-1 block w-full min-w-[200px] pl-3 pr-10 py-2 text-base border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={value}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}
