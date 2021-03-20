let deduplicate = (rows) => {
    //Deduplicate logic
    const unique = Array.from(new Set(rows.map(a => a.id)))
    .map(id => {
      return rows.find(a => a.id === id)
    })
    return unique;
};


module.exports = deduplicate;