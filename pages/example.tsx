import * as React from 'react';
import type { NextPage } from 'next';
import { LayoutRoot } from '~/components/layout';
import { Page, PageContent, PageHeader } from '~/components/ui/page';

const IndexPage: NextPage = () => {
  return (
    <LayoutRoot>
      <Page>
        <PageHeader
          pageTitle="Example with Search and Filter"
          breadcrumbs={[{ title: 'Example Page', href: '/example', isCurrent: true }]}
        />
        <PageContent>layout</PageContent>
      </Page>
    </LayoutRoot>
  );
};

export default IndexPage;
