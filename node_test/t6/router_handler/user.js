exports.login = (req, res) => {
    if (req.body.username !== "admin" || req.body.pwd !== "000000") {
        return res.send({ status: 1, msg: "登录失败！" })
    }
    req.session.user = req.body
    req.session.islogin = true
    res.send({ status: 0, msg: "登录成功！" })
}

exports.getUsername = (req, res) => {
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: "暂未登录！" })
    }
    res.send({ status: 0, msg: 'success', username: req.session.user.username })
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.send({ status: 0, msg: '退出成功！' })
}