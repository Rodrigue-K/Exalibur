const describe = (description, fn) => {
    console.log(description)
    fn()
}

const can = (message, fn) => { console.log('  ' + message),  fn() }

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
          console.log(error)
        }


    },

    isPrime: (statement) => { 
        for(let i = 2; i < statement; i++) {
            if(statement % i === 0)
            console.log("Unsuccessful") 
            return false
        }
        console.log("Successful")
        return true 


    

    


    
})

const expect = (statement) => matchers(statement)