import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import Input from '../../CustomInputs/Input';
import TextArea from '../../CustomInputs/TextArea';
import { BaseSubmitBtn, MultipleInputRow } from '../../BaseComponents';
import useProductContext from '../../../Hooks/useProductsContext';

interface ICreateProduct {
  name: string;
  totalCount: number;
  description: string;
  inWarehouseSince: string;
  validThru: string;
}

const EditProductSchema: yup.ObjectSchema<
  ICreateProduct | undefined
> = yup.object({
  name: yup.string().required('Este campo es obligatorio'),
  totalCount: yup
    .number()
    .required('Este campo es obligatorio')
    .min(1, 'Ingresa un valor mayor a 0'),
  description: yup.string().required('Este campo es obligatorio'),
  inWarehouseSince: yup.string().required('Este campo es obligatorio'),
  validThru: yup.string().required('Este campo es obligatorio'),
});

const CreateProductForm: React.FC = () => {
  const { createProduct, loadingCreate } = useProductContext();
  const history = useHistory();

  const initialValues: ICreateProduct = {
    name: '',
    description: '',
    validThru: '',
    inWarehouseSince: '',
    totalCount: 0,
  };
  const handleSubmit = async (values: ICreateProduct) => {
    await createProduct(values);
    history.push('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditProductSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            label="Nombre"
            error={errors.name && touched.name ? errors.name : ''}
          />
          <Input
            type="number"
            name="totalCount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.totalCount}
            label="Cantidad"
            error={
              errors.totalCount && touched.totalCount ? errors.totalCount : ''
            }
          />
          <MultipleInputRow>
            <Input
              type="date"
              name="validThru"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.validThru}
              label="Fecha de caducidad"
              error={
                errors.validThru && touched.validThru ? errors.validThru : ''
              }
            />
            <Input
              type="date"
              name="inWarehouseSince"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.inWarehouseSince}
              label="Fecha de ingreso a bodega"
              error={
                errors.inWarehouseSince && touched.inWarehouseSince
                  ? errors.inWarehouseSince
                  : ''
              }
            />
          </MultipleInputRow>
          <TextArea
            label="Descripción"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={
              errors.description && touched.description
                ? errors.description
                : ''
            }
          />
          <BaseSubmitBtn type="submit" disabled={loadingCreate}>
            Crear
          </BaseSubmitBtn>
        </form>
      )}
    </Formik>
  );
};

export default CreateProductForm;
