
var hello = {
    name: "",
    hello: function () {
        console.log("hello" + this.name)

    },
    test: function (calback) {
        setTimeout(calback, 3000)
        calback()

    }
}
module.export = hello