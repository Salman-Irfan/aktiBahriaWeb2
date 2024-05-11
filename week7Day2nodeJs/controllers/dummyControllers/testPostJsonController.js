const testPostJsonController = (req, res)=> {

    console.log(req.body)
    return res.json({
        success: true,
        isPostReq: "post request mosool ho gai"
    })
}

module.exports = testPostJsonController