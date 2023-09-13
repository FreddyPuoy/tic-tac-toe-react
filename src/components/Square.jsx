export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `w-28 h-28 border rounded-lg border-white grid place-items-center pointer text-5xl ${isSelected ? 'border-amber-400 bg-white' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}