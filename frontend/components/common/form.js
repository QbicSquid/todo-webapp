export const FormLabel = ({ children, ...props }) => {
  const className = 'text-2xl inline-block fontf1'
  props.className += ' ' + className

  return <label {...props}>{children}</label>
}

export const FormText = ({ children, ...props }) => {
  const className = 'p-1 focus:outline-none rounded border-b-2 w-full inline-block fontf1'
  props.className += ' ' + className

  return <input type="text" {...props} />
}

export const FormPassword = ({ children, ...props }) => {
  const className = 'p-1 focus:outline-none rounded border-b-2 w-full inline-block'
  props.className += ' ' + className

  return <input type="password" {...props} />
}

export const FormButton = ({ children, ...props }) => {
  const className = 'bg-teal-500 rounded-md text-white p-2 fontf1 text-xl hover:scale-105 active:bg-teal-700 mr-5'
  props.className += ' ' + className

  return (<button {...props}>{children}</button>)
}
