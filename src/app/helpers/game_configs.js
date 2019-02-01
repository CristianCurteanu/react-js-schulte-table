module.exports = () => ({
    var configs = localStorage.getItem('configs')

    const setDefault = () => {
        var table = {
            table: {
                size: 5
            }
        }
        localStorage.setItem('configs', JSON.stringify(table))
        return table
    }

    const getConfigs = () {
        if (configs == null) {
            return this.setDefault()
        }
        return JSON.parse(localStorage.getItem('configs'))
    }

    const setConfig = (name, value) => {
        var temp = localStorage.getItem('configs')
        if (configs == null) {
            temp = this.setDefault()
        }
        try {
            temp[name] = value
            localStorage.setItem('configs', JSON.stringify(temp))
            return true
        } catch (error) {
            return false
        }
    }

    return {
        getConfigs,
        setConfig
    }
})()