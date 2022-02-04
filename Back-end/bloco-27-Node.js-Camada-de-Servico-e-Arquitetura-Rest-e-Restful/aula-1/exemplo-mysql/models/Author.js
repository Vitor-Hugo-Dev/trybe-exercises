const connection = require('./conections');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullname = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullname,
  }
}

const serialize = (author) => {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  }
}
const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM authors');

  return result.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}