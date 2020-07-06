import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import useAxios from 'axios-hooks';
import Input from '../../CustomInputs/Input';
import TextArea from '../../CustomInputs/TextArea';
import { BaseSubmitBtn, MultipleInputRow } from '../../BaseComponents';
import { IProduct } from '../../../@types';
import useProductContext from '../../../Hooks/useProductsContext';

interface IEditProduct {
  name: string;
  description: string;
  inWarehouseSince: string;
  validThru: string;
}

const EditProductSchema: yup.ObjectSchema<
  IEditProduct | undefined
> = yup.object({
  name: yup.string().required('Este campo es obligatorio'),
  description: yup.string().required('Este campo es obligatorio'),
  inWarehouseSince: yup.string().required('Este campo es obligatorio'),
  validThru: yup.string().required('Este campo es obligatorio'),
});

interface IEditProductFormProps {
  productId: string;
}

const EditProductForm: React.FC<IEditProductFormProps> = ({ productId }) => {
  // Fetch Product Data
  const [{ data: _data, loading }] = useAxios(`/products/${productId}`, {
    useCache: false,
  });
  const history = useHistory();
  const { updateProduct, loadingUpdate } = useProductContext();
  // return null;
  if (loading) return null;
  const data: IProduct = _data;
  const editData: IEditProduct = {
    name: data.name,
    description: data.description,
    validThru: data.validThru,
    inWarehouseSince: data.inWarehouseSince,
  };

  const handleSubmit = async (values: IEditProduct) => {
    await updateProduct(productId, values);
    history.push('/');
  };

  return (
    <Formik
      initialValues={editData}
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
          <BaseSubmitBtn type="submit" disabled={loadingUpdate}>
            Guardar
          </BaseSubmitBtn>
        </form>
      )}
    </Formik>
  );
};

export default EditProductForm;
