export const LinkButton = ({ children, ...props }) => {
  const className = 'fontf1 text-lg text-white rounded'
  props.className += ' ' + className

  return (
    <div>
      <button {...props}>{children}</button>
      <hr className="border-t-2 rounded border-white relative -top-1"/>
    </div>
  )
}
