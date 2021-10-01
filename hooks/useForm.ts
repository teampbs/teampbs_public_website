import { useState } from "react"

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.dir(formData)
  }

  return { formData, handleChange, handleSubmit }
}

export default useForm