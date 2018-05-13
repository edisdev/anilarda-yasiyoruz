import graph from './ApiInfo';

export const getPersons = graph(`query{
  allPersons(orderBy: name_ASC){
    id,
    name,
    kind,
    img,
    url
  }
}`);

export const showPerson = (url) => {
  const showList = graph(`query{
    Person(url: "${url}"){
      id,
      name,
      kind,
      img,
      url,
      biography
    }
  }`);

  return showList();
};

export const createPerson = (data) => {
  const newPerson = graph(`mutation{
    createPerson(
      name: "${data.name}",
      kind: [${data.kind}],
      url: "${data.url}",
      img: "${data.img}"
      ){
     id,
     name,
     kind,
     url,
     img
     }
   }`);
  return newPerson();
};

export default {
  getPersons,
  createPerson,
  showPerson
};
