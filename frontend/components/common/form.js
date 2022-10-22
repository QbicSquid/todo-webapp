export const FormLabel = ({ children, ...props }) => {
  const className = 'inline-block text-2xl fontf1'
  props.className += ' ' + className

  return <label {...props}>{children}</label>
}

export const FormText = ({ children, ...props }) => {
  const className = 'inline-block p-1 border-b-2 rounded focus:outline-none fontf1'
  props.className += ' ' + className

  return <input type="text" {...props} />
}

export const FormPassword = ({ children, ...props }) => {
  const className = 'inline-block p-1 border-b-2 rounded focus:outline-none'
  props.className += ' ' + className

  return <input type="password" {...props} />
}

export const FormButton = ({ children, ...props }) => {
  const className = 'text-xl text-white bg-teal-500 rounded-md outline-none fontf1 hover:scale-105 active:bg-teal-700'
  props.className += ' ' + className

  return (<button {...props}>{children}</button>)
}
