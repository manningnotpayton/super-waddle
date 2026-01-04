function processData(data) {
    if (!data) {
        return null;
    }
    return data.map(item => ({
        id: item.id,
        name: item.name,
        processed: true
    }));
}

module.exports = { processData };
