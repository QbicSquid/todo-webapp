export const LinkButton = ({ children, ...props }) => {
  const className = 'text-lg text-white rounded outline-none fontf1'
  props.className += ' ' + className

  return (
    <div>
      <button {...props}>{children}</button>
      <hr className="relative border-t-2 border-white rounded -top-1"/>
    </div>
  )
}
