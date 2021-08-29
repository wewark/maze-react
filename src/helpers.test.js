const helpers = require("./helpers")
// @ponicode
describe("helpers.getRandomInt", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.getRandomInt(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            helpers.getRandomInt(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            helpers.getRandomInt(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            helpers.getRandomInt(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            helpers.getRandomInt(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            helpers.getRandomInt(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
