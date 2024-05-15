const postRequestController = (req, res) => {
    console.log(req.body)
    // asal logic
    return res.json({
        success:true,
        data: req.body
    })
}

module.exports = postRequestController