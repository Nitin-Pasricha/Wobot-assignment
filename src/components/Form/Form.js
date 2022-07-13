import React, { useState } from 'react'
const Form = () => {
  const [companyName, setCompanyName] = useState()
  const [industry, setIndustry] = useState()
  const [companySize, setCompanySize] = useState('51-200')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='form-container'>
      <div className='heading'>
        <div className='design'>
          <div className='l1'></div>
          <div className='l2'></div>
          <div className='l3'></div>
        </div>
        <h3>It's a delight to have you on board.</h3>
        <p>Help us know you better.</p>
        <p>(This is how we optimize Wobot as per your business needs)</p>
      </div>
      <form className='info-form' onSubmit={handleSubmit}>
        <label htmlFor='company'>Company name</label>
        <input
          type='text'
          name='company'
          id='company'
          placeholder='e.g. Example Inc'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor='industry'>Industry</label>
        <input
          list='industry'
          placeholder='Select'
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <datalist id='industry'>
          <option value='Type A' />
          <option value='Type B' />
        </datalist>
        <label htmlFor='companySize'>Company size</label>
        <div className='opt'>
          <input
            type='button'
            value='1-20'
            className={`${
              companySize === '1-20' ? 'selected' : 'not-selected'
            }`}
            onClick={(e) => setCompanySize(e.target.value)}
          />
          <input
            type='button'
            value='21-50'
            className={`${
              companySize === '21-50' ? 'selected' : 'not-selected'
            }`}
            onClick={(e) => setCompanySize(e.target.value)}
          />
          <input
            type='button'
            value='51-200'
            className={`${
              companySize === '51-200' ? 'selected' : 'not-selected'
            }`}
            onClick={(e) => setCompanySize(e.target.value)}
          />
          <input
            type='button'
            value='201-500'
            className={`${
              companySize === '201-500' ? 'selected' : 'not-selected'
            }`}
            onClick={(e) => setCompanySize(e.target.value)}
          />
          <input
            type='button'
            value='500+'
            onClick={(e) => setCompanySize(e.target.value)}
            className={`${
              companySize === '500+' ? 'selected' : 'not-selected'
            }`}
          />
        </div>
        <button type='submit' className='btn'>
          Get Started
        </button>
      </form>
    </div>
  )
}
export default Form
