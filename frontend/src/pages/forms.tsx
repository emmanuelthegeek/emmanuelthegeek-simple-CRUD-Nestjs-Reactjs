import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import FormField from '../components/FormField'
import SectionMain from '../components/SectionMain'


import { getPageTitle } from '../config'

const FormsPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>

        <CardBox>
          <Formik
            initialValues={{
              product_name: 'Laptops',
              price: '250.00',
              textarea: 'Description',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Name" icons={[mdiAccount, mdiMail]}>
                <Field name="product_name" placeholder="Product Name" />
                <Field type="number" name="price" placeholder="Price" />
              </FormField>

              <BaseDivider />

              <FormField label="Description" hasTextareaHeight>
                <Field name="textarea" as="textarea" placeholder="Product Description" />
              </FormField>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
                <BaseButton type="reset" color="info" outline label="Reset" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

// FormsPage.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutAuthenticated>{page}</LayoutAuthenticated>
// }

export default FormsPage
