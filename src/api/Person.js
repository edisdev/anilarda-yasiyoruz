import graph from './ApiInfo';

export const getPersons = graph(`query{
  allPersons{
    id,
    name,
    kind
  }
}`);
