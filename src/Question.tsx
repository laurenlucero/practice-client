import React from 'react';
import { Field } from 'formik';

interface QuestionProps {
  name: string,
  label?: string,
  type?: 'text' | 'number' | 'date',
}

const Question = ({ name, label, type = "text" }: QuestionProps) => {
  return (
    <>
    <label htmlFor={name}>{name || label}</label>
      <Field type={type} name={name} id={name} />
    </>
  )
}

export default Question