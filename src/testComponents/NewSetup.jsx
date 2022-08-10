import {useState} from "react"

function AddRemoveInputField() {
    const [inputFields, setInputFields] = useState([
      {
        fullName: "",
      },
    ])
  
    const addInputField = () => {
      setInputFields([
        ...inputFields,
        {
          fullName: "",
        },
      ])
    }
    const removeInputFields = (index) => {
      const rows = [...inputFields]
      rows.splice(index, 1)
      setInputFields(rows)
    }
    const handleChange = (index, evnt) => {
      const { name, value } = evnt.target
      const list = [...inputFields]
      list[index][name] = value
      setInputFields(list)
    }
  
    return (
      <>
        {inputFields.map((data, index) => {
          const { fullName, emailAddress, salary } = data
          return (
            <>
              <input
                type="text"
                onChange={(evnt) => handleChange(index, evnt)}
                placeholder="Full Name"
              />
              <input
                type={"text"}
                onChange={(evnt) => handleChange(index, evnt)}
              />
  
              {inputFields.length !== 1 ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={removeInputFields}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </>
          )
        })}
        <button className="btn btn-outline-success " onClick={addInputField}>
          Add New
        </button>
      </>
    )
  }
  export default AddRemoveInputField
  