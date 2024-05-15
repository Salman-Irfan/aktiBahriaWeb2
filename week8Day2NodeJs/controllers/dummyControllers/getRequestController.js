const getRequestController = (req, res) => {
    return res.json({
        id: 1,
        name: "node server",
        format: "json"
    })
}

module.exports = getRequestController