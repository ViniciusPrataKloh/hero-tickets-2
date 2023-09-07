interface IProps{
  label: string;
  placeholder?: string;
  type: string;
}

export default function Input({label, placeholder, type}: IProps){
  return(
    <div>
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        id="name" name="name"
        className=""
      />
    </div>
  )
}