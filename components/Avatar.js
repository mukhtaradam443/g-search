

function Avatar({url,className}) {
  return (
    <div>
        <img 
        loading="lazy"
        src={url} 
        alt="Profile picture" 
        className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-105${className}`}
        />
    </div>
  )
}

export default Avatar