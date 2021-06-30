module.exports = {
    setNumber: (date) => {
        const str = date.toString()
        const pad = "00"
        let res = pad.substring(str.length) + str

        return res
    },
    
}