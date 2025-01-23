import { useState } from 'react'
import { FileText, User, Calendar, UploadCloud } from 'lucide-react'

const FormAssistant = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    document: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Form Assistant</h3>
      
      {/* Form Fields */}
      <div className="space-y-4">
        <div className="card p-6">
          <label className="block mb-2 text-text-primary">
            <div className="flex items-center space-x-2 mb-1">
              <User className="w-5 h-5" />
              <span>First Name</span>
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </label>
        </div>

        <div className="card p-6">
          <label className="block mb-2 text-text-primary">
            <div className="flex items-center space-x-2 mb-1">
              <User className="w-5 h-5" />
              <span>Last Name</span>
            </div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </label>
        </div>

        <div className="card p-6">
          <label className="block mb-2 text-text-primary">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="w-5 h-5" />
              <span>Date of Birth</span>
            </div>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </label>
        </div>

        <div className="card p-6">
          <label className="block mb-2 text-text-primary">
            <div className="flex items-center space-x-2 mb-1">
              <UploadCloud className="w-5 h-5" />
              <span>Upload Document</span>
            </div>
            <input
              type="file"
              name="document"
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-surface border border-surface focus:border-primary focus:ring-2 focus:ring-primary"
            />
          </label>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4">
        <button className="btn-primary">
          Submit Form
        </button>
        <button className="btn-primary bg-transparent border border-primary text-primary hover:bg-primary/10">
          Clear Form
        </button>
      </div>
    </div>
  )
}

export default FormAssistant
