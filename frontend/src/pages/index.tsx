import {  mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React from 'react'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import TableSampleProducts from '../components/TableSampleProducts'
import { getPageTitle } from '../config'

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Products Table" main>
          <BaseButton
            href="/forms"
            label="Add New Product"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <TableSampleProducts />
        </CardBox>
      </SectionMain>
    </>
  )
}

export default TablesPage
