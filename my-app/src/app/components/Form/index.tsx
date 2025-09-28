export default function Form() {
    return (
        <form action="">
          <div className="flex justify-between items-center">
            <input type="text" value="" placeholder="Digite sua Tarefa" className="bg-gray-500 m-1 w-full text-white rounded-sm p-1"/>
            <button className="bg-gray-500 px-3 rounded-sm p-1">Enviar</button>
          </div>
        </form>
    )
}