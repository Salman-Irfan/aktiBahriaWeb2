const testGetJsonController = (req, res) => {
    return res.json({
        success: true,
        data: 123,
        age: 25,
        name: "node server"
    })
}

module.exports = testGetJsonController