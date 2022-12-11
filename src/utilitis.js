const removePassword = (array) => {
  const result = array.map((user) => {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  }, []);
  return result;
};

module.exports = { removePassword };