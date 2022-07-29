import api from './api';

export const getDepartamentos = async () => {
    const resp = await api.get('/departamentos')
    return resp.data;
}

export const insertDepartamento = async (data) => {
    const { nome, sigla } = data;

    const resp = await api.post('/departamentos', {
        nome,
        sigla
    });
    return resp.data;
}

export const deleteDepartamento = async (data) => {
  const { idDepartamento, callback } = data;
  const resp = await api.delete(`/departamentos/${idDepartamento}`);

  callback();

  return resp.data;
}

