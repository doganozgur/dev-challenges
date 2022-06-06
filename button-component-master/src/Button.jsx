import classNames from 'classnames'

function Button({ text= 'Default', variant = 'default',  }) {
  return (
    <div>
      {/* <p><Button /></p> */}
      <p className='text-xs'>{'<Button />'}</p>
      <button className={classNames({
        "py-2 px-4 flex items-center bg-lightGray hover:bg-darkGray rounded-md m-4 text-sm font-medium mb-11": true,
        "bg-none border border-outlineBlue": variant === "outline"
      })}>{text}</button>
    </div>
  )
}

export default Button