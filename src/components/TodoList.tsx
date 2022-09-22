interface todoInterface {
   items: {id: string, text: string}[],
   deleteItems: (id: string) => void
}

export const TodoList: React.FC<todoInterface> = props => {

   return ( 
      <ul>
         {props.items.map(todos => (
            <a key={todos.id} onClick={props.deleteItems.bind(null, todos.id)}><li>{todos.text}</li></a>
         ))}
      </ul>
   )
}