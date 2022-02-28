import * as React from 'react';
import { GenderFilter } from './gender-filter';
import { KeywordFilter } from './keyword-filter';

export function UsersFilterForm() {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
      <KeywordFilter />
      <GenderFilter />
    </div>
  );
}
