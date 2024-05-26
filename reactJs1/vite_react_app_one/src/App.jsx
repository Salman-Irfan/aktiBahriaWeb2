import React from 'react'
import NavBar from './components/layouts/NavBar'

const App = () => {
  let a = 123
  console.log(a)
  return (
    <>
      <NavBar />
      <div>App</div>
      1+2
      <p>to write js inside html return value use curly brackets</p>
      {2 + 6}
      {a}
      {/* form start */}
      <form>
        {/* name */}
        <div className="mb-3">
          
          <input type="text" className="form-control" id="name" placeholder="User Name" />
        </div>
        {/* name end */}

        {/* accountNumber */}
        <div className="mb-3">
          <input type="text" className="form-control" id="accountNumbername" placeholder="User accountNumberName" />
        </div>
        {/* accountNumber end */}

        {/* initialBalance */}
        <div className="mb-3">
          <input type="text" className="form-control" id="initialBalance" placeholder="initialBalance" />
        </div>
        {/* initialBalance end */}

        {/* idType */}
        <div className="mb-3">
          <input type="text" className="form-control" id="idType" placeholder="idType" />
        </div>
        {/* idType end */}

        {/* sourceOfIncome */}
        <div className="mb-3">
          <input type="text" className="form-control" id="sourceOfIncome" placeholder="sourceOfIncome" />
        </div>
        {/* sourceOfIncome end */}

        {/* totalBalance */}
        <div className="mb-3">
          <input type="text" className="form-control" id="totalBalance" placeholder="totalBalance" />
        </div>
        {/* totalBalance end */}
      </form>

      {/* form end */}
    </>
  )
}

export default App