import * as React from 'react';
import type { NextPage } from 'next';
import { LayoutRoot } from '~/components/layout';
import { Page, PageContent, PageHeader } from '~/components/ui/page';
import { UsersList } from '~/modules/example/users-list';
import { UsersFilterForm } from '~/modules/example/filter/users-filter-form';

const IndexPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          pageTitle="Example with Search and Filter"
          breadcrumbs={[{ title: 'Example Page', href: '/example', isCurrent: true }]}
        />
        <PageContent>
          <div className="py-6 mx-auto container space-y-4">
            <UsersFilterForm />
            <UsersList />
          </div>
        </PageContent>
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;
