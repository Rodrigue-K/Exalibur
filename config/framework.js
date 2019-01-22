//  It should show descriptions of the tests
const that = (description, fn) => {
    console.log(description)
    fn()
}

const can = (message, fn) => that('  ' + message, fn)

const matchers = (statement) => ({
    toEqual:(assertion) => {
        if (statement === assertion) {
            console.log('Test successful! ' + statement + ' is equal to ' + assertion)
            return true
        } else {
            console.log('Unsuccessful')
            return false 
        }
    },

    toThrowError: (assertion) => {
        try {
            statement();
        }
        catch(error) {
            alert(error)
        }
        finally{
            if(statement != assertion) {
                console.log('Test unsuccessful! Expected: ' + statement + ' to throw ' + assertion + ' error ')
                return true
            }
        }
        }
})

const expect = (statement) => matchers(statement)