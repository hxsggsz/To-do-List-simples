import { useRef } from "react"

export interface NewTodoProps {
   addTodoHandler: (TodoText: string) => void
}

export const NewTodoList: React.FC<NewTodoProps> = props => {
   const textInputRef = useRef<HTMLInputElement>(null)

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      const enteredText = textInputRef.current!.value 
      props.addTodoHandler(enteredText) //passando uma função de um arquivo para o outro
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" ref={textInputRef} />
         <button type="submit" >Enviar</button>
      </form>
   )
}