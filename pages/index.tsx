import * as React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { LayoutRoot } from '~/components/layout';
import { Page, PageContent } from '~/components/ui/page';

const IndexPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageContent>
          <div className="flex flex-col flex-1 items-center justify-center">
            <Link href="/example">
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Go to example
              </a>
            </Link>
          </div>
        </PageContent>
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;
